import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search-bar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.title = props.title
        this.image = props.image
    }
    render(){
        return(
            <div>
            <InputGroup className="body">
                    <InputGroup.Prepend >
                        <InputGroup.Text className="icon"
                            id="inputGroup-sizing-default"/>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder={this.title}/>
            </InputGroup>
            </div>
        );
    }
}

export default SearchBar;