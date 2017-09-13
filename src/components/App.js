import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';
import earthquakes from '../data/earthquakes';
import EarthquakeList from './EarthquakeList';
import EarthquakeInfo from './EarthquakeInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="title">

      <div className="my-header">
        Earthquakes!  
      </div>
      <EarthquakeInfo/>
      <EarthquakeList/>

      </div>

      </div>
    );
  }
}

export default App;
