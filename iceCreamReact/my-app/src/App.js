import About from './components/About';
import OwnerPage from './components/OwnerPage';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer'
import StockSingle from './components/StockSingle';
import React, { useEffect, useState } from 'react';


import{
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [home, setHome]=useState([])
  useEffect(()=>{
  
      fetch('http://localhost:3001/api/stock')
      .then(res=>res.json())
      .then(data=>setHome(data))
  }, []) 
  console.log(home)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home storeData={home}/>} />
        <Route path='owner' element={<OwnerPage />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/stock/:id' element={<StockSingle />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
