import React from 'react'
import './Service.css'


const Service = ({data:{title,description,image}}) => {
  
  return (
    <div className='service'>
        <div className="service-card">
            <img src={image}alt="" />
            <h3>{title}</h3>
        </div>
        <p>{description}</p>
      
    </div>
  )
}

export default Service
