import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';

function StepperWorkHistory(props) {

    const {input, workHistoryList, setWorkHistoryList} = props;
    const index = parseInt(input.charAt(input.length-1));
    
    const handleChange = (event) => {
        setWorkHistoryList(workHistoryList.map((item, i) => i === index ? {...item, [event.target.name]: event.target.value} : item));
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Company Name"
                    type="text"
                    value={workHistoryList[index].company}
                    name='company'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Job Title"
                    type="text"
                    value={workHistoryList[index].jobTitle}
                    name='jobTitle'
                    onChange={handleChange}
                    fullWidth
                />

            </Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <TextField
                    margin="dense"
                    label="City"
                    type="text"
                    value={workHistoryList[index].city}
                    name='city'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="State/Province"
                    type="text"
                    value={workHistoryList[index].state}
                    name='state'
                    onChange={handleChange}
                    fullWidth
                />
            </Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <Box width="50%">
                    <TextField
                        margin="dense"
                        label="Country"
                        type="text"
                        value={workHistoryList[index].country}
                        name='country'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box width="50%">
                    <TextField
                        margin="dense"
                        label="Start Date"
                        type="text"
                        value={workHistoryList[index].startDate}
                        name='startDate'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box width="50%">
                    <TextField
                        margin="dense"
                        label="End Date"
                        type="text"
                        value={workHistoryList[index].endDate}
                        name='endDate'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
            </Box>
              
        </Box>
    );
}

export default StepperWorkHistory;