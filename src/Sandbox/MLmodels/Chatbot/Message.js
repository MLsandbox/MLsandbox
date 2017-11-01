import React, { Component } from 'react';

const Message = ({message}) => {
  if (message.message) {
    return (
      <li className={`${message.from}-message`}><div className="sender-bubble">{message.message}</div></li> 
    );
  } else {
    return null;
  }
};

export default Message;