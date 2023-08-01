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
import RenderJobPreference from './JobPreferenceComponents/RenderJobPreference';
import RenderWorkHistory from './WorkHistoryComponents/RenderWorkHistory';
import RenderGeneration from './GenerationComponents/RenderGeneration';
import RenderProjectHistory from './ProjectComponents/RenderProjectHistory';
import RenderSkills from './SkillsComponents/RenderSkills';

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
        {props.activeStep === 2 &&
          <RenderJobPreference
                jobPreference={props.jobPreference}
                setJobPreference={props.setJobPreference}
                />}
        {(props.steps[props.activeStep].match("Work Experience")) !== null && props.steps[props.activeStep].match("Work Experience")[0] === "Work Experience" && (
          <RenderWorkHistory
                input={props.steps[props.activeStep].match("Work Experience").input}
                workHistoryList={props.workHistoryList}
                setWorkHistoryList={props.setWorkHistoryList} />
          )}
        {(props.steps[props.activeStep].match("Work Description")) !== null && props.steps[props.activeStep].match("Work Description")[0] === "Work Description" && (
              <RenderGeneration
                  input={props.steps[props.activeStep].match("Work Description").input}
                  historyList={props.workHistoryList}
                  setHistoryList={props.setWorkHistoryList}
                  elongateStepper={props.elongateStepper}
                  bulletPointContext="Work Experience"
                  />
              )}
          {(props.steps[props.activeStep].match("Project History")) !== null && props.steps[props.activeStep].match("Project History")[0] === "Project History" && (
              <RenderProjectHistory
                  input={props.steps[props.activeStep].match("Project History").input}
                  projectHistoryList={props.projectHistoryList}
                  setProjectHistoryList={props.setProjectHistoryList} />
              )}
          {(props.steps[props.activeStep].match("Project Description")) !== null && props.steps[props.activeStep].match("Project Description")[0] === "Project Description" && (
              <RenderGeneration
                  input={props.steps[props.activeStep].match("Project Description").input}
                  historyList={props.projectHistoryList}
                  setHistoryList={props.setProjectHistoryList}
                  elongateStepper={props.elongateStepper} 
                  bulletPointContext="Project"
                  />
            )}
          {props.steps[props.activeStep].match("Skills") !== null && props.steps[props.activeStep].match("Skills")[0] === "Skills" && (
              <RenderSkills
                  skills={props.skills}
                  setSkills={props.setSkills}
                  workHistoryList={props.workHistoryList}
                  jobPreferenceState={props.jobPreferenceState}
               />
            )}
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
            disabled={props.activeStep === props.steps.length - 1}
          >
            {props.activeStep === props.steps.length - 1 ? 'Finish' : 'Next'}
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