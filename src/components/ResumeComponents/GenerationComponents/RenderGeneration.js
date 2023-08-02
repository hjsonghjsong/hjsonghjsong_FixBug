import * as React from 'react';
import Box from '@mui/material/Box';
import StepperGeneration from './StepperGeneration';

const RenderGeneration = (props) => {

    return (
        <Box>
            <Box>
                <StepperGeneration {...props}/>
            </Box>

        </Box>
    );
}

export default RenderGeneration;