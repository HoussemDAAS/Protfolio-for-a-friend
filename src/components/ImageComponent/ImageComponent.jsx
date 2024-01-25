import React from 'react';
import styled from 'styled-components';
import './ImageComponent.css';
const Div=styled.div`
    
`

const ImageComponent = ({ image }) => {
  



  return (
    <Div key={image.id} className='image'>
     
        <img  src={image.src} alt={image.alt} />
      
    </Div>
  );
};

export default ImageComponent;
