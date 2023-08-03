import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepperPersonalDetail from './MobileStepperPersonalDetail';
import StepperPersonalDetail from './StepperPersonalDetail';
import { useAuth } from '../../../Contexts/Auth';

const RenderPersonalDetail = (props) => {
    const { user } = useAuth();
    React.useEffect(() => {
        props.setUser(user);
    }, []);

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