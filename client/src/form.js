import React, {Component} from 'react'
import axios from 'axios'
import SearchBar from "./components/search-bar"
import SmallButton from "./components/small-button"
import Pin from "./img/pin.png"
import Circle from "./img/circle.svg"
import './css/Form.css'
import {Col} from "react-bootstrap"
import DatePicker from "./components/datepicker"
import SearchImg from './img/search.png'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.onChangeLocationA = this.onChangeLocationA.bind(this)
        this.onChangeLocationB = this.onChangeLocationB.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            inputTextA: "Houston",
            inputTextB: "Chicago",
            defaultText: "...",
            defaultText2: "",
            queryString: "",
            data: {}
        }
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
            <div>
                <form className="form">

                    <Col>
                        <SearchBar
                            id='search-bar-one'
                            title="Loaction1"
                            defaultText={this.state.defaultText}
                            change={this.onChangeLocationA}
                            image={Circle}
                        />
                    </Col>
                    <Col>
                        <SearchBar
                            id='search-bar-two'
                            title="Destination"
                            defaultText={this.state.defaultText}
                            change={this.onChangeLocationB}
                            image={Pin}
                        />
                    </Col>
                    <Col>
                        <DatePicker/>
                    </Col>
                    <Col>
                        <SmallButton
                            id='search-button-one'
                            title='Go'
                            className="form-btn"
                            image={SearchImg}
                            onClick={this.handleClick}
                        />
                    </Col>
                </form>
                <div>
                    <ul>
                        {(Object.keys(this.state.data).length > 0) ? Object.keys(this.state.data).map(key => (
                            <li key={key}>
                                <ul>
                                    <li>start: {this.state.data[key].start}</li>
                                    <li>end: {this.state.data[key].end}</li>
                                    <li>airline: {this.state.data[key].airline}</li>
                                    <li>time: {this.state.data[key].time}</li>
                                    <li>duration: {this.state.data[key].duration}</li>
                                    <li>price: {this.state.data[key].price}</li>
                                    <li>score: {this.state.data[key].score}</li>
                                </ul>
                            </li>
                        )): <li> results ...</li>}
                    </ul>
                </div>
            </div>
        )
    }
}
