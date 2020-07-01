import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./form.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Results from "./Results";
import PROSLogo from './img/pros-logo.svg';

function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="logo-container">
          <img src={PROSLogo}/>
        </div>
      </div>
        <Container>
            <Row className="justify-content-md-center">
                <Form id='search-form'/>
            </Row>
            <Row className="justify-content-md-center">
                <Results/>
            </Row>
        </Container>
        <div className="footer">
          Icons made by <a class="a" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a class="a" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    </div>
  );
}

export default App;
