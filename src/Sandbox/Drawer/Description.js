import React from 'react';
import './drawerStyles.css';

const Description = ({description}) => {
  return (
    <div id="explanation-popup" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;