import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import  './Header.css'
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import logo from "../../assets/logo.png";
import profile from '../../assets/profile.png';
const Header = () => {
  return ( 
  //   <header className="header bg-pan-left">
  //   <div className="logo"> 
  //     <img src={logo} alt="Logo" />
  //   </div>
  //   <div className="content">
  //     <div className="description">
  //       <h3>Hi,I am</h3>
  //       <h1>Sabri Chetouane</h1>
  //       <span>Front-end Developer</span>
  //       <span>multi Designer</span>
  //     </div>
  //     <div className="profile-picture">
  //       <img src={profile} alt="Picture" />
  //     </div>
  //   </div>
  // </header>
<section className='main-home'>
  
  <div className='main-text'>
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <h3>Hi, I am</h3>
    <h1>Sabri Chetouane</h1>
    <p><span id='spin'></span></p>
    <div className='social-icons'>
      <a href=""><BiLogoGmail size={'30px'} color='black'/></a>
      <a href=""><BiLogoGithub size={'30px'}/></a>
      <a href=""><BiLogoLinkedinSquare size={'30px'}/></a>
    </div>
    <div className='background-image'> 
    <img src={profile} alt="" /></div>
  </div>
</section>

  )
}

export default Header
