import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
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

  componentDidMount() {
    var token = localStorage.jwtToken;
    this.props.dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
  }

  toggleDisplay = () => {
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
      <div className="mushroom-card">
        <div onClick={this.toggleDisplay} className="mushroom">
          <h5 className="mushroom-card-header">
            {this.state.label ? name + ' - ' + this.state.label : name}
          </h5>
        </div>   
        <div className={`mushroom-card-block ${this.state.displayed}`}>
          <Select
            name={name}
            options={option}
            onChange={this.handleChoice.bind(this, name)}
            placeholder={`Please Select ${name}`}
            value={this.state.label}
          />
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    user: store.auth.authentication.authorization
  }
})(Mushroom);


