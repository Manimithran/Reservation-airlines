import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Booking from './components/Booking';
import Experience from './components/Experience';
import Detail from './components/Detail';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import img from './Images/logo1.png';
import menu from './Images/menu.png';

const App = () => {
  function handleClick(){
    const slider=document.getElementById('slider');
    const inside=document.getElementById('inside');
    slider.classList.toggle('slideList');
    inside.style.display="block";
    inside.style.transition="0.6s";
  }
  return (
    <Router>
      <div className="app">
        {/* <div id='slider'>
        <ul id='inside' className='insideClass'>
            <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/detail">Detail</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
        </div> */}
        <header>
        
          <div className="logo-title">
            <img src={img} alt="The Airliner Logo" className="logo" />
            <span className="title"><i>AIR<span className='liner'>LINER</span></i></span>
          </div>
          <div>
          <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/detail">Detail</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <span className='menu' id='menu'><img src={menu} onClick={handleClick} /></span>
          </nav>
          </div>
        </header>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

