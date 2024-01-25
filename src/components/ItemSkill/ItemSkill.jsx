import React from 'react'
import ImageComponent from '../ImageComponent/ImageComponent';
const ItemSkill = ({ title, images }) => {
  return (
    <div style={{  flexDirection: 'column', alignItems: 'center',maxWidth :'100%' }}>
      <h2>{title}</h2> 
        <div className='skills-card'>
          {images.map((image, index) => (
            <ImageComponent key={index} image={image} />
          ))}
        </div>
    </div>
  )
}

export default ItemSkill
