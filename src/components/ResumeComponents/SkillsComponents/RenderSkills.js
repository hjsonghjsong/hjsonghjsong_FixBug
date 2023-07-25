import * as React from 'react';
import Box from '@mui/material/Box';
import StepperSkills from './StepperSkills';
import MobileStepperSkills from './MobileStepperSkills';

const RenderSkills = (props) => {

    return (
        <Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                {/* <MobileStepperSkills {...props} /> */}
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <StepperSkills {...props} />
            </Box>

        </Box>
    );
}

export default RenderSkills;