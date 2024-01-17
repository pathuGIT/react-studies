import { useEffect, useState } from 'react';
import './App.scss'
import Header from './component/headerContent/Header';

function App() {

const login = true;

  return (
    <>
      <Header/>
      {login && <h2>Login true</h2>}      
      {!login && <h2>Login true</h2>}     
    </>
  )
}

export default App
