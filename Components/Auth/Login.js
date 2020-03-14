import React,{useEffect} from 'react';
import firebaseui from 'firebaseui'
import firebase from 'firebase/app'




export default function Login(props){

  useEffect(()=>{
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      
      return true;
    },
    uiShown: function() {
     
      document.getElementById('loader').style.display = 'none';
    }
  },

  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],

  tosUrl: '<your-tos-url>',

  privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);
  })

  return(
    <div>

    <h1>Welcome to My Awesome App</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>

    </div>
  )
}