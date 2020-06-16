import React, { useState } from 'react'

import firebase from "firebase/app";
import "firebase/auth";

export default function LoginManual() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Email ou senha inválido');
      } else {
        alert(error.message);
      }
    }
  }

  function loginComGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }

  return (
    <div className="manual-form">
      <input 
        type="email"
        value={email}
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder='Senha'
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>Entrar</button>
      <hr/>
      <button onClick={loginComGoogle}>Entrar com o google</button>
    </div>
  )
}
