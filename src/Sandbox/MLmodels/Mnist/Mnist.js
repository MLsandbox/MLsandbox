import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrawableCanvas from 'react-drawable-canvas';
import axios from 'axios';
import bg from './bg.png';
import NavDrawer from '../../Drawer/Drawer.js';
import './Mnist.css';

class Mnist extends Component {
	constructor(props) {
		super(props)
		this.state = {
      currentPrediction: 'none'
		}
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
			<div className="mnist">
        <NavDrawer modelName="ml-sandbox-handwriting-recogntion" />
        <div id="inner-mnist">
				  <div className="mnist-title">Sketch a Number!</div>
				  <div className="drawable"> 
				    <DrawableCanvas
				    	brushColor='white'
				    	lineWidth={6}
				    />
				  </div>
				  <div onClick={this.getPrediction} className="mnist-btn" >Get Prediction</div>
				  <div onClick={this.clearCanvas} className="mnist-btn">Clear the Canvas</div>
				  <div className="mnist-pred">Current Prediction: {this.state.currentPrediction}</div>
        </div>
			</div>
		);
	}
}


export default Mnist;
