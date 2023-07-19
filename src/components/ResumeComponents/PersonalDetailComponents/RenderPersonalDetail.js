import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepperPersonalDetail from './MobileStepperPersonalDetail';
import StepperPersonalDetail from './StepperPersonalDetail';
const RenderPersonalDetail = (props) => {

    return (
        <Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <MobileStepperPersonalDetail
                    personalDetail={props.personalDetail}
                    setPersonalDetail={props.setPersonalDetail} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <StepperPersonalDetail
                    personalDetail={props.personalDetail}
                    setPersonalDetail={props.setPersonalDetail} />
            </Box>

        </Box>
    );
}

export default RenderPersonalDetail;