import React from 'react'
import './Home.css';
import plane from '../Images/plane-icon.svg';
import planeHome from '../Images/newHome.png';
import { BiSolidPlaneAlt } from "react-icons/bi";
function Home() {
  return (
    <div className='main-container'>
       <section className='section'>
       <div className='text'>
        <div className='slider'>Slider</div>
          <h1>Fly with Ease, Book with Confidence</h1>
          <button>Ready To &nbsp;<span className='buttonPlane'><BiSolidPlaneAlt /></span></button>
       </div>
       <div className='pic'>
        <img src={planeHome} className='planeHome'/>
       </div>
       </section>
    </div>
  )
}

export default Home