import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CircularProgress from '@mui/material/CircularProgress';
import fetchBulletPoint from '../../../hooks/fetchBulletPoint';
import RenderGeneratedList from './RenderGeneratedList';
import AddIcon from '@mui/icons-material/Add';
import PrimaryButton from '../../Buttons/PrimaryButton';

function StepperGeneration(props) {

    const [loading, setLoading] = React.useState(false);
    const { input, historyList, setHistoryList, elongateStepper, bulletPointContext } = props;
    const index = parseInt(input.charAt(input.length - 1));
    
    const [suggestedList, setSuggestedList] = React.useState(historyList[index].generatedContent);
    
    const handleChange = (event) => {
        setHistoryList(historyList.map((item, i) => i === index ? { ...item, [event.target.name]: event.target.value } : item));
    }

    const handleSuggestPoints = () => {
        setLoading(true);
        fetchBulletPoint(historyList[index], bulletPointContext).then((res) => {
            setHistoryList(historyList.map((item, i) => i === index ? { ...item, generatedContent: res.bullet_points } : item));
            setSuggestedList([...suggestedList, ...res.bullet_points]);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px', paddingBlockStart: '10px' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    label={input}
                    type="text"
                    multiline
                    value={historyList[index].helperText}
                    name='helperText'
                    onChange={handleChange}
                    fullWidth
                />
                <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    {loading? <CircularProgress /> :
                    <PrimaryButton
                        text="Submit"
                        handleButton={handleSuggestPoints}
                        icon={<OfflineBoltIcon />}
                    />
                    }
                </Box>
            </Box>
            <Box>
                <RenderGeneratedList
                    index={index}
                    historyList={historyList}
                    setHistoryList={setHistoryList} 
                    suggestedList={suggestedList}
                    className="my-4"
            />
            
            <Box sx={{ display: 'flex', flexGrow: 1}}>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{display: 'flex'}}>
                {index === historyList.length-1 &&
                <PrimaryButton
                    text={`Add ${input}`}
                    handleButton={elongateStepper(input)}
                    icon={<AddIcon />}
                    sx={{marginBlockStart: '10px'}}
                />
                }
            </Box>
            </Box>
            </Box>
        </Box>
    );
}

export default StepperGeneration;
