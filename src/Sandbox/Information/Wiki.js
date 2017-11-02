import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './wikiStyles.css';

class Wiki extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="learn-more">
        <div className="learn-header">
          <h1 className="learn-title">Machine Learning</h1>
          <h2 className="learn-subtitle">What Even Is?</h2>
        </div>
        <p className="learn-body">
          In a nutshell, Machine Learning (ML) refers to computer applications that self-improve over time.  In order to pull this off, ML applications typically take a large amount of data as input in order to be accurate (the process of feeding data into a Machine Learning algorithm is referred to as “training”).  During training, the ML algorithm determines to which set of categories a new observation belongs (“classification”).  If our ML algorithm is to be accurate, we’ll need to specify a set of categories, or “classifiers”, that make sense for our given application.
        </p>
        <p className="learn-body">
          With training, these classifiers improve and become more accurate over time.  There are a number of different algorithms, or “models”,  that can be used to achieve this, and in this sandbox, we’ll explore the following models: linear regression classifier, random forest classifier, Gaussian mixture classifier, and support vector classifier. Other common models include (but are not limited to) neural networks, k-means clustering, and logistic regression.
        </p>
        <p className="learn-body">
          If you’d like to learn more about Machine Learning, check out the following links:
        </p>
        <div className="learn-links">
          <a className="learn-link" href="http://www.r2d3.us/visual-intro-to-machine-learning-part-1/">R2D3 - an amazing ML visualization</a><br/>
          <a className="learn-link" href="https://www.youtube.com/watch?v=nKW8Ndu7Mjw">Google Cloud's latest introduction video on ML</a><br/>
          <a className="learn-link" href="http://scikit-learn.org/stable/documentation.html">scikit-learn documentation</a>
        </div>
        <div className="learn-back-link">
          <Link className="back-link" to ="/sandbox">BACK</Link>
        </div>
      </div>
    )
  }
}

export default Wiki;