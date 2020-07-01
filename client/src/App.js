import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Results from "./Results";

function App() {
  return (
    <div className="App">
        <Container>
            <Row className="justify-content-md-center">
                <Form id='search-form'/>
            </Row>
            <Row className="justify-content-md-center">
                <Results/>
            </Row>
        </Container>
    </div>
  );
}

export default App;
