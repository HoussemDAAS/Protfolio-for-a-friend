import React from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import { useState, useEffect } from 'react'
const Navbar = () => {
  const[scroll,setScroll]=useState(false);

    useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScroll(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navbarClasses = `navbar ${scroll ? 'scrolled' : ''}`;
  return (
  
    <div className={navbarClasses}>
    
      
        <div className='navbar-container_links'>
          <ul>
            <li>About me</li>
            <li>Skills</li>
            <li>Portfolio</li>
          </ul>
          <div className='navbar-container_links-contact'><a href="#contact">Contact me</a></div>
          
        </div>
    
    </div>
  )
}

export default Navbar
