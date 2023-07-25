import React from 'react';

class Steps extends React.Component{
    constructor(props){
        super(props);
        this.state = [
            'Personal Details',
            'Education',
            'Job Preference',
            'Work Experience 0',
            'Work Description 0',
            'Project History 0',
            'Project Description 0',
            'Skills'
        ]
    }
    get getState(){
        return this.state;
    }
}

export default Steps;