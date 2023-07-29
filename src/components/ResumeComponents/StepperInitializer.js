import React from 'react';
import PersonalDetail from '../models/PersonalDetail';
import EducationDetail from '../models/EducationDetail';
import JobPreference from '../models/JobPreference';
import WorkHistory from '../models/WorkHistory';
import Generation from '../models/Generation';

class StepperInitializer extends React.Component{
    constructor(props){
        super(props);
        const personalDetailInitialState = new PersonalDetail();
        const educationDetailInitialState = new EducationDetail();
        const jobPreferenceInitialState = new JobPreference();
        const workHistoryInitialState = new WorkHistory();
        const generationInitialState = new Generation();

        this.state = {
            activeStep: 0,
            skipped: new Set(),
            personalDetailState: personalDetailInitialState.getState,
            educationDetailList: [educationDetailInitialState.getState],
            jobPreferenceState: jobPreferenceInitialState.getState,
            workHistoryList: [workHistoryInitialState.getState],
            generationState: generationInitialState.getState,
            steps: ['Personal Details', 'Education', 'Job Preference', 'Work Experience', 'Work Description'],
            maxSteps: 5,
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.isStepOptional = this.isStepOptional.bind(this);
        this.isStepSkipped = this.isStepSkipped.bind(this);
        this.setActiveStep = this.setActiveStep.bind(this);
        this.setSkipped = this.setSkipped.bind(this);
        this.setPersonalDetailState = this.setPersonalDetailState.bind(this);
        this.setEducationDetailList = this.setEducationDetailList.bind(this);
        this.setJobPreferenceState = this.setJobPreferenceState.bind(this);
        this.setWorkHistoryList = this.setWorkHistoryList.bind(this);
        this.setGenerationState = this.setGenerationState.bind(this);
        this.setSteps = this.setSteps.bind(this);

    }

    handleNext = () => {
        let newSkipped = this.state.skipped;
        if (this.isStepSkipped(this.state.activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(this.state.activeStep);
        }

        this.setActiveStep((prevActiveStep) => prevActiveStep + 1);
        this.setSkipped(newSkipped);
    }

    handleBack = () => {
        this.setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    handleSkip = () => {
        if (!this.isStepOptional(this.state.activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setActiveStep((prevActiveStep) => prevActiveStep + 1);
        this.setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(this.state.activeStep);
            return newSkipped;
        });
    }

    handleReset = () => {
        this.setActiveStep(0);
        this.setSkipped(new Set());
    }

    isStepOptional = (step) => {
        return step === 51;
    }

    isStepSkipped = (step) => {
        return this.state.skipped.has(step);
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

    setSteps = (steps) => {
        this.setState({steps: steps});
    }
}

export default StepperInitializer;