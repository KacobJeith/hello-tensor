import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions'
import { withRouter } from 'react-router-dom'
import Webcam from "react-webcam";


const mapStateToProps = (state) => ({
})

class Portfolio extends Component {

  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log('capture: ');
    console.log(imageSrc);
  };

  render() {
  	const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
	      <Webcam 
	      	ref={this.setRef}
	      	videoConstraints={videoConstraints}
	      />
	      <button onClick={this.capture}>Capture photo</button>
      </div>
    )
  }
}


var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio))