import React from 'react'
import './Navbar.css'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
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
    };}, []);
    
  const navbarClasses = `navbar ${scroll ? 'scrolled' : ''}`;


  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
  
    <div className={navbarClasses}>
    
      
        <div className='navbar-container_links'>
          <ul>
            <li ><a href="#about">About me</a></li>
            <li > <a href="#skills">Skills</a></li>
            <li > <a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className='navbar-container_links-contact'><a href="#contact">Contact me</a></div>
        <div className='small-screen'>
          <FiAlignJustify color="white" fontSize={27} onClick={toggleMenu} />
          {showMenu && (
            <div className='small-screen-overly flex__center slide-bottom'>
               <FiX className='overlay__close' fontSize={27} onClick={toggleMenu}/>
               <ul className='navbar-small-screen_links'>
               <li ><a href="#about">About me</a></li>
            <li > <a href="#skills">Skills</a></li>
            <li > <a href="#portfolio">Portfolio</a></li>
          </ul>
            </div>
          )}
        </div>
    
    </div>
  )
}

export default Navbar
