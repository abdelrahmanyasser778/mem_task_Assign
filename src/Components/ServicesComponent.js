import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import image1 from '../images/2b84106b6d4be3023d95b54836eb267c.jpg'
import image2 from '../images/93abb0a7178c57b0b516674616db2f01.jpg'
import image3 from '../images/9e89c4ef380fabe58eaa4cdead1ecde8.jpg'
import image4 from '../images/d033c2cddc4d3dd1dd8941688b8cb13a.jpg'
const ServicesComponent = () => {
  const services = [
    {
      "name": "التدريب",
        "id": "one",
        "image":"../images/2b84106b6d4be3023d95b54836eb267c.jpg",
        "active":"true",
        "text":"برامج تدريبية وتأهيلية لتنمية المهارات المعرفية لأصحاب المشاريع المتناهية الصغر."
  
        
    },
    {
      "name": "تطوير الاعمال",
      "id": "two",
      "image":"../images/93abb0a7178c57b0b516674616db2f01.jpg",
      "active":"false",
      "text":"تمكين وتطوير الاسر المنتجة من مهارات وتنمية مبيعات المشاريع ودعم انتشارها للتحول الى مشاريع ناشئة صغيرة"
    },
    {
        "name": "دراسة الجدوى",
        "id": "three",
        "image":"../images/9e89c4ef380fabe58eaa4cdead1ecde8.jpg",
        "active":"false",
        "text":"محتوى تدريبي الكتروني تفاعلي لكيفية اعداد دراسة الجدوى للمشاريع"
      },
      {
        "name": " الجلسات الاستشارية",
        "id": "four",
        "image":"../images/9e89c4ef380fabe58eaa4cdead1ecde8.jpg",
        "active":"false",
        "text":"متخصصين لمساندة المشاريع وتمكينها من تحقيق النمو و التوسع وزيادة الايرادات السنوية"
      },
      {
        "name": " التمويل",
        "id": "five",
        "image":"../images/9e89c4ef380fabe58eaa4cdead1ecde8.jpg",
        "active":"false",
        "text":"منتج تمويلي بالاضافة الى خدمة متابعة كافة الاعمال بحيث توجيههم بكيفية التصرف"
      },
     
      
    ]
    const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div>

    <Container>
        <div className='font content-text'>خدماتنا</div>
      <div className='font content-text2'>يعبر هذا النص العربي عن نص وهمي سيتم اضافة نص حقيقي قريباً</div>

      <div className='d-flex' style={{width:"100%"}}>
      {
        services.map((item,index)=>{
          return(

          <div onClick={() => setActiveIndex(index)} id={index} className={`panel ${item.id} ${index === activeIndex ? 'active' : ''} `}>
            
            {

              index === activeIndex?(
                <div className='services-text'>
                <h3>{item.name}</h3>
                <hr class="new1"></hr>
                <p>{item.text}</p>
                <button className='curved-btn mb-3 font' > عرض المزيد<span className='right-arrow-btn'>←</span></button>
                </div>
            
            ):<div className='services-small-name'>{item.name}</div>
            }
            
            </div>
          )
        })
      }

           
        </div>
    </Container>

    </div>
  )
}

export default ServicesComponent
