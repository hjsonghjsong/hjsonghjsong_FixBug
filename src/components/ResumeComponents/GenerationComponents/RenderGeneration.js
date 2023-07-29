import * as React from 'react';
import Box from '@mui/material/Box';
import StepperGeneration from './StepperGeneration';

const RenderGeneration = (props) => {

    return (
        <Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <StepperGeneration {...props}/>
            </Box>

        </Box>
    );
}

export default RenderGeneration;