import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.title = props.title;
    }
    render(){
        return(
            <div>
            <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">{this.title}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </InputGroup>
            </div>
        );
    }
}

export default SearchBar;