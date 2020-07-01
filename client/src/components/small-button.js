import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class SmallButton extends React.Component{
    
    constructor(props){
        super(props);
        this.title = props.title;
        this.onClick = props.onClick;
    }

    render(){
        return(
            <Button variant="outline-primary" onClick={this.onClick}>{this.title}</Button>
            );
    }
}

export default SmallButton;
