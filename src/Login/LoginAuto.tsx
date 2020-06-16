import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
//@ts-ignore
import FirebaseUIAuth from "react-firebaseui-localized";

import { firebaseConfig } from '../config'

const firebaseApp = firebase.initializeApp(firebaseConfig);

const uiConfig: FirebaseUIAuth.auth.Config = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  siteName: 'Teste Wallas',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: 'BR'
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

export default function LoginAuto() {
  return (
    <FirebaseUIAuth
      lang="pt_br"
      config={uiConfig}
      auth={firebaseApp.auth()}
      firebase={firebase}
    />
  )
}
