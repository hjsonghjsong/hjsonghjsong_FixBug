import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';

function StepperProjectHistory(props) {

    const {input, projectHistoryList, setProjectHistoryList} = props;
    const index = parseInt(input.charAt(input.length-1));
    
    const handleChange = (event) => {
        setProjectHistoryList(projectHistoryList.map((item, i) => i === index ? {...item, [event.target.name]: event.target.value} : item));
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Company Name"
                    type="text"
                    value={projectHistoryList[index].company}
                    name='company'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Job Title"
                    type="text"
                    value={projectHistoryList[index].title}
                    name='title'
                    onChange={handleChange}
                    fullWidth
                />

            </Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <TextField
                    margin="dense"
                    label="Start Date"
                    type="text"
                    value={projectHistoryList[index].startDate}
                    name='startDate'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="End Date"
                    type="text"
                    value={projectHistoryList[index].endDate}
                    name='endDate'
                    onChange={handleChange}
                    fullWidth
                />
            </Box>
              
        </Box>
    );
}

export default StepperProjectHistory;