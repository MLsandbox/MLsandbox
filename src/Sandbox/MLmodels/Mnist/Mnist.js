import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrawableCanvas from 'react-drawable-canvas';
import axios from 'axios';
import bg from './bg.png';
import NavDrawer from '../../Drawer/Drawer.js';

class Mnist extends Component {
	constructor(props) {
		super(props)
		this.state = {
      styles: {
      	backgroundImage: `url(${bg})`,
      	width: '400px',
      	height: '400px',
      	border: '1px solid black'
      },
      btn: {
      	border: '1px solid black',
      	width: '120px',
      	padding: '3px',
      	textAlign: 'center',
      	borderRadius: '5px',
      	marginBottom: '3px'
      },
      currentPrediction: 'none'
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

	getPrediction = (e) => {
		let canvas = document.getElementsByTagName('canvas');
		let image = canvas[0].toDataURL('image/png');
		let toSend = image.slice(22);
		canvas[0].width = canvas[0].width;
		axios.post('https://ml-sandbox.ml/api/numberpredict', { image: toSend })
		.then(response => this.setState({ currentPrediction: response.data.prediction }))
		.catch(err => console.log(err));
	}

	clearCanvas = (e) => {
		let canvas = document.getElementsByTagName('canvas');
		canvas[0].width = canvas[0].width;
	}

	render () {
		return (
			<div>
        <NavDrawer modelName="ml-sandbox-handwriting-recognition" description={this.description}/>
				<div>Sketch a Number!</div>
				<div className='drawing' style={this.state.styles}> 
				<DrawableCanvas
					className='sketch'
					brushColor='white'
					lineWidth={6}
				/>
				</div>
				<div onClick={this.getPrediction} style={this.state.btn}>Get Prediction</div>
				<div onClick={this.clearCanvas} style={this.state.btn}>Clear the Canvas</div>
				<div>Current Prediction: {this.state.currentPrediction}</div>
			</div>
		);
	}
}


export default Mnist;
