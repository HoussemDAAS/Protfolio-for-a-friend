import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import  './Header.css'
import profile from '../../assets/profile.png'
const Header = () => {
  return ( 
  <div className='header '>
 
    <div className='app__wrapper'> 
        <div className='app-wrapper_info'>
            <h1>Hi, I'm 
                <br /><span>Sabri Chetouane</span></h1>
            <h3>Frontend Developer</h3>
            <h3>Multi Designer</h3>
             </div>
            <div className='app__wrapper_img'>
                <img src={profile} alt="profile"  style={{width:'70%'}}/>
            </div>      
    </div></div>
  )
}

export default Header
