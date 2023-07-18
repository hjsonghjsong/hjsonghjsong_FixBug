import React from 'react';

class PersonalDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            state: "",
            zip: "",
            socialList: [],
        }
    }
    get getState(){
        return this.state;
    }
    get InitialSocialDetailState(){
        return ({
            source: "",
            website: ""
        });
    }
}

export default PersonalDetail;