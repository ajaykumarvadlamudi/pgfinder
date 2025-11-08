import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PGDetails from "./pages/PGDetails";
import AddPG from "./pages/AddPG";
function App() {

  return (
  <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pg/:id" element={<PGDetails/>}/>
        <Route path="/add" element={<AddPG/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
  )
}

export default App
