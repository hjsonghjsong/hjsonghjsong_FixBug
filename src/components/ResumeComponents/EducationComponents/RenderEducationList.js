import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import StepperEducationDetail from './StepperEducationDetail';
import { Add } from '@mui/icons-material';
import EducationDetail from '../../../models/EducationDetail';
import MobileStepperEducationDetail from './MobileStepperEducationDetail';
import useLocalStorage from 'use-local-storage';
import PrimaryButton from '../../Buttons/PrimaryButton';

const RenderEducationList = (props) => {

    const {educationDetailList, setEducationDetailList, personalDetail} = props;

    // bad code here, quick fix to update local storage and store personal data, need a better solution
    const [_, setPersonalDetailState] = useLocalStorage('personalDetail', personalDetail);

    React.useEffect(() => {
        setPersonalDetailState(personalDetail);
    }, [personalDetail]);
    // bad code ends here
    const addEducation = () => {
        setEducationDetailList([...educationDetailList, new EducationDetail().getState]);
    }

    return (
        <Box>
        <Box>
            <PrimaryButton
                    text="Add Education"
                    handleButton={addEducation}
                    icon={<Add />}
                />
        </Box>
        <Box>
            {educationDetailList.map((educationDetail, index) => (
                <Box key={index}>
                    <Typography variant='h6' sx={{py: '20px'}}>Education {index+1}</Typography>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <MobileStepperEducationDetail
                        index={index}
                        educationDetailList={educationDetailList}
                        setEducationDetailList={setEducationDetailList} />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <StepperEducationDetail
                        index={index}
                        educationDetailList={educationDetailList}
                        setEducationDetailList={setEducationDetailList} />
                        </Box>
                    
                </Box>
            ))}
        </Box>
        </Box>
    );
}

export default RenderEducationList;