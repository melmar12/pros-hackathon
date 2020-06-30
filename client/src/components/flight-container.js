import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class FlightContainer extends React.Component{
    constructor(props){
        super(props);
        this.airline = props.airline;
        this.type = props.type;
        this.price = props.price;
        this.destination = props.destination;
        this.currentLocation = props.currentLocation;
    }

    render(){
        return(
        <Card>
        <Card.Header>{this.airline}</Card.Header>
        <Card.Body>
        <Card.Title>{this.currentLocation} - {this.destination}</Card.Title>
        <Card.Text>{this.type}</Card.Text>
        </Card.Body>
        </Card>
        );
    }
}

export default FlightContainer;