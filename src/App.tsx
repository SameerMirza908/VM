import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CashDiscount from './pages/CashDiscount';
import ATMPlacement from './pages/ATMPlacement';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/vending-services" element={<Home />} />
            <Route path="/cash-discount" element={<CashDiscount />} />
            <Route path="/atm-placement" element={<ATMPlacement />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;