// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {HashRouter as Router, Route} from 'react-router-dom'

import reducers from './redux/reducers.js'

import Webcam from './components/webcam'


const startState = {
}

export const initialState = Immutable.Map(startState)
export const store = createStore(reducers, startState, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router >
    	<div >
    		<Route exact path="/" component={Webcam}/>
    	</div>
	</Router>
  </Provider>,

  document.getElementById('root')
);

