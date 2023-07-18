import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';

function StepperEducationDetail(props) {

    
    const { educationDetail, setEducationDetail} = props;

    const handleChange = (event) => {
        setEducationDetail({...educationDetail, [event.target.name]: event.target.value});
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
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

            </Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <Box width="50%">
                    <TextField
                        margin="dense"
                        label="Degree"
                        type="text"
                        value={educationDetail.degree}
                        name='degree'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box width="50%">
                    <TextField
                        margin="dense"
                        label="Start Date"
                        type="text"
                        value={educationDetail.startDate}
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
                        value={educationDetail.endDate}
                        name='endDate'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <Box width="60%">
                    <TextField
                        margin="dense"
                        label="Field of Study"
                        type="text"
                        value={educationDetail.major}
                        name='major'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box width="30%">
                    <TextField
                        margin="dense"
                        label="Number of Courses"
                        type="text"
                        value={educationDetail.numCourses}
                        name='numCourses'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box width="20%">
                    <TextField
                        margin="dense"
                        label="CGPA"
                        type="text"
                        value={educationDetail.gpa}
                        name='gpa'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
            </Box>
              
        </Box>
    );
}

export default StepperEducationDetail;