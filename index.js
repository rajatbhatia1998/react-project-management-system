import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './style.css';
import store from './Store/store.js'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    console.log(store.getState())
    return (
      <div>

         Hey
      </div>
    );
  }
}

render(
  <Provider store={store}>
  <App />
  </Provider>
  
  
  , document.getElementById('root'));
