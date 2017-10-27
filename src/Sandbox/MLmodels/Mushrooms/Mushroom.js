import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Mushroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleSuggest = this.handleSuggest.bind(this);
  }

  handleSuggest = (value) =>{
    this.props.handleSelect.call(null, value)
  }
  id = id.split(' ').join('');

  
  render() {

    let {option, name, handleSelect, id} = this.props;
    
    return (
      <div className="card">
        <div className="card-header" role="tab" id={`heading${id}`}>
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`}>
              {name}
            </a>
          </h5>
        </div>
      
        <div id={`collapse${id}`} className="collapse" role="tabpanel" aria-labelledby={`heading${id}`}>
          <div className="card-block">
          <Select
            name={name}
            options={option}
            onChange={handleSelect}
            placeholder={`Please Select ${name}`}
            value='test'
            removeSelected={false}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;


