import React from 'react';
import SearchBar from './components/search-bar';
import SmallButton from './components/small-button';
import FlightContainer from './components/flight-container';
import './App.css';

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
          title="Destination"
          image="./src/img/pin.png"/>
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
