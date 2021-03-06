import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store/store.js'
import firebase from 'firebase/app'
import firebaseConfig from './Components/Config/fbconfig.js'

//Components import
import Header from './Components/Nav/Header'
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

        <Header/>
         <Router>
            <Route path="/login" exact>
                  <Login/>
            </Route>

             <Route path="/" >
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
