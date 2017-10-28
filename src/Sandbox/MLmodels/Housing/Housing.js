import React, { Component } from 'react';
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import mapKey from '../../../ClientHelpers/keys/mapsapi.js';
import MapComponent from './MapComponent.js';
import { Link } from 'react-router-dom';
import Options from './Options.js';
import './housing.css';

class Housing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 46.615567,
      lng: -122.177644,
      currentPrediction: 'none',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange = (event) => {
    const { value } = event.target;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleMapClick =  (e) => {
    this.setState({ lng: e.latLng.lng() }, () => {
      this.setState({ lat: e.latLng.lat() });
    });
  }

  handleSubmit () {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&sensor=false`)
    .then((result) => {
      let addy = '98105, USA';
      if (result.data.results[0]){
        addy = result.data.results[0].formatted_address;
      }
      let zip = addy.slice(addy.length - 10, addy.length - 5);
      axios.post('https://ml-sandbox.ml/api/houseprices', {
        info: ["2014", 
          this.state.bedrooms, 
          this.state.bathrooms,
          this.state.livingSpace,
          this.state.lotSize,
          this.state.floors,
          0, //waterfront boolean
          0, //number of views
          this.state.condition,
          this.state.grade,
          this.state.livingSpace - this.state.basement,
          this.state.basement,
          this.state.yearBuilt,
          this.state.yearRenovated,
          zip,
          this.state.lat,
          this.state.lng,
          this.state.livingSpace,
          this.state.lotSize] 
      }).then(results => this.setState({ currentPrediction: results.data.prediction }))
      .catch(err => console.log(err));
    })
  }

  render() {
    return (
      <div className="housing">
        <div className="sidebar">
        {Options.map((option, index) => {
          return (
            <div className="option" key={index}>
              <div className="optiontitle">{option.description}</div>
                <div>
                  <div className="numholder">
                    <span className="firstnum">{option.min}</span>
                    <span className="secondnum">{option.max}</span>
                  </div>  
                </div>
                <div className="sliderholder">
                  <input
                    className="slider"
                    defaultValue={option.min}
                    name={option.name}
                    type="range"
                    min={option.min}
                    max={option.max}
                    onChange={this.handleInputChange}
                  />
                </div>
              <div className="currentselection">Current Selection: {this.state[option.name] || option.min}</div>
            </div>
          )
        })}
        <div className="currentprediction">Current Prediction: {this.state.currentPrediction}</div>
        <div onClick={this.handleSubmit} className="btn">Get Prediction</div>
        <div className="btn"><Link className="back" to ="/sandbox">Go Back</Link></div>
      </div>
        <div className="mapheader">Put map header here</div>
        <MapComponent
          className="mapholder"
          lat={this.state.lat}
          lng={this.state.lng}
          handleMapClick={this.handleMapClick}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `60vw` }} />}
          mapElement={<div style={{ height: `50vw`, width: `80vw` }} />}
        />
      </div>
    )
  }
}

export default Housing;
