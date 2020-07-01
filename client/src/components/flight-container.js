import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './flight-container.css'

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
        <Card className="FlightContainer">
            <Container>
                <div class="row">
                    <div class="col">{this.airline}</div>
                    <div class="col-6">{this.currentLocation} - {this.destination}</div>
                    <div class="col">{this.type}</div>
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

export default FlightContainer;