import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

import { firebaseConfig } from './config'

import './App.css';
import LoginAuto from './Login/LoginAuto';
import LoginManual from './Login/LoginManual';

interface Context {
  user: firebase.User | undefined,
  isSignedIn: boolean | undefined,
  providerId: string | any
}

function App() {
  const logout = () => firebase.auth().signOut()

  return (
    <>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <div className="App">
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }: Context) => {
              if (!isSignedIn) 
                return <div><LoginManual /> <LoginAuto /></div>

              return (
                <div>
                  <h2>Oi {user?.displayName || user?.email}</h2>
                  {user?.photoURL && <img src={user.photoURL} />}

                  {isSignedIn && <button onClick={logout}>Sair</button>}

                  <pre>
                    {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                  </pre>
                </div>
              );
            }}
          </FirebaseAuthConsumer>
        </div>
      </FirebaseAuthProvider>
    </>
  );
}

export default App;
