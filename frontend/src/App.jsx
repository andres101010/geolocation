import { useState } from 'react'
import './App.css'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './page/Inicio';
import Location from './page/Location';
function App() {
  const [geoData, setGeoData] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio geoData={geoData} />}></Route>
          <Route path="/location" element={<Location geoData={geoData} setGeoData={setGeoData}/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
