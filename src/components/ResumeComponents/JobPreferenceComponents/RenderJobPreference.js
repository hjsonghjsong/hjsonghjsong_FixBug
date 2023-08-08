import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, TextField } from '@mui/material';

function RenderJobPreference(props) {

    const {jobPreference, setJobPreference} = props;
    const handleChange = (event) => {
        setJobPreference({...jobPreference, [event.target.name]: event.target.value});
    }
    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '40vh'}}>
            
            <Typography 
                variant='h6'
                sx={{paddingBottom: '5vh'}}>What type of job are you looking for?
            </Typography>

            <TextField
                sx={{width: '35%'}}
                autoFocus
                margin="dense"
                label="Job Title"
                type="text"
                placeholder='e.g. Software Engineer or some URL'
                value={jobPreference.jobTitle}
                name='jobTitle'
                onChange={handleChange}
                />
            </Box>
        </Box>
    );
}

export default RenderJobPreference;