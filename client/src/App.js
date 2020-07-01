import React from 'react';
import FlightContainer from './components/flight-container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
        <Container>
            <Row className="justify-content-md-center">
                <Form id='search-form'/>
            </Row>
            <Row className="justify-content-md-center">
                <FlightContainer
                    airline="SWA"
                    currentLocation="HOU"
                    destination="LAX"
                    type="One Way"/>
            </Row>
        </Container>
    </div>
  );
}

export default App;
