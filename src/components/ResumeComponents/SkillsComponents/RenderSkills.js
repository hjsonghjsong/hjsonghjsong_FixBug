import * as React from 'react';
import Box from '@mui/material/Box';
import StepperSkills from './StepperSkills';

const RenderSkills = (props) => {

    return (
        <Box>
            <Box >
                <StepperSkills {...props} />
            </Box>

        </Box>
    );
}

export default RenderSkills;