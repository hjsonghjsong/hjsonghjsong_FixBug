import React from 'react';
import PersonalDetail from '../../models/PersonalDetail';
import EducationDetail from '../../models/EducationDetail';
import JobPreference from '../../models/JobPreference';
import WorkHistory from '../../models/WorkHistory';
import Generation from '../../models/Generation';
import ProjectHistory from '../../models/ProjectHistory';
import Steps from '../../models/Steps';
import { SendResumeInfo } from '../../hooks/util';
import { evaluateResume } from '../../hooks/evaluateResume';
class StepperInitializer extends React.Component{
    constructor(props){
        super(props);
        const personalDetailInitialState = new PersonalDetail();
        const educationDetailInitialState = new EducationDetail();
        const jobPreferenceInitialState = new JobPreference();
        const workHistoryInitialState = new WorkHistory();
        const generationInitialState = new Generation();
        const projectHistoryInitialState = new ProjectHistory();
        const stepsInitialState = new Steps();

        this.state = {
            activeStep: 0,
            personalDetailState: personalDetailInitialState.getState,
            educationDetailList: [educationDetailInitialState.getState],
            jobPreferenceState: jobPreferenceInitialState.getState,
            workHistoryList: [workHistoryInitialState.getState],
            generationState: generationInitialState.getState,
            projectHistoryList: [projectHistoryInitialState.getState],
            skills: [generationInitialState.getState],
            steps: stepsInitialState.getState,
            user: {},
            openDialog: false,
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.setActiveStep = this.setActiveStep.bind(this);
        this.setPersonalDetailState = this.setPersonalDetailState.bind(this);
        this.setEducationDetailList = this.setEducationDetailList.bind(this);
        this.setJobPreferenceState = this.setJobPreferenceState.bind(this);
        this.setWorkHistoryList = this.setWorkHistoryList.bind(this);
        this.setGenerationState = this.setGenerationState.bind(this);
        this.setProjectHistoryList = this.setProjectHistoryList.bind(this);
        this.setSkills = this.setSkills.bind(this);
        this.elongateStepper = this.elongateStepper.bind(this);
        this.setSteps = this.setSteps.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setOpenDialog = this.setOpenDialog.bind(this);
    }

    elongateStepper = (type) => (event) =>{
        const match = type.substring(0, type.length-2);
          if(match === 'Work Description'){
            this.setWorkHistoryList([...this.state.workHistoryList, new WorkHistory().getState]);
            const newSteps =[...this.state.steps.slice(0, this.state.activeStep+1), `Work Experience ${this.state.workHistoryList.length}`, `Work Description ${this.state.workHistoryList.length}`, ...this.state.steps.slice(this.state.activeStep+1)];
            this.setSteps(newSteps);
        }
          if(match === 'Project Description'){
            this.setProjectHistoryList([...this.state.projectHistoryList, new ProjectHistory().getState]);
            const newSteps =[...this.state.steps.slice(0, this.state.activeStep+1), `Project History ${this.state.projectHistoryList.length}`, `Project Description ${this.state.projectHistoryList.length}`, ...this.state.steps.slice(this.state.activeStep+1)];
            this.setSteps(newSteps);
          }
    
    }

    handleNext = () => {
        this.setWorkHistoryList(Object.values(this.state.workHistoryList)); // dirty fix for bug in new stepper generation, converting obj of obj to array of obj
        this.setProjectHistoryList(Object.values(this.state.projectHistoryList)); // dirty fix for bug in new stepper generation, converting obj of obj to array of obj
        this.setActiveStep(this.state.activeStep + 1);
    }

    handleFinish = async () => {
        if(this.state.user){
            const resumeId = await SendResumeInfo(this.state);
            console.log("Evaluate Resume not working....");
            // await evaluateResume(this.state, resumeId);
        }
        else{
            this.setOpenDialog(!this.state.openDialog);
        }
    }

    handleBack = () => {
        this.setActiveStep(this.state.activeStep - 1);
    }

    handleReset = () => {
        this.setActiveStep(0);
        this.setSkipped(new Set());
    }

    setActiveStep = (step) => {
        this.setState({activeStep: step});
    }

    setSkipped = (skipped) => {
        this.setState({skipped: skipped});
    }

    setPersonalDetailState = (personalDetailState) => {
        this.setState({personalDetailState: personalDetailState});
    }

    setEducationDetailList = (educationDetailList) => {
        this.setState({educationDetailList: educationDetailList});
    }

    setJobPreferenceState = (jobPreferenceState) => {
        this.setState({jobPreferenceState: jobPreferenceState});
    }

    setWorkHistoryList = (workHistoryList) => {
        this.setState({workHistoryList: workHistoryList});
    }

    setGenerationState = (generationState) => {
        this.setState({generationState: generationState});
    }

    setProjectHistoryList = (projectHistoryList) => {
        this.setState({projectHistoryList: projectHistoryList});
    }

    setSkills = (skills) => {
        this.setState({skills: skills});
    }

    setSteps = (steps) => {
        this.setState({steps: steps});
    }
    setUser = (user) => {
        this.setState({user: user});
    }
    setOpenDialog = (openDialog) => {
        this.setState({openDialog: openDialog});
    }

}

export default StepperInitializer;