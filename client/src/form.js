import React, {Component} from 'react';
//import axios from 'axios';
import SearchBar from "./components/search-bar";
import SmallButton from "./components/small-button";

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: "",
            defaultText: "hi"
        }
        this.handleSearch()
    }

    handleSearch(){
        console.log()
    }

    onSubmit(e) {
        e.preventDefault()
        this.handleSearch()
    }

    render() {
        return (
            <div>
                <SearchBar
                    id='search-bar-one'
                    title="Loaction1"
                />
                <SearchBar
                    id='search-bar-two'
                    title="Destination"/>
                <SmallButton
                    id='search-button-one'
                    title='Search Button'/>
            </div>
        )
    }

}
