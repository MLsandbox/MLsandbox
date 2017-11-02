import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
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

    this.description = (
      <div className="description">
        <h4 className="description-header">
          Chatbot
        </h4>
        <p className="description-body">
          This example uses ChatterBot, a Machine Learning conversation dialogue engine that can be found <a href="https://github.com/gunthercox/ChatterBot">here:</a>
        </p>
        <p className="description-body">
          In its current state, our chatbot will provide appropriate responses for some questions and very strange ones for others. This is primarily to do with the dataset supplied for training purposes.
        </p>
        <p className="description-body">
          Under the hood, the bot checks for an appropriate response with two different “logic adapters” which give back a response and a confidence value. In the process of going through the logic adapters, the data is run through a number of classifiers. The response with the higher confidence value is the one that is ultimately returned to the user. This kind of chatbot is said to be using a retrieval based model, meaning the chatbot will not generate new text, but rather select a response from the supplied dataset.
        </p>
        <p className="description-body">
          The other variety of chatbot is made using what is called a Generative model. These chatbots don’t rely solely on predefined responses and are able to create new ones on their own; rather, these use machine translation techniques and other processes to try and create new responses. Generative chatbots may, therefore, seem more human-like because they are sometimes able to generate good responses to questions they have never been asked before.  While no chatbot has been able to truly emulate human conversation, continued training should produce more and more convincing results.
        </p>
      </div>
    )

  }

  componentDidMount() {
    var token = localStorage.jwtToken;
    this.props.dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
  }

  getResponse = (message) => {
    axios.post('https://ml-sandbox.ml/api/tairygreene', {message}).then((result) => {
      let response = {
        message: result.data.response,
        from: "bot",
      }
      this.setState({messages: [...this.state.messages, response]}, () => {
        this.autoScroll();
      })    
    }).catch((err) => {
      console.log(err);
    })
  }

  autoScroll = () => {
    let div = document.getElementById('scrollDown');
    div.scrollTop = div.scrollHeight;
  }

  handleSubmit = (event) => {
    const message = event.target.value;
    if (event.key == 'Enter' && message) {
      const query = {
        message,
        from: 'user',
      }
      this.setState({messages: [...this.state.messages, query]}, () => {
        this.autoScroll();
        this.getResponse(query.message)
      })
      event.target.value = '';
    }
  }
  
  render() {
    return (
      <div className="chatterbot-component">
        <NavDrawer modelName='ml-sandbox-chatbot' description={this.description}/>
        <ul className="chat-thread" id="scrollDown">
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

export default connect((store) => {
  return {
    user: store.auth.authentication.authorization
  }
})(Chatbot);
