import { useState } from 'react'
import './App.css'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './page/Inicio';
import Location from './page/Location';
import LastTime from './page/LastTime';
function App() {
  const [geoData, setGeoData] = useState({});
  const [allGeoData, setAllGeoData] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio geoData={geoData} />}></Route>
          <Route path="/location" element={<Location geoData={geoData} setGeoData={setGeoData}/>}></Route>
          <Route path="/sendlocation" element={<LastTime allGeoData={allGeoData} setAllGeoData={setAllGeoData}/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
