import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search-bar.css';
import Arrow from "../img/arrow.svg"
import Circle from "../img/circle.svg"
import ArrowRt from "../img/right.svg"
import ArrowLft from "../img/left.svg"
import Cal from "../img/cal.svg"

class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.image = props.image
        this.defaultText = props.defaultText;
        this.change = props.change;
    }

    render(){
        return(
            <div>
                <InputGroup className="">
                    <InputGroup.Prepend >
                        <InputGroup.Text
                            className="img-container"
                            id="inputGroup-sizing-default">
                            <img className="img calImg" src={Cal}/>
                              Fri, Sep 4
                            <img className="img arrImg" src={ArrowLft}/>
                            <img className="img arrImg" src={ArrowRt}/>
                            Sun, Sep 6
                            <img className="img arrImg" src={ArrowLft}/>
                            <img className="img arrImg" src={ArrowRt}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </div>
        );
    }
}

export default DatePicker;
