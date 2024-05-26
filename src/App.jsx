import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header.jsx';
import { CoordInput } from './components/CoordInput/CoordInput.jsx';
import Forecast from './components/Forecast/Forecast.jsx';


function App() {

  const [coordinates, setCoordinates] = useState(null);


  return (
    <>
      <header> 
        <Header/>
      </header>
      <main>
        <CoordInput setCoordinates={setCoordinates}/>
        { (coordinates) 
        ? <Forecast coordinates={coordinates} /> : <></>}
        
      </main>
    </>
  )
}

export default App;
