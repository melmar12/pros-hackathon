import React from 'react';
import SearchBar from './components/search-bar';
import SmallButton from './components/small-button';
import FlightContainer from './components/flight-container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./form";

function App() {
  return (
    <div className="App">
        <Form id='search-form'/>
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
