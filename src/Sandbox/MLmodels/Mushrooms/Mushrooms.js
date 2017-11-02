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
        <h4 className="description-header">
          Poisonous or Edible?
        </h4>
        <p className="description-body">
          This example uses a support vector classifier trained with over 8000 items of sample data different mushrooms and creates a binary classifier (one producing a result of true or false) that can accurately determine whether a wild mushroom is edible or poisonous.  In the original dataset, the traits are represented as words, but to train the model, they had to be converted to numerical values.  Enter selections for each criterion before selecting “Get Prediction” to see if a given mushroom is poisonous or edible.        </p>
        <h4 className="description-header">
          Support Vector Classifier
        </h4>
        <p className="description-body">
          The way this classifier works has similarities to the linear regression used in the housing prices predictor, except that it has additional dimensions in the graphical representation. In addition to the x and y-axis, it has a third axis going into 3-dimensional space that represents each trait that needs to be classified (which in this case would be the different traits of mushrooms). There is a hyperplane (a plane separating one classification from the other) going through all dimensions. If the inputted data is above the hyperplane, it gets one classification and if it is below, it gets the other.
        </p>
        <div className="description-body">
          <span className='pros-and-cons'>Pros: </span>Very accurate classifiers can be produced with this model with smaller datasets than with some other models, it is very effective for binary classification, are appropriate for use with a large number of features.
          <br/>
          <br/>
          <span className='pros-and-cons'>Cons: </span>Training is a greater than quadratic operation, so training large sets of data is not feasible.
        </div>
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




