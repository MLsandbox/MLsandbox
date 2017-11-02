import React, { Component } from 'react';
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import mapKey from '../../../ClientHelpers/keys/mapsapi.js';
import MapComponent from './MapComponent.js';
import { Link } from 'react-router-dom';
import Options from './Options.js';
import './housing.css';
import NavDrawer from '../../Drawer/Drawer.js';

class Housing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.607578,
      lng: -122.333564,
      bedrooms: 0, bathrooms: 1, livingSpace: 0, lotSize: 0, floors: 1, condition: 1, grade: 1, basement: 0, yearBuilt: 1900, yearRenovated: 1900
    }

    this.description = (
      <div className="description">
        <h3 className="description-header">
          mushrooms
        </h3>
        <p className="description-body">
          This demo uses a support vector classifier trained with over 8000 items of sample data different mushrooms and creates a binary classifier (one producing a result of true or false) that can very accurately whether a wild mushroom is edible based on a number of different attributes. In the original dataset, the traits are represented as words, but to train the model, they had to be converted to numerical values. A key of these values exists so that numerical values can be translated so that words can be entered in the client, and then translated for prediction. The value of the prediction is 0 or 1 representing true or false respectively. In the app, once all fields are inputted and the submit button is pressed, a data object is sent to the server that contains numerical values representing each of the traits of the inputted mushroom. That prediction is then sent back and then displayed on the page.
        </p>
      </div>
    )
    
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

  handleSubmit = () => {
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
      }).then(results => this.setState({ currentPrediction: "$" +  Math.abs(Math.floor(results.data.prediction)) }))
      .catch(err => console.log(err));
    })
  }

  render() {
    return (
      <div className="housing">
        <NavDrawer modelName="ml-sandbox-housing-prices-prediction" description={this.description}/>
        <div className="sidebar">
          <div className="title">Choose Your Options: </div>
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
        <div className="currentprediction">Current Prediction: {this.state.currentPrediction || "None"}</div>
        <div onClick={this.handleSubmit} className="housing-btn">Get Prediction</div>
      </div>
      <div className="mapcontain">
        <div className="mapheader">To get a prediction on what property with certain specifications might cost in Kings County, Washington, place a pin on the map enter options and click the prediction button!</div>
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
    </div>
    )
  }
}

export default Housing;
