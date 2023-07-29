import React from 'react';

class JobPreference extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                jobTitle: "",
        }
    }
    get getState(){
        return this.state;
    }
}

export default JobPreference;