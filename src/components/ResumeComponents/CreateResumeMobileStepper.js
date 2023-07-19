import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import RenderEducationList from './EducationComponents/RenderEducationList';
import RenderPersonalDetail from './PersonalDetailComponents/RenderPersonalDetail';


export default function CreateResumeMobileStepper(props) {
  const theme = useTheme();
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{props.steps[props.activeStep]}</Typography>
      </Paper>
      <Box sx={{ width: '100%', p: 2 }}>
        {props.activeStep === 0 && 
          <RenderPersonalDetail 
                personalDetail={props.personalDetail}
                setPersonalDetail={props.setPersonalDetail} />}
        {props.activeStep === 1 && 
          <RenderEducationList
                educationDetailList={props.educationDetailList}
                setEducationDetailList={props.setEducationDetailList} />}
      </Box>
      <MobileStepper
        variant="text"
        steps={props.maxSteps}
        position="static"
        activeStep={props.activeStep}
        nextButton={
          <Button
            size="small"
            onClick={props.handleNext}
            disabled={props.activeStep === props.maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={props.handleBack} disabled={props.activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}