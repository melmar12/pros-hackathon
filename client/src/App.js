import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./form.js";
import PROSLogo from './img/pros-logo.svg';


function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="logo-container">
          <img src={PROSLogo}/>
        </div>
      </div>

        <Form id='search-form'/>

        <div className="footer">
          Icons made by <a class="a" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a class="a" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    </div>
  );
}

export default App;
