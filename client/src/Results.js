import React, {Component} from 'react';

import FlightContainer from "./components/flight-container";


export default class Form extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
            <FlightContainer
                airline="SWA"
                currentLocation="IAH"
                destination="ORD"
                type="One Way"
                time="10:05 AM - 11:13 AM"
                duration="1hr 8m"
                price="$97"
                score="70"/>
            </div>
        )
    }

}
