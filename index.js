import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './style.css';
import store from './Store/store.js'
import firebase from 'firebase/app'
import firebaseConfig from './Components/Config/fbconfig.js'

//Components import
import Login from './Components/Auth/Login.js'




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
 if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  }

  render() {
    console.log(store.getState())
    return (
      <div>

         <p>This is nav</p>
         <Router>
            <Route path="/login" exact>
                  <Login/>
            </Route>


         </Router>
      </div>
    );
  }
}

render(
  <Provider store={store}>
  <App />
  </Provider>
  
  
  , document.getElementById('root'));
