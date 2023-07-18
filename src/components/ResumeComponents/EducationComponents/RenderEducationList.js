import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import StepperEducationDetail from './StepperEducationDetail';
import { Add } from '@mui/icons-material';

const RenderEducationList = (props) => {

    const {educationDetail, setEducationDetail} = props;

    return (
        <Box>
        <Box>
            <Button>
                <Add />
                    <Typography>Add Another Education</Typography>
            </Button>
        </Box>
        <Box>
        
                <StepperEducationDetail
                    educationDetail={educationDetail} 
                    setEducationDetail={setEducationDetail} />
        </Box>
        </Box>
    );
}

export default RenderEducationList;