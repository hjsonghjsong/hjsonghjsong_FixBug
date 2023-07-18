import { TextField, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Add } from '@mui/icons-material';
import Button from '@mui/material/Button';

function MobileStepperEducationDetail(props) {

    const {educationDetail, setEducationDetail} = props;
    const handleChange = (event) => {
        setEducationDetail({...educationDetail, [event.target.name]: event.target.value});
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="University/College Name"
                    type="text"
                    value={educationDetail.name}
                    name='name'
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    label="University/College Location"
                    type="text"
                    value={educationDetail.location}
                    name='location'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Degree"
                    type="text"
                    value={educationDetail.degree}
                    name='degree'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Start Date"
                    type="text"
                    value={educationDetail.startDate}
                    name='startDate'
                    onChange={handleChange}
                    fullWidth
                />
                    <TextField
                        margin="dense"
                        label="End Date"
                        type="text"
                        value={educationDetail.endDate}
                        name='endDate'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Major"
                        type="text"
                        value={educationDetail.major}
                        name='major'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="GPA"
                        type="text"
                        value={educationDetail.gpa}
                        name='gpa'
                        onChange={handleChange}
                        fullWidth
                    />
                                </Box>
              
        </Box>
    );
}

export default MobileStepperEducationDetail;