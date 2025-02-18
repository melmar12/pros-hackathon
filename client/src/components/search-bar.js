import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search-bar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.image = props.image
        this.defaultText = props.defaultText;
        this.change = props.change;
        this.newClassName = props.newClassName;
    }

    render(){
        return(
            <div>
            <InputGroup className={this.newClassName}>
                    <InputGroup.Prepend>
                        <InputGroup.Text
                            className="img-container "
                            id="inputGroup-sizing-default">
                                <img className="img" src={this.image}/>
                            </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default"
                                 aria-describedby="inputGroup-sizing-default"
                                 type="text"
                                 placeholder={this.defaultText}
                                 onChange={this.change}/>
            </InputGroup>
            </div>
        );
    }
}

export default SearchBar;
