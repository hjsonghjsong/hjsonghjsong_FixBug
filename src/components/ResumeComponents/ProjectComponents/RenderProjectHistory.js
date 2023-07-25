import * as React from 'react';
import Box from '@mui/material/Box';
import StepperProjectHistory from './StepperProjectHistory';
import MobileStepperProjectHistory from './MobileStepperProjectHistory';

const RenderProjectHistory = (props) => {

    return (
        <Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                {/* <MobileStepperProjectHistory {...props} /> */}
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <StepperProjectHistory {...props} />
            </Box>

        </Box>
    );
}

export default RenderProjectHistory;