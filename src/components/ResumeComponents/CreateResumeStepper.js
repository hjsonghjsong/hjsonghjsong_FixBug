import React from "react";
import StepperInitializer from "./StepperInitializer";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RenderPersonalDetail from "./PersonalDetailComponents/RenderPersonalDetail";
import RenderEducationList from './EducationComponents/RenderEducationList';
import RenderJobPreference from './JobPreferenceComponents/RenderJobPreference';
import RenderWorkHistory from './WorkHistoryComponents/RenderWorkHistory';
import RenderGeneration from './GenerationComponents/RenderGeneration';
import RenderSkills from './SkillsComponents/RenderSkills';
import RenderProjectHistory from './ProjectComponents/RenderProjectHistory';
import CreateResumeMobileStepper from "./CreateResumeMobileStepper";
import SendResumeInfo from "../../hooks/util";
import { Link } from "react-router-dom";
class CreateResumeStepper extends StepperInitializer {   

    render() {
        const { activeStep, steps } = this.state;
        return (
            <Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <CreateResumeMobileStepper
                        steps={this.state.steps}
                        activeStep={this.state.activeStep}
                        state={this.state}
                        setUser={this.setUser}
                        setPersonalDetail={this.setPersonalDetailState}
                        setEducationDetailList={this.setEducationDetailList}
                        setJobPreference={this.setJobPreferenceState}
                        setWorkHistoryList={this.setWorkHistoryList}
                        setProjectHistoryList={this.setProjectHistoryList}
                        setSkills={this.setSkills}
                        elongateStepper={this.elongateStepper}
                        handleNext={this.handleNext}
                        handleBack={this.handleBack}
                    />
                </Box>
                <Box sx={{ width: '95%', paddingX: '20px', display: { xs: 'none', md: 'block' } }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...stepProps} sx={{ paddingY: '20px' }}>
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
                                <Button onClick={this.handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Box sx={{ minHeight: '20em' }}>
                                {activeStep === 0 && (
                                    <RenderPersonalDetail
                                        personalDetail={this.state.personalDetailState}
                                        setPersonalDetail={this.setPersonalDetailState}
                                        user={this.state.user}
                                        setUser={this.setUser} />
                                )}
                                {activeStep === 1 && (
                                    <RenderEducationList
                                        educationDetailList={this.state.educationDetailList}
                                        setEducationDetailList={this.setEducationDetailList} />
                                )}
                                {activeStep === 2 && (
                                    <RenderJobPreference
                                        jobPreference={this.state.jobPreferenceState}
                                        setJobPreference={this.setJobPreferenceState} />
                                )}
                                {(steps[activeStep].match("Work Experience")) !== null && steps[activeStep].match("Work Experience")[0] === "Work Experience" && (
                                    <RenderWorkHistory
                                        input={steps[activeStep].match("Work Experience").input}
                                        workHistoryList={this.state.workHistoryList}
                                        setWorkHistoryList={this.setWorkHistoryList} />
                                )}
                                {(steps[activeStep].match("Work Description")) !== null && steps[activeStep].match("Work Description")[0] === "Work Description" && (
                                    <RenderGeneration
                                        input={steps[activeStep].match("Work Description").input}
                                        historyList={this.state.workHistoryList}
                                        setHistoryList={this.setWorkHistoryList}
                                        elongateStepper={this.elongateStepper}
                                        bulletPointContext="Work Experience"
                                    />
                                )}
                                {(steps[activeStep].match("Project History")) !== null && steps[activeStep].match("Project History")[0] === "Project History" && (
                                    <RenderProjectHistory
                                        input={steps[activeStep].match("Project History").input}
                                        projectHistoryList={this.state.projectHistoryList}
                                        setProjectHistoryList={this.setProjectHistoryList} />
                                )}
                                {(steps[activeStep].match("Project Description")) !== null && steps[activeStep].match("Project Description")[0] === "Project Description" && (
                                    <RenderGeneration
                                        input={steps[activeStep].match("Project Description").input}
                                        historyList={this.state.projectHistoryList}
                                        setHistoryList={this.setProjectHistoryList}
                                        elongateStepper={this.elongateStepper}
                                        bulletPointContext="Project"
                                    />
                                )}
                                {steps[activeStep].match("Skills") !== null && steps[activeStep].match("Skills")[0] === "Skills" && (
                                    <RenderSkills
                                        skills={this.state.skills}
                                        setSkills={this.setSkills}
                                        workHistoryList={this.state.workHistoryList}
                                        jobPreferenceState={this.state.jobPreferenceState}
                                    />
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={this.state.activeStep === 0}
                                    onClick={this.handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />

                                {this.state.activeStep === this.state.steps.length - 1 ? 
                                        <Link to={'/resume'}>
                                            <Button onClick={SendResumeInfo(this.state)}> 
                                            Finish 
                                            </Button> 
                                        </Link> : <Button onClick={this.handleNext}>Next</Button>}
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </Box>

        );

    }
}

export default CreateResumeStepper;