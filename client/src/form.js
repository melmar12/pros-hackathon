import React, {Component} from 'react'
import axios from 'axios'
import {Col} from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import SearchBar from "./components/search-bar"
import SmallButton from "./components/small-button"
import DatePicker from "./components/datepicker"

import SearchImg from './img/search.png'
import Pin from "./img/pin.png"
import Circle from "./img/circle.svg"

import './css/Form.css'
import './css/results.css'
import Results from "./Results";


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.onChangeLocationA = this.onChangeLocationA.bind(this)
        this.onChangeLocationB = this.onChangeLocationB.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getAirlines = this.getAirlines.bind(this)

        this.state = {
            inputTextA: "",
            inputTextB: "",
            queryString: "",
            data: {},
            airlines: {}
        }
        this.getAirlines()
    }

    getAirlines(){
        let that = this
        axios.get('/airlines')
            .then(function(res){
                that.setState({
                    airlines: res.data
                })
            })
    }

    onChangeLocationA(e) {
        this.setState({
            inputTextA: e.target.value
        })
    }
    onChangeLocationB(e) {
        this.setState({
            inputTextB: e.target.value
        })
    }

    handleClick(){
        this.setState({
            data: {}
        })

        // search prep
        let query = {}
        query["start"] = this.state.inputTextA
        query["end"] = this.state.inputTextB
        query = JSON.stringify(query)

        // api call
        let that = this
        axios.get('/db/' + query)
            .then(function(res){
                that.setState({
                    data: res.data
                })

                console.log("")
                console.log("data received: ")
                console.log(res)
                console.log(res.data)
            })

    }

    onEnterPress = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.handleClick();
        }
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <form className="form" onSubmit={this.handleClick}>
                        <Col>
                            <SearchBar
                                id='search-bar-one'
                                title="Loaction1"
                                newClassName="id0"
                                defaultText="Type departure city here"
                                change={this.onChangeLocationA}
                                onKeyDown={this.onEnterPress}
                                image={Circle}
                            />
                        </Col>
                        <Col>
                            <SearchBar
                                id='search-bar-two'
                                title="Destination"
                                newClassName="id1"
                                defaultText="Type arrival city here"
                                change={this.onChangeLocationB}
                                onKeyDown={this.onEnterPress}
                                image={Pin}
                            />
                        </Col>
                        <Col>
                            <DatePicker newClassName="id2"/>
                        </Col>
                        <Col>
                            <SmallButton
                                id='search-button-one'
                                title='Go'
                                className="form-btn submit-btn"
                                image={SearchImg}
                                onClick={this.handleClick}
                                onKeyDown={this.onEnterPress}
                            />
                        </Col>
                    </form>
                </Row>
                <Row className="justify-content-md-center">
                    {(Object.keys(this.state.data).length > 0)
                        ? <Results data={this.state.data} airlines={this.state.airlines}/>
                        : <Row>No Results</Row>}
                </Row>
            </Container>
        )
    }
}
