import * as React from 'react';
import Box from '@mui/material/Box';
import StepperWorkHistory from './StepperWorkHistory';
import MobileStepperWorkHistory from './MobileStepperWorkHistory';

const RenderWorkHistory = (props) => {

    return (
        <Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <MobileStepperWorkHistory {...props} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <StepperWorkHistory {...props} />
            </Box>

        </Box>
    );
}

export default RenderWorkHistory;