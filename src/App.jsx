import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header.jsx';
import { CoordInput } from './components/CoordInput/CoordInput.jsx';
import Forecast from './components/Forecast/Forecast.jsx';


function App() {

  return (
    <>
      <header> 
        <Header/>
      </header>
      <main>
        <CoordInput/>
        <Forecast/>
      </main>
    </>
  )
}

export default App;
