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
        <h4 className="description-header">
          Seattle Housing Prices
        </h4>
        <p className="description-body">
          This demo uses a linear regression classifier that has been trained with over 21,000 pieces of data from 2014 residential real-estate sales in King’s County, WA.  Given a set of user-supplied criteria and a selected point on the map, our ML algorithm will predict an appropriate price.
        </p>
        <h4 className="description-header">
          Linear Regression Classifier
        </h4>
        <p className="description-body">
          A linear regression classifier makes its classifications by the value of a linear combination of characteristics.  An equation would look something like:
        </p>
        <p className="description-body">
          Y  = B0 + B1 * x1 + B2 * x2 + …
        </p>
        <p className="description-body">
          Here, each B value corresponds to some scaling factor, each X value is some specified input, and Y is our prediction.
        </p>
        <div className="description-body">
          <span className='pros-and-cons'>Pros: </span>The concepts used are easy to understand and process, it trains quickly and classifies quickly.
          <br/>
          <br/>
          <span className='pros-and-cons'>Cons: </span>Less accurate in classification than other models, it is very sensitive to outliers in training data, it is not good for classifying data with non-linear trends.
        </div>
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
