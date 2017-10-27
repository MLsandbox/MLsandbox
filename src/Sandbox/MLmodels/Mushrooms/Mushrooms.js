import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import options from './Options.js';
import Mushroom from './Mushroom.js';
import key from './key.json';
import _ from 'underscore'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Mushrooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrediction: 'none',
      options: {},
    }
    
    for (var classifier in key) {
      let selections = [];
      for (var label in key[classifier]) {
        selections.push({
          value: key[classifier][label],
          label,
        })
      }
      this.state.options[classifier] = selections
    }

  }

  handleSelect = (name, label, val) => {
    console.log('====================================')
    console.log(label)
    console.log('====================================')
    this.setState({
      [name]: val.value,
      [label]: val.label,
    })
  }


  handleSubmit = () => {
    
    axios.post('http://13.59.104.244/api/mushrooms', {
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

        <div className='mushrooms'>
          {
            _.map(options, (option, name) => {
              return (
                <Mushroom
                  option={option}
                  name={name}
                  key={name+1}
                  handleSelect={this.handleSelect.bind(this)}
                  />
              );
            })
          }
        </div>



        <div id="accordion" role="tablist" aria-multiselectable="true">
          <div className="card">
            <div className="card-header" role="tab" id="headingTwo">
              <h5 className="mb-0">
                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Collapsible Group Item #2
                </a>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="card-block">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="headingThree">
              <h5 className="mb-0">
                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Collapsible Group Item #3
                </a>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="card-block">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
        
        <div>

          Cap Surface
          <Select
            name="capSurface"
            options={options["cap-surface"]}
            onChange={this.handleSelect.bind(this, "capSurface")}
            placeholder="select cap surface..."
            value={this.state.capSurface}
          />
          Cap Color
          <Select
            name="capColor"
            options={options["cap-color"]}
            onChange={this.handleSelect.bind(this, "capColor")}
            placeholder="select cap color..."
            value={this.state.capColor}
          />
          Bruises
          <Select
            name="bruises"
            options={options["bruises"]}
            onChange={this.handleSelect.bind(this, "bruises")}
            placeholder="select bruises..."
            value={this.state.bruises}
          />
          Odor
          <Select
            name="odor"
            options={options["odor"]}
            onChange={this.handleSelect.bind(this, "odor")}
            placeholder="select odor..."
            value={this.state.odor}
          />
          Gill Attachment
          <Select
            name="gillAttachment"
            options={options["gill-attachment"]}
            onChange={this.handleSelect.bind(this, "gillAttachment")}
            placeholder="select gill attachment..."
            value={this.state.gillAttachment}
          />
          Gill Spacing
          <Select
            name="gillSpacing"
            options={options["gill-spacing"]}
            onChange={this.handleSelect.bind(this, "gillSpacing")}
            placeholder="select gill spacing..."
            value={this.state.gillSpacing}
          />
          Gill Size
          <Select
            name="gillSize"
            options={options["gill-size"]}
            onChange={this.handleSelect.bind(this, "gillSize")}
            placeholder="select gill size..."
            value={this.state.gillSize}
          />
          Gill Color
          <Select
            name="gillColor"
            options={options["gill-color"]}
            onChange={this.handleSelect.bind(this, "gillColor")}
            placeholder="select gill color..."
            value={this.state.gillColor}
          />
          Stalk Shape
          <Select
            name="stalkShape"
            options={options["stalk-shape"]}
            onChange={this.handleSelect.bind(this, "stalkShape")}
            placeholder="select stalk shape..."
            value={this.state.stalkShape}
          />
          Stalk Root
          <Select
            name="stalkRoot"
            options={options["stalk-root"]}
            onChange={this.handleSelect.bind(this, "stalkRoot")}
            placeholder="select stalk root..."
            value={this.state.stalkRoot}
          />
          Stalk Surface Above Ring
          <Select
            name="stalkSurfaceAboveRing"
            options={options["stalk-surface-above-ring"]}
            onChange={this.handleSelect.bind(this, "stalkSurfaceAboveRing")}
            placeholder="select stalk surface above ring..."
            value={this.state.stalkSurfaceAboveRing}
          />
          Stalk Surface Below Ring
          <Select
            name="stalkSurfaceBelowRing"
            options={options["stalk-surface-below-ring"]}
            onChange={this.handleSelect.bind(this, "stalkSurfaceBelowRing")}
            placeholder="select stalk surface below ring..."
            value={this.state.stalkSurfaceBelowRing}
          />
          Stalk Color Above Ring
          <Select
            name="stalkColorAboveRing"
            options={options["stalk-color-above-ring"]}
            onChange={this.handleSelect.bind(this, "stalkColorAboveRing")}
            placeholder="select stalk color above ring..."
            value={this.state.stalkColorAboveRing}
          />
          Stalk Color Below Ring
          <Select
            name="stalkColorBelowRing"
            options={options["stalk-color-below-ring"]}
            onChange={this.handleSelect.bind(this, "stalkColorBelowRing")}
            placeholder="select stalk color below ring..."
            value={this.state.stalkColorBelowRing}
          />
          Veil Type
          <Select
            name="veilType"
            options={options["veil-type"]}
            onChange={this.handleSelect.bind(this, "veilType")}
            placeholder="select veil type..."
            value={this.state.veilType}
          />
          Veil Color
          <Select
            name="veilColor"
            options={options["veil-color"]}
            onChange={this.handleSelect.bind(this, "veilColor")}
            placeholder="select veil color..."
            value={this.state.veilColor}
          />
          Ring Number
          <Select
            name="ringNumber"
            options={options["ring-number"]}
            onChange={this.handleSelect.bind(this, "ringNumber")}
            placeholder="select ring number..."
            value={this.state.ringNumber}
          />
          Ring Type
          <Select
            name="ringType"
            options={options["ring-type"]}
            onChange={this.handleSelect.bind(this, "ringType")}
            placeholder="select ring type..."
            value={this.state.ringType}
          />
          Spore Print Color
          <Select
            name="sporePrintColor"
            options={options["spore-print-color"]}
            onChange={this.handleSelect.bind(this, "sporePrintColor")}
            placeholder="select spore print color..."
            value={this.state.sporePrintColor}
          />
          Population
          <Select
            name="population"
            options={options["population"]}
            onChange={this.handleSelect.bind(this, "population")}
            placeholder="select population..."
            value={this.state.population}
          />
          Habitat
          <Select
            name="habitat"
            options={options["habitat"]}
            onChange={this.handleSelect.bind(this, "habitat")}
            placeholder="select habitat..."
            value={this.state.habitat}
          />
          <div onClick={this.handleSubmit} className="btn">Get Prediction</div>
          <div>Current Prediction: {this.state.currentPrediction}
          </div>
          <h1><Link to ="/sandbox">BACK</Link></h1>
        </div>
      </div>
    )
  }
}

export default Mushrooms;
