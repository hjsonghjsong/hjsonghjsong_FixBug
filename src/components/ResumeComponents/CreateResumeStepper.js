import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonalDetail from '../../models/PersonalDetail';
import EducationDetail from '../../models/EducationDetail';
import JobPreference from '../../models/JobPreference';
import WorkHistory from '../../models/WorkHistory';
import Generation from '../../models/Generation';
import ProjectHistory from '../../models/ProjectHistory';
import Steps from '../../models/Steps';
import CreateResumeMobileStepper from './CreateResumeMobileStepper';
import RenderEducationList from './EducationComponents/RenderEducationList';
import RenderPersonalDetail from './PersonalDetailComponents/RenderPersonalDetail';
import RenderJobPreference from './JobPreferenceComponents/RenderJobPreference';
import RenderWorkHistory from './WorkHistoryComponents/RenderWorkHistory';
import RenderGeneration from './GenerationComponents/RenderGeneration';
import RenderSkills from './SkillsComponents/RenderSkills';
import RenderProjectHistory from './ProjectComponents/RenderProjectHistory';

export default function CreateResumeStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const personalDetailInitialState = new PersonalDetail();
  const educationDetailInitialState = new EducationDetail();
  const jobPreferenceInitialState = new JobPreference();
  const workHistoryInitialState = new WorkHistory();
  const projectHistoryInitialState = new ProjectHistory();
  const stepsInitialState = new Steps();

  const [personalDetailState, setPersonalDetailState] = React.useState(personalDetailInitialState.getState);
  const [educationDetailList, setEducationDetailList] = React.useState([educationDetailInitialState.getState]);
  const [jobPreferenceState, setJobPreferenceState] = React.useState(jobPreferenceInitialState.getState);
  const [workHistoryList, setWorkHistoryList] = React.useState([workHistoryInitialState.getState]);
  const [projectHistoryList, setProjectHistoryList] = React.useState([projectHistoryInitialState.getState]);
  const [skills, setSkills] = React.useState([new Generation().getState]);
  const [steps, setSteps] = React.useState(stepsInitialState.getState);
  
  const maxSteps = steps.length;

  const isStepOptional = (step) => {
    return step === 51;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const elongateStepper = (type) => (event) =>{
    const match = type.substring(0, type.length-2);
      if(match === 'Work Description'){
        setWorkHistoryList([...workHistoryList, new WorkHistory().getState]);
        const newSteps =[...steps.slice(0, activeStep+1), `Work Experience ${workHistoryList.length}`, `Work Description ${workHistoryList.length}`, ...steps.slice(activeStep+1)];
        setSteps(newSteps);
  }
      if(match === 'Project Description'){
        setProjectHistoryList([...projectHistoryList, new ProjectHistory().getState]);
        const newSteps =[...steps.slice(0, activeStep+1), `Project History ${projectHistoryList.length}`, `Project Description ${projectHistoryList.length}`, ...steps.slice(activeStep+1)];
        setSteps(newSteps);
      }

}

  const handleNext = () => {
    console.log(skills);
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
        <CreateResumeMobileStepper 
                steps={steps}
                personalDetail={personalDetailState}
                setPersonalDetail={setPersonalDetailState}
                educationDetailList={educationDetailList}
                setEducationDetailList={setEducationDetailList}
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
            <Step key={label} {...stepProps} sx={{paddingY: '20px'}}>
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
          <RenderPersonalDetail 
                personalDetail={personalDetailState}
                setPersonalDetail={setPersonalDetailState} />
            )}
            {activeStep === 1 && (
              <RenderEducationList
                  educationDetailList={educationDetailList}
                  setEducationDetailList={setEducationDetailList} />
            )}
            {activeStep === 2 && (
              <RenderJobPreference 
                  jobPreference={jobPreferenceState}
                  setJobPreference={setJobPreferenceState}
                  />)}
            {(steps[activeStep].match("Work Experience")) !== null && steps[activeStep].match("Work Experience")[0] === "Work Experience" && (
              <RenderWorkHistory
                  input={steps[activeStep].match("Work Experience").input}
                  workHistoryList={workHistoryList}
                  setWorkHistoryList={setWorkHistoryList} />
              )}
            {(steps[activeStep].match("Work Description")) !== null && steps[activeStep].match("Work Description")[0] === "Work Description" && (
              <RenderGeneration
                  input={steps[activeStep].match("Work Description").input}
                  historyList={workHistoryList}
                  setHistoryList={setWorkHistoryList}
                  elongateStepper={elongateStepper} />
              )}
            {(steps[activeStep].match("Project History")) !== null && steps[activeStep].match("Project History")[0] === "Project History" && (
              <RenderProjectHistory
                  input={steps[activeStep].match("Project History").input}
                  projectHistoryList={projectHistoryList}
                  setProjectHistoryList={setProjectHistoryList} />
              )}
            {(steps[activeStep].match("Project Description")) !== null && steps[activeStep].match("Project Description")[0] === "Project Description" && (
              <RenderGeneration
                  input={steps[activeStep].match("Project Description").input}
                  historyList={projectHistoryList}
                  setHistoryList={setProjectHistoryList}
                  elongateStepper={elongateStepper} />
            )}
            {steps[activeStep].match("Skills") !== null && steps[activeStep].match("Skills")[0] === "Skills" && (
              <RenderSkills
                  skills={skills}
                  setSkills={setSkills}
                  workHistoryList={workHistoryList}
                  jobPreferenceState={jobPreferenceState}
               />
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
