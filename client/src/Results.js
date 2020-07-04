import React, {Component} from 'react';

import FlightContainer from "./components/flight-container";
import Row from "react-bootstrap/Row";

export default class Results extends Component {
    constructor(props) {
        super(props)
        this.data = props.data
        this.airlines = props.airlines

        this.getAirlineName = this.getAirlineName.bind(this)

        this.state = {
            airlines: {}
        }
    }

    getAirlineName(code) {
        let name = code
        let airlines = this.airlines

        for(let i in airlines)
        {
            if(airlines[i].airline === code)
            {
                return airlines[i].name
            }
        }
        return name;
    }

    render() {
        return (
            <div>
                {Object.keys(this.data).map(key => (
                    <Row className="results">
                        <FlightContainer
                            keyId={key}
                            responseData={this.data}
                            airline={this.data[key].airline}
                            airlineName={this.getAirlineName(this.data[key].airline)}
                            currentLocation={this.data[key].start}
                            destination={this.data[key].end}
                            type="One Way"
                            time={this.data[key].departureTime + " - " + this.data[key].arrivalTime}
                            duration={this.data[key].duration}
                            price={"$"+this.data[key].price}
                            score={this.data[key].score}
                            logo={this.data[key].airline}/>
                    </Row>
                ))}
            </div>
        )
    }

}
