import { TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';

function MobileStepperEducationDetail(props) {

    const { index, educationDetailList, setEducationDetailList} = props;
    const handleChange = (event) => {
        setEducationDetailList(educationDetailList.map((item, i) => i === index ? {...item, [event.target.name]: event.target.value} : item));
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                <TextField
                    margin="dense"
                    label="Degree"
                    type="text"
                    placeholder='e.g. BSc/Msc/PhD'
                    value={educationDetailList[index].degree}
                    name='degree'
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Start Date"
                    placeholder='format: mm/dd/yyyy'
                    type="text"
                    value={educationDetailList[index].startYear}
                    name='startYear'
                    onChange={handleChange}
                    fullWidth
                />
                    <TextField
                        margin="dense"
                        label="End Date"
                        placeholder='format: mm/dd/yyyy'
                        type="text"
                        value={educationDetailList[index].endYear}
                        name='endYear'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="List of Courses"
                        placeholder='e.g. CS 101, CS 102, CS 103'
                        type="text"
                        value={educationDetailList[index].courseList}
                        name='courseList'
                        onChange={handleChange}
                        fullWidth
                    />

                    <TextField
                        margin="dense"
                        label="Major"
                        placeholder='e.g. Computer Science'
                        type="text"
                        value={educationDetailList[index].major}
                        name='major'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="GPA"
                        placeholder='e.g. 3.5'
                        type="text"
                        value={educationDetailList[index].gpa}
                        name='gpa'
                        onChange={handleChange}
                        fullWidth
                    />
                                </Box>
              
        </Box>
    );
}

export default MobileStepperEducationDetail;