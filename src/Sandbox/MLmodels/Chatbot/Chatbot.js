import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Messages from './Messages.js';
import NavDrawer from '../../Drawer/Drawer.js'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './chatbotStyles.css'

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[
        {
          from: "bot",
          message: "Hello, how are you today?"
        }
      ]
    }
  }

  getResponse(message) {
    axios.post('https://ml-sandbox.ml/api/tairygreene', {message}).then((result) => {
      let response = {
        message: result.data.response,
        from: "bot",
      }
      this.setState({messages: [...this.state.messages, response]})      
    }).catch((err) => {
      console.log(err);
    })
  }

  handleSubmit (event) {
    const message = event.target.value;
    if (event.key == 'Enter' && message) {
      const query = {
        message,
        from: 'user',
      }
      this.setState({messages: [...this.state.messages, query]}, () => {
        this.getResponse(query.message)
      })
      event.target.value = '';
    }
  }
  
  render() {
    return (
      <div className="chatterbot-component">
        <NavDrawer modelName='ml-sandbox-chatbot'/>
        <ul className="chat-thread">
          <Messages 
            messages={this.state.messages}
          />
        </ul>
        <div className="user-input-wrapper">
          <input className='user-input' type="text" placeholder='Enter a message...' onKeyUp={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Chatbot;
