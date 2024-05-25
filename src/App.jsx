import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header.jsx';
// import { Map } from './components/Map/Map.jsx';
import { CoordInput } from './components/CoordInput/CoordInput.jsx';



function App() {

  return (
    <>
      <header> 
        <Header/>
      </header>
      <main>
        <CoordInput/>
      </main>
    </>
  )
}

export default App;
