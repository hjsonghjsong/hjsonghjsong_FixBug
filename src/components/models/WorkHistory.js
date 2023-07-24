import React from 'react';
import Generation from './Generation';

class WorkHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            company: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            city: "",
            state: "",
            country: "",
        }
    }
    get getState(){
        return {...this.state, ...new Generation().getState};
    }
}

export default WorkHistory;