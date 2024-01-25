import React from 'react'
import './Footer.css'
import Links from '../../components/Links/Links'
import arrow from '../../assets/double arrow.svg';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-arrow'>
<img   src={arrow} alt="" />
       <a href="#header">BACK TO TOP</a></div>
      <Links />
     <p className='footer-text'><strong>© 2024 Daas Houssem</strong> All Rights Reserved.</p> 
    </div>
  )
}

export default Footer
