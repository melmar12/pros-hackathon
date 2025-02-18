import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import SafetyBadge from './safety-badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import './flight-container.css';
import './search-bar.css';

export default class FlightContainer extends React.Component{
    constructor(props){
        super(props);
        this.keyId = props.keyId;
        this.airline = props.airline;
        this.score = props.score;
        this.type = props.type;
        this.time = props.time;
        this.duration = props.duration;
        this.price = props.price;
        this.destination = props.destination;
        this.currentLocation = props.currentLocation;
        this.logo = props.logo;
    }

    render(){
        return(
        <Card className="FlightContainer" key={this.keyId}>
            <Container>
                <div class="row">
                    <div className="airline-logo-container">
                        <img className="airline-logo" src={require("./../img/airplane.png")}></img>
                    </div>
                    <div class="col-4">
                        <div class="row" className="flight-time">{this.time}</div>
                        <div class="row" className="flight-airline">{this.airline}</div>
                    </div>
                    <div class="col-4">
                        <div class="row" className="flight-duration">{this.duration}</div>
                        <div class="row" className="flight-route">{this.currentLocation} - {this.destination}</div>
                    </div>
                    <div class="col-2">
                        <div class="row">{this.type}</div>
                    </div>
                    {this.score > 51 ? <SafetyBadge></SafetyBadge> :
                        <div className="col"></div> }
                </div>
            </Container>
            {/*
            <Card.Body className="Header">{this.airline}</Card.Body>
            <Card.Body className="Body">
                <Card.Title>{this.currentLocation} - {this.destination}</Card.Title>
                <Card.Text>{this.type}</Card.Text>

            </Card.Body>
            */}
        </Card>
        );
    }
}
