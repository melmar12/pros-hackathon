import React from 'react';
import SearchBar from './components/search-bar';
import SmallButton from './components/small-button';
import FlightContainer from './components/flight-container';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Pin from './img/pin.png';
import SearchImg from './img/search.png';

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar 
          id='search-bar-one' 
          title="Destination"
          image={SearchImg}
          />
        <SearchBar 
          id='search-bar-two' 
          title="Current Location"
          image={Pin}/>
        <SmallButton 
          id='search-button-one' 
          title='Search Button'/>
        <FlightContainer
          airline="SWA"
          currentLocation="HOU"
          destination="LAX"
          type="One Way"/>
          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
      </div>
  );
}

export default App;
