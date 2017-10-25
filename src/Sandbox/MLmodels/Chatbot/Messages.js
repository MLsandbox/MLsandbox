import React, { Component } from 'react';
import Message from './message';


const Messages = ({messages}) => {
  if (messages.length !== 0) {
    return (
      <div>
        {messages.map((message, i) => {
          return (
            <Message
              message={message}
              key={i}
            />
          ) 
        })}
      </div>
    )
  } else {

  }
};

export default Messages;