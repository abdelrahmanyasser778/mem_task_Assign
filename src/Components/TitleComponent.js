import React from 'react'
import { Container } from 'react-bootstrap'

const TitleComponent = () => {
  return (
    <Container>
      <button className='title-btn mb-3 font' >عن تجسير</button>
      <div className='title-content font'>تحويل الأسر المنتجة إلى منشآت تجارية<br/> مستدامة</div>
    </Container>
  )
}

export default TitleComponent
