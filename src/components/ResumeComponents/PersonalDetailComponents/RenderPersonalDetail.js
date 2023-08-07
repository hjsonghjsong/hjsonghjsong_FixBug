import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepperPersonalDetail from './MobileStepperPersonalDetail';
import StepperPersonalDetail from './StepperPersonalDetail';
import { useAuth } from '../../../Contexts/Auth';
import useLocalStorage from 'use-local-storage';
const RenderPersonalDetail = (props) => {
    const { user } = useAuth();
    const [previousPersonalDetailState, _] = useLocalStorage('personalDetail');
    React.useEffect(() => {
        props.setUser(user);
        if(user){
            props.setPersonalDetail(previousPersonalDetailState);
        }
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