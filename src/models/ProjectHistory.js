import React from 'react';
import Generation from './Generation';

class ProjectHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            company: "",
            title: "",
            startDate: "",
            endDate: "",
        }
    }
    get getState(){
        return {...this.state, ...new Generation().getState};
    }
}

export default ProjectHistory;