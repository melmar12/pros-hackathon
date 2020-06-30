import React from 'react';
import SearchBar from './components/search-bar';
import SmallButton from './components/small-button';
import FlightContainer from './components/flight-container';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar 
          id='search-bar-one' 
          title="Loaction2"
          />
        <SearchBar 
          id='search-bar-two' 
          title="Destination"/>
        <SmallButton 
          id='search-button-one' 
          title='Search Button'/>
        <FlightContainer
          airline="SWA"
          currentLocation="HOU"
          destination="LAX"
          type="One Way"/>
          </div>
    </div>
  );
}

export default App;
