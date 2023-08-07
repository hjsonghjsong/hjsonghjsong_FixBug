import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CircularProgress from '@mui/material/CircularProgress';
import fetchSkills from '../../../hooks/fetchSkills';
import RenderGeneratedList from '../GenerationComponents/RenderGeneratedList';
import PrimaryButton from '../../Buttons/PrimaryButton';

function StepperSkills(props) {
    
    const [loading, setLoading] = React.useState(false);
    const {skills, setSkills, workHistoryList} = props;
    
    
    const handleChange = (event) => {
        setSkills([{...skills[0], [event.target.name]: event.target.value}]);
    }

    const handleSuggestPoints = () => {
        setLoading(true);
        fetchSkills(workHistoryList, skills).then((res) => {
            setSkills([{...skills, generatedContent: res.relevant_skills}]);
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
                    label='Skills'
                    type="text"
                    multiline
                    value={skills[0].helperText}
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
                    index={0}
                    historyList={skills}
                    setHistoryList={setSkills} 
            />
            </Box>
        </Box>
    );
}

export default StepperSkills;