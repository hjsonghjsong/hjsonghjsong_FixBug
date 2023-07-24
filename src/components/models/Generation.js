import React from 'react';

class Generation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                helperText: "",
                generatedContent: [],
                numOfPoints: 5,
        }
    }
    get getState(){
        return this.state;
    }
}

export default Generation;