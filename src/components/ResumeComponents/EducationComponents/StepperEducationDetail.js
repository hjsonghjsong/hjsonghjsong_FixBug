import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';

function StepperEducationDetail(props) {

    
    const { index, educationDetailList, setEducationDetailList} = props;
    const handleChange = (event) => {
        setEducationDetailList(educationDetailList.map((item, i) => i === index ? {...item, [event.target.name]: event.target.value} : item));
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'space-between', gap: '20px' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="University/College Name"
                    type="text"
                    value={educationDetailList[index].name}
                    name='name'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="University/College Location"
                    type="text"
                    value={educationDetailList[index].location}
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
                        value={educationDetailList[index].degree}
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
                        value={educationDetailList[index].startYear}
                        name='startYear'
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box width="50%">
                    <TextField
                        margin="dense"
                        label="End Date"
                        type="text"
                        value={educationDetailList[index].endYear}
                        name='endYear'
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
                        value={educationDetailList[index].major}
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
                        value={educationDetailList[index].numCourses}
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
                        value={educationDetailList[index].gpa}
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