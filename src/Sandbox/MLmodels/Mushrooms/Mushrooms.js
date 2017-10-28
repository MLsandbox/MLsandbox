import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import options from './Options.js';
import Mushroom from './Mushroom.js';
import key from './key.json';
import _ from 'underscore'

class Mushrooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrediction: 'none',
    }
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
    return (
      <div>

        <div class="dropdown"> 
          <i className="fa fa-bars fa-5x dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to ="/sandbox">BACK</Link>
          </div>
        </div>

        <div className= "mushrooms">
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
          <div onClick={this.handleSubmit} className="btn">Get Prediction</div>
          <div>Current Prediction: {this.state.currentPrediction}
          </div>
        </div>
      </div>
    )
  }
}

export default Mushrooms;
