import React from 'react'
import { Container } from 'react-bootstrap'
import header from '../images/28417430 1.png'
import vector from '../images/Vector.png'
const ImageComponent = () => {
  return (
    <Container style={{ position: 'relative' }}>
         <img src={header} className="img-header" alt="Logo" style={{ maxWidth: '100%', width: '100%' }} />
         <div className='circle-header' >
         <img src={vector}  alt="vector"  />
        
      </div>
      <div className='circle'></div>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </Container>
  )
}

export default ImageComponent
