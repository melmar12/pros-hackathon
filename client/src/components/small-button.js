import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class SmallButton extends React.Component{
    
    constructor(props){
        super(props);
        this.title = props.title;
        this.onClick = props.onClick;
        this.className = props.className;
        this.image = props.image;
    }

    render(){
        return(
            <Button
                onClick={this.onClick} 
                className="circle-btn">
                    <img className="option-img" src={this.image}/>
            </Button>
            );
    }
}

export default SmallButton;
