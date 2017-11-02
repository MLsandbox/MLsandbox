import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wiki extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="learn-more">
        <h1 className="learn-title">Machine Learning:  What Even Is?</h1>
        <p className="learn-body">
          In a nutshell, Machine Learning (ML) refers to computer applications that self-improve over time.  In order to pull this off, ML applications typically take a large amount of data as input in order to be accurate (the process of feeding data into a Machine Learning algorithm is referred to as “training”).  During training, the ML algorithm determines to which set of categories a new observation belongs (“classification”).  If our ML algorithm is to be accurate, we’ll need to specify a set of categories, or “classifiers”, that make sense for our given application.
        </p>
        <p className="learn-body">
          With training, these classifiers improve and become more accurate over time.  There are a number of different algorithms, or “models”,  that can be used to achieve this, and in this sandbox, we’ll explore the following models: linear regression classifier, random forest classifier, Gaussian mixture classifier, and support vector classifier. Other common models include (but are not limited to) neural networks, k-means clustering, and logistic regression.
        </p>
        <p className="learn-body">
          If you’d like to learn more about Machine Learning, check out the following links:
          <a href="https://www.youtube.com/watch?v=h0e2HAPTGF4">https://www.youtube.com/watch?v=h0e2HAPTGF4</a>
          <a href="http://www.r2d3.us/visual-intro-to-machine-learning-part-1/">http://www.r2d3.us/visual-intro-to-machine-learning-part-1/</a>
          <a href="https://www.youtube.com/watch?v=nKW8Ndu7Mjw">https://www.youtube.com/watch?v=nKW8Ndu7Mjw</a>
          <a hreft="http://scikit-learn.org/stable/documentation.html">http://scikit-learn.org/stable/documentation.html</a>
        </p>
        <h1><Link to ="/sandbox">BACK</Link></h1>
      </div>
    )
  }
}

export default Wiki;