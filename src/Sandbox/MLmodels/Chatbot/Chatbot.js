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

    this.description = (
      <div className="description">
        <h3 className="description-header">
          mushrooms
        </h3>
        <p className="description-body">
          This demo uses a support vector classifier trained with over 8000 items of sample data different mushrooms and creates a binary classifier (one producing a result of true or false) that can very accurately whether a wild mushroom is edible based on a number of different attributes. In the original dataset, the traits are represented as words, but to train the model, they had to be converted to numerical values. A key of these values exists so that numerical values can be translated so that words can be entered in the client, and then translated for prediction. The value of the prediction is 0 or 1 representing true or false respectively. In the app, once all fields are inputted and the submit button is pressed, a data object is sent to the server that contains numerical values representing each of the traits of the inputted mushroom. That prediction is then sent back and then displayed on the page.
        </p>
      </div>
    )

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

export default Chatbot;
