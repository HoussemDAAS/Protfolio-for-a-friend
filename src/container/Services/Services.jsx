import React from 'react'
import Titles from '../../components/Titles/Titles'
import devider from '../../assets/devider.svg'
import './Services.css'
import dataServices from '../../constents/dataService'
import Service from '../../components/Service/Service'
const Services = () => {
  
  return (
    <div className='services'> 
      <Titles title={'Services'} />
        <div className='services-container'>
            <p>I am the manager of SC Art Visual, a dynamic company offering a wide range of multi-services. Our website showcases the diverse array of creative solutions we provide, giving you a glimpse of our capabilities and expertise. Explore our website to discover the possibilities and get inspired by the innovative solutions we can offer. Enjoy the journey of exploring our services and see how we can bring your vision to life.</p>
            <img src={devider} alt="" />
        </div>
        <div className='services-card'>
        <div className='services-row'>
          {dataServices.slice(0, 2).map((service) => (
            <Service key={service.id} data={service} />
          ))}
        </div>
        <div className='services-row'>
          {dataServices.slice(2).map((service) => (
            <Service key={service.id} data={service} />
          ))}
        </div>
      </div>
        
    </div>
  )
}

export default Services
