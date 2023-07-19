import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import StepperEducationDetail from './StepperEducationDetail';
import { Add } from '@mui/icons-material';
import EducationDetail from '../../models/EducationDetail';
import MobileStepperEducationDetail from './MobileStepperEducationDetail';

const RenderEducationList = (props) => {

    const {educationDetailList, setEducationDetailList} = props;
    const addEducation = () => {
        setEducationDetailList([...educationDetailList, new EducationDetail().getState]);
    }

    return (
        <Box>
        <Box>
            <Button onClick={addEducation}>
                <Add />
                    <Typography>Add Another Education</Typography>
            </Button>
        </Box>
        <Box>
            {educationDetailList.map((educationDetail, index) => (
                <Box key={index}>
                    <Typography variant='h6' sx={{py: '20px'}}>Education {index+1}</Typography>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <MobileStepperEducationDetail
                        index={index}
                        educationDetailList={educationDetailList}
                        setEducationDetailList={setEducationDetailList} />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <StepperEducationDetail
                        index={index}
                        educationDetailList={educationDetailList}
                        setEducationDetailList={setEducationDetailList} />
                        </Box>
                    
                </Box>
            ))}
        </Box>
        </Box>
    );
}

export default RenderEducationList;