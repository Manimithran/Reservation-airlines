import React from 'react';
import img from '../Images/about.png'
import './About.css';
const AboutUs = () => {
  return(
    <>
     <div className='container'>
      <div className='main-text'>About
        <div className='text-para'>
        At Airlines Reservation System, we understand that travel should be seamless, from the moment you start planning until you reach your destination. Our advanced online booking platform is designed to provide you with a hassle-free experience, allowing you to effortlessly plan and manage your travel itinerary.
        <p> Our user-friendly interface makes booking flights straightforward and quick. Simply enter your travel details, browse available flights, and confirm your booking with just a few clicks.</p>
        <p>We offer a wide selection of flights from various airlines, ensuring that you find the best options to suit your schedule and budget.</p>
        <p>Rest assured that your transactions are secure with our trusted payment gateway, allowing you to book your flights with confidence</p>
        <p>Our dedicated customer support team is available around the clock to assist you with any queries or concerns you may have before, during, or after your booking.</p>
        <p><span className='contact'>Contact Us</span>
          Have questions or need assistance? Please don't hesitate to reach out to our customer support teamx at 678-878-897.<br/>
          Thank you for choosing Airlines Reservation System for your travel needs. We look forward to serving you!
</p>
<p className='journey'>Happy Journey with us!</p>
        </div>
      </div>
      <div className='image'>
      <img src={img}/>
      </div>
      
      </div>
    
    </>
  )
};

export default AboutUs;
