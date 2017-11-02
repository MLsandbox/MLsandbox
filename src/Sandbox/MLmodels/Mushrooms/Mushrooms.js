import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fadeInUpBig, zoomIn, fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import options from './Options.js';
import Mushroom from './Mushroom.js';
import key from './key.json';
import _ from 'underscore';
import NavDrawer from '../../Drawer/Drawer.js'
import 'bootstrap/dist/css/bootstrap.css';
import './mushroomStyles.css';

class Mushrooms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPrediction: '',
      animation: '',
    }
    this.styles = StyleSheet.create({
      zoomIn:  {
        animationName: zoomIn,
        animationDuration: '.5s'
      },
      fadeIn:  {
        animationName: fadeIn,
        animationDuration: '1s'
      },
      fadeInUpBig: {
        animationName: fadeInUpBig,
        animationDuration: '1.5s'
      },
    })
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
  
  camelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  handleSelect = (name, val) => {
    console.log(val.value);
    this.setState({
      [this.camelCase(name)]: val.value,
    })
  }

  handleSubmit = () => {
    console.log(this.state)
    axios.post('https://ml-sandbox.ml/api/mushrooms', {
      data: [
        this.state.capShape,
        this.state.capSurface,
        this.state.capColor,
        this.state.bruises,
        this.state.odor,
        1,
        this.state.gillSpacing,
        this.state.gillSize,
        this.state.gillColor,
        this.state.stalkShape,
        this.state.stalkRoot,
        2,
        2,
        7,
        7,
        0,
        this.state.veilColor,
        this.state.ringNumber,
        this.state.ringType,
        this.state.sporePrintColor,
        this.state.population,
        this.state.habitat,
      ]
    }).then((results) => {
      this.setState({
        animation: this.styles.fadeIn,
      }, () => {
        results.data.prediction === 1 ? this.setState({currentPrediction: 'Poison x('}) : this.setState({currentPrediction: 'Edible :)'});        
      })
    }).catch((err) => {
      this.setState({
        animation: this.styles.zoomIn,
      }, () => {
        this.setState({
          currentPrediction: 'Did you remember to select all options?'
        })
      })
    })
  }
 
  render () {
    return (
      <div className='mushrooms'>
        <NavDrawer modelName="ml-sandbox-mushrooms" description={this.description}/>
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

        <div className='mushroom-prediction'>
          <button type='button' onClick={this.handleSubmit} className='btn-outline-secondary btn mushroom-prediction-btn'>Get Prediction</button>
          <div className={`mushroom-current-prediction ${css(this.state.animation)}`}>
            {this.state.currentPrediction === '' ? '' : this.state.currentPrediction}
          </div>
        </div>

      </div>
    )
  }
}

export default Mushrooms;




