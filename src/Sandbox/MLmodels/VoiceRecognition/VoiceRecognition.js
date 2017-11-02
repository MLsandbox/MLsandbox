import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import Axios from 'axios';
import Recorder from 'recorder-js';
import { Link } from 'react-router-dom';
import NavDrawer from '../../Drawer/Drawer.js';
import './voiceStyles.css';

class VoiceRecognitionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      prediction: "none"
    }

    this.description = (
      <div className="description">
        <h4 className="description-header">
          voice recognition
        </h4>
        <p className="description-body">
          This demo uses two classifiers trained with a Gaussian Mixture Model to determine whether the voice of a speaker is male or female. The classifiers are trained with a number of audio samples of male and female speakers.  Then, the module splits the supplied audio file into a large number of very short frames and performs an analysis on the processed data.  We then train our classifiers twice:  once for a set of training data of male voices and once for a set with female voices. 
        </p>
        <h4 className="description-header">
          gaussian mixture Model
        </h4>
        <p className="description-body">
          A Gaussian Mixture Model assumes that all points of data are clustered together based on a certain number of different sub-groupings.  These groupings are all fit along a line like the one in the graph below. The way a classification works is similar to the way a classification works in the linear regression in the Seattle housing prices demo, but the line is not linear so the classification is more accurate. On the graph, the y-axis represents the similarity to a trained class given a number of characteristics represented on the x-axis. The clusters can be visualized by seeing the other images as a top view of the other image.
        </p>
        <div className="description-body">
          <span className='pros-and-cons'>Pros: </span>Good for situations where there is missing data, it gives very good results even without a thorough understanding of how it works, is very good for data that is clustered.
          <br/>
          <br/>
          <span className='pros-and-cons'>Cons: </span>The speed of training and prediction is quite a bit slower than with other models so it is impractical for very large datasets.
        </div>
      </div>
    )

  }
  
  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  recordAndSubmit = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();  
    const recorder = new Recorder(audioContext, {
      onAnalysed: data => {},
    });
    let isRecordeing = false;
    let blob = null;
    
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        recorder.init(stream)
        recorder.start();
      })
      .catch(err => console.log(err));
   
    this.setState({ record: true });

    setTimeout(() => {
      recorder.stop()
        .then(({blob, buffer}) => {
          blob = blob;
          let formData = new FormData();
          formData.append('file', blob);
          Axios.post('https://ml-sandbox.ml/api/speech', formData, {
            headers: { 'content-type': 'multipart/form-data' }
          }).then(response => {
            this.setState({prediction: response.data.prediction})
            audioContext.close();
            this.setState({ record: false });
          }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }, 2500);
  }

  render = () => {
    return (
      <div>
        <NavDrawer modelName="ml-sandbox-voice-recognition" description = {this.description}/>
        <div className="voice-recog">
          <div className="voice-title">Press record for recognition of male or female voices!</div>
          <div className="mic-holder">
            <ReactMic
              record={this.state.record}
              className="sound-wave"
              strokeColor="#000000"
              backgroundColor="#FFBA44"
            />
          </div>
          <div>Prediction: {this.state.prediction}</div>
          <div>
            <div className="voice-btn" onClick={this.recordAndSubmit}>Record</div>
          </div>
        </div>
      </div>
    )
  }
}

export default VoiceRecognitionWrapper;
