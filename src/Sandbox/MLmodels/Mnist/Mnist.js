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
        <h4 className="description-header">
					Character Recognition
        </h4>
        <p className="description-body">
					This demo uses a random forest classifier model that has been trained with 60,000 representations of handwritten digits.  By drawing a number and selecting “Get Prediction”, the algorithm will attempt to predict.
				</p>
        <h4 className="description-header">
					The Random Forest Classifier
        </h4>
        <p className="description-body">
					Unlike other models that use a single decision tree, a random forest classifier creates multiple decision trees for classification (hence, its name).  Loosely put, a decision tree is a common way of thinking about an algorithm’s conditional statements (for example, does a number look more like a 1 or a 0), and the end of each branch corresponds to a final output.  When a random forest model is used, it creates multiple trees and then compares the predictions from each tree before returning the most common prediction amongst the trees.
				</p>
        <div className="description-body">
          <span className='pros-and-cons'>Pros: </span>Performance for this model can be very high, it can often produce a very accurate classifier and it is able to deal with unbalanced and missing data.
          <br/>
          <br/>
          <span className='pros-and-cons'>Cons: </span>When it is used for regressions, it is unable to make predictions outside of the range of the training data.
        </div>
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
