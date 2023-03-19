import React from 'react'
import { Container } from 'react-bootstrap'
import arrow from '../images/Arrow 1.png'
const CurvedComponent = () => {
  return (
    <div className="top-left-curved-div">
    <Container>
    <div className='d-flex justify-content-center'>
    <span className='pt-5 mx-3 arrow-high'>←</span>
  
    <p className='font pt-5'>يهدف برنامج تجسير لابتكار حلول مساعدة للأسر المنتجة لتمكينها من تحول أنشطتها <br/> إلى منشآت مستدامة وذلك بدعم حصولها على الحلول التمويلية ودعم مساهمتها<br/> في تنمية الاقتصاد المحلي وخلق فرص تسويقية للمشاريع المميزة منها محليًا ودوليًا</p>
    </div>
    <div className='d-flex justify-content-center'>

    <button className='curved-btn mb-3 font' > عرض المزيد<span className='right-arrow-btn'>←</span></button>
    </div>
    </Container>
  </div>
  )
}

export default CurvedComponent
