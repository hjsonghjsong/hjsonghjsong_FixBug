import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepperPersonalDetail from './StepperPersonalDetail';
import TextMobileStepper from './TextMobileStepper';
import PersonalDetail from '../models/PersonalDetail';
import EducationDetail from '../models/EducationDetail';
import RenderEducationList from './EducationComponents/RenderEducationList';

const steps = ['Personal Details', 'Education', 'Work Experience'];

export default function CreateResumeStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const personalDetailInitialState = new PersonalDetail();
  const educationDetailInitialState = new EducationDetail();

  const [personalDetailState, setPersonalDetailState] = React.useState(personalDetailInitialState.getState);
  const [educationDetailState, setEducationDetailState] = React.useState(educationDetailInitialState.getState);

  const maxSteps = steps.length;

  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Box sx={{ display: { xs: 'block', md: 'none' }}}>
        <TextMobileStepper 
                steps={steps}
                personalDetail={personalDetailState}
                setPersonalDetail={setPersonalDetailState}
                educationDetail={educationDetailState}
                setEducationDetail={setEducationDetailState}
                handleNext={handleNext}
                handleBack={handleBack}
                activeStep={activeStep}
                maxSteps={maxSteps} />
        </Box>
      <Box sx={{ width: '95%', paddingX: '20px', display: { xs: 'none', md: 'block' }}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{minHeight: '20em'}}>
          {activeStep === 0 && (
          <StepperPersonalDetail 
                personalDetail={personalDetailState}
                setPersonalDetail={setPersonalDetailState} />
            )}
            {activeStep === 1 && (
              <RenderEducationList
                  educationDetail={educationDetailState}
                  setEducationDetail={setEducationDetailState} />
            )}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </Box>

  );
}
