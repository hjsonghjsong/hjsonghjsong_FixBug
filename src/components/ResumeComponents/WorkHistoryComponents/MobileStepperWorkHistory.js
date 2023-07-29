import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';

function MobileStepperWorkHistory(props) {

    const { input, workHistoryList, setWorkHistoryList } = props;
    const index = parseInt(input.charAt(input.length - 1));
    const handleChange = (event) => {
        setWorkHistoryList(workHistoryList.map((item, i) => i === index ? {...item, [event.target.name]: event.target.value} : item));
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                     <TextField
                        margin="dense"
                        label="Country"
                        type="text"
                        value={workHistoryList[index].country}
                        name='country'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Start Date"
                        type="text"
                        value={workHistoryList[index].startDate}
                        name='startDate'
                        onChange={handleChange}
                        fullWidth
                    />
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
    );
}

export default MobileStepperWorkHistory;