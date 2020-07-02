import React, {Component} from 'react'
import axios from 'axios'
import {Col} from "react-bootstrap"
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import SearchBar from "./components/search-bar"
import SmallButton from "./components/small-button"
import FlightContainer from "./components/flight-container";
import DatePicker from "./components/datepicker"
import Results from "./Results";

import SearchImg from './img/search.png'
import Pin from "./img/pin.png"
import Circle from "./img/circle.svg"

import './css/Form.css'
import './css/results.css'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.onChangeLocationA = this.onChangeLocationA.bind(this)
        this.onChangeLocationB = this.onChangeLocationB.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            inputTextA: "Houston",
            inputTextB: "Chicago",
            defaultText: "Houston",
            defaultText2: "destination",
            queryString: "",
            data: {}
        }
        this.handleClick() // default search Houston -> Chicago
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
        console.log("searching...")

        // search prep
        let query = {}
        query["city"] = this.state.inputTextA
        query["city"]+= " " + this.state.inputTextB
        query = JSON.stringify(query)

        console.log(query)

        // api call
        let that = this
        axios.get('/db/' + query)
            .then(function(res){
                that.setState({
                    data: res.data
                })
            })
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <form className="form">

                        <Col>
                            <SearchBar
                                id='search-bar-one'
                                title="Loaction1"
                                newClassName="id0"
                                defaultText={this.state.defaultText}
                                change={this.onChangeLocationA}
                                image={Circle}
                            />
                        </Col>
                        <Col>
                            <SearchBar
                                id='search-bar-two'
                                title="Destination"
                                newClassName="id1"
                                defaultText={this.state.defaultText2}
                                change={this.onChangeLocationB}
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
                            />
                        </Col>
                    </form>
                </Row>
                {/*<Row className="results justify-content-md-center">*/}

                {/*    <Results data={this.state.data}/>*/}
                {/*</Row>*/}
                <Row className="justify-content-md-center">
                    <div>
                        {(Object.keys(this.state.data).length > 0) ? Object.keys(this.state.data).map(key => (
                            <Row className="results">
                                <FlightContainer
                                    key={key}
                                    airline={this.state.data[key].airline}
                                    currentLocation={this.state.data[key].start}
                                    destination={this.state.data[key].end}
                                    type="One Way"
                                    time={this.state.data[key].time.replace("?", "-")}
                                    duration={this.state.data[key].duration}
                                    price={"$"+this.state.data[key].price}
                                    score={this.state.data[key].score}/>
                            </Row>
                        )): <Row>no results found</Row>}
                    </div>
                </Row>
            </Container>
        )
    }
}
