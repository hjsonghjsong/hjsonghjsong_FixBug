import React from 'react';

class EducationDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            location: "",
            degree: "",
            startYear: "",
            endYear: "",
            major: "",
            courseList: "",
            gpa: "",
        };
    }
    get getState(){
        return this.state;
    }
}

export default EducationDetail;