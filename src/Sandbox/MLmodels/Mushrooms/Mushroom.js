import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Mushroom = ({option, name, handleSelect}) => {

  console.log(option)

  return (
    <div className="card">
      <div className="card-header" role="tab" id="headingOne">
        <h5 className="mb-0">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {name}
          </a>
        </h5>
      </div>
    
      <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
        <div className="card-block">
        <Select
          name={name}
          options={option}
          // onChange={handleSelect.bind(this, "placeholder", "placeholderLabel")}
          placeholder="select cap shape..."
          // value={this.state.capShape}
          // removeSelected={false}
        />
        </div>
      </div>
    </div>
  );

}

export default Mushroom;


