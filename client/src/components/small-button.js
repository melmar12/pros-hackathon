import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import optionImg from './../img/more.png';

class SmallButton extends React.Component{
    
    constructor(props){
        super(props);
        this.title = props.title;
        this.onClick = props.onClick;
        this.className = props.className;
    }

    render(){
        return(
            <Button
                onClick={this.onClick} 
                className="circle-btn">
                    <img className="option-img" src={optionImg}/>
            </Button>
            );
    }
}

export default SmallButton;
