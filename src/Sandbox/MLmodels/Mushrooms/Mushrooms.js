import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fadeInUpBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import options from './Options.js';
import Mushroom from './Mushroom.js';
import key from './key.json';
import _ from 'underscore';
import NavDrawer from '../../Drawer/Drawer.js'
import 'bootstrap/dist/css/bootstrap.css';

class Mushrooms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPrediction: 'none',
    }
    this.styles = StyleSheet.create({
      fadeInUpBig: {
        animationName: fadeInUpBig,
        animationDuration: '1.5s'
      }
    })
  }
  
  camelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  handleSelect = (name, val) => {
    this.setState({
      [this.camelCase(name)]: val.value,
    })
  }

  handleSubmit = () => {
    
    axios.post('https://ml-sandbox.ml/api/mushrooms', {
      data: [
        this.state.capShape,
        this.state.capSurface,
        this.state.capColor,
        this.state.bruises,
        this.state.odor,
        this.state.gillAttachment,
        this.state.gillSpacing,
        this.state.gillSize,
        this.state.gillColor,
        this.state.stalkShape,
        this.state.stalkRoot,
        this.state.stalkSurfaceAboveRing,
        this.state.stalkSurfaceBelowRing,
        this.state.stalkColorAboveRing,
        this.state.stalkColorBelowRing,
        this.state.veilType,
        this.state.veilColor,
        this.state.ringNumber,
        this.state.ringType,
        this.state.sporePrintColor,
        this.state.population,
        this.state.habitat,
      ]
    }).then((results) => {
      results.data.prediction === 1 ? this.setState({currentPrediction: 'Poison x('}) : this.setState({currentPrediction: 'Edible :)'});
    }).catch((err) => {
      console.error(err);
    })
  }

  render () {
    console.log(this.styles)
    return (
      <div>
        <NavDrawer modelName="ml-sandbox-mushrooms"/>
        <div className={css(this.styles.fadeInUpBig)}>
          {
            _.map(options, (option, name) => {
              return (
                <Mushroom
                  option={option}
                  name={name}
                  key={name}
                  id={name}
                  handleSelect={this.handleSelect.bind(this)}
                />
              );
            })
          }
        </div>
        <div>
          <button onClick={this.handleSubmit} className='mushroom-prediction-btn'>Get Prediction</button>
          <div>Current Prediction: {this.state.currentPrediction}
          </div>
        </div>
      </div>
    )
  }
}

export default Mushrooms;




