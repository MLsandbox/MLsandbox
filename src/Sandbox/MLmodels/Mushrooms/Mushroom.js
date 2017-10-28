import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './mushroomStyles.css'

class Mushroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: "hidden",
    }
  }

  toggleDisplay = () => {
    console.log('clicked')
    var css = (this.state.displayed === "hidden") ? "show" : "hidden";
    this.setState({"displayed":css});
  }

  handleChoice = (name, value) =>{
    this.setState({
      label: value.label,
    }, () => {
      this.props.handleSelect.call(null, name, value)
      this.toggleDisplay()
    })
  }
  
  render() {

    let {option, name, id} = this.props;
    id = id.split(' ').join('');
    
    return (
      <div className="card">
        <div className="card-header" onClick={this.toggleDisplay}>
          <h5>
            {this.state.label ? name + ' - ' + this.state.label : name}
          </h5>
        </div>
      
        <div >
          <div className={`card-block ${this.state.displayed}`}>
            <Select
              className="card-block"
              name={name}
              options={option}
              onChange={this.handleChoice.bind(this, name)}
              placeholder={`Please Select ${name}`}
              value={this.state.label}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;


