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
                currentLocation="HOU"
                destination="LAX"
                type="One Way"/>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
        )
    }

}
