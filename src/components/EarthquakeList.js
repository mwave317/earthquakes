import React, { Component } from 'react';
import earthquakes from '../data/earthquakes';
import moment from 'moment';
export default class EarthquakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        earthquakes: earthquakes.features,
      };
  }

  render() {
    const quakes = this.state.earthquakes.map(eg => {
      return (
     <div className="col-sm-6" key={eg.id}>
       <div className="card" >
         <div className="card-block">
           <h4 className="card-title">{eg.title}</h4>
           <h6 className="card-subtitle mb-2 text-muted">Magnitude:
             {eg.properties.mag}</h6>
           <h6 className="card-subtitle mb-2 text-muted">Time:
             {moment(eg.time).format('llll')}</h6>
           <p className="card-text">Coordinates:
             {eg.geometry.coordinates}</p>

           <a href={eg.url}
             className="card-link">USGS Event Link</a>
         </div>
       </div>
     </div>
   );
    });
    return (
  <div className="quake-list">

  <div className="row">
    {quakes}
  </div>

</div>
   );
  };
};
