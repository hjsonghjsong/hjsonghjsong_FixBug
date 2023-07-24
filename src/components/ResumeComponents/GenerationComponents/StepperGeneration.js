import { Button, TextField, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CircularProgress from '@mui/material/CircularProgress';
import fetchBulletPoint from '../../../hooks/fetchBulletPoint';
import RenderGeneratedList from './RenderGeneratedList';
import AddIcon from '@mui/icons-material/Add';

function StepperGeneration(props) {
    
    const [loading, setLoading] = React.useState(false);
    const {input, workHistoryList, setWorkHistoryList, elongateStepper} = props;
    const index = parseInt(input.charAt(input.length-1));
    const handleChange = (event) => {
        setWorkHistoryList(workHistoryList.map((item, i) => i === index ? {...item, [event.target.name]: event.target.value} : item));
    }

    const handleSuggestPoints = () => {
        setLoading(true);
        fetchBulletPoint(workHistoryList[index]).then((res) => {
            setWorkHistoryList(workHistoryList.map((item, i) => i === index ? {...item, generatedContent: res.bullet_points} : item));
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
                    label="Work Description For Previous Job"
                    type="text"
                    multiline
                    value={workHistoryList[index].helperText}
                    name='helperText'
                    onChange={handleChange}
                    fullWidth
                />
                <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    {loading? <CircularProgress /> :
                    <Button 
                        variant="contained" 
                        endIcon={<OfflineBoltIcon />}
                        size='small'
                        onClick={handleSuggestPoints}
                    >
                    Suggest Points
                    </Button>
                    }
                </Box>
            </Box>
            <Box>
            <RenderGeneratedList  
                    index={index}
                    workHistoryList={workHistoryList}
                    setWorkHistoryList={setWorkHistoryList} 
            />
            <Button onClick={elongateStepper('WorkHistory')}>
                <AddIcon />
                <Typography>Add Another Work</Typography>
            </Button>
            </Box>
        </Box>
    );
}

export default StepperGeneration;