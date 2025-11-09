import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PGDetails from "./pages/PGDetails";
import AddPG from "./pages/AddPG";
function App() {

  return (
  <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar stays on top */}
        <Navbar />

        {/* Page content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pg/:id" element={<PGDetails />} />
            <Route path="/add" element={<AddPG />} />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
