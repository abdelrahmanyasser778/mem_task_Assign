import React, { useEffect, useRef, useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import flower from '../images/Untitled.png'


const ContentComponent = () => {
    const contents = [
        {
          "name": "التسجيل",
            "id": 0,
            "text":            "في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة"

        },
        {
          "name": "القبول",
          "id": 1,
          "text":          "في هذه المرحلة يتم قبول المشاركين بناء على الضوابط والشروط المذكورة"

        },
        {
            "name": "التدريب",
            "id": 2,
            "text":           "في هذه المرحلة يتم تقديم برامج تدريبية و تأهيلية للمشاركين بموجز 7 حقائب تطورية"

          },
          {
            "name": "دراسة الجدوى",
            "id": 3,
            "text":       "في هذه المرحلة يتم تقديم محتوى تدريبي الكتروني تفاعلي لكيفية اعداد دراسة الجدوى للمشاريع"


          },
          {
            "name": "جلسات الاستشارية",
            "id": 4,
            "text":            "في هذه المرحلة يتم استقطاب متخصصين لمساندة المشاريع وتمكينها من تحقيق النمو والتوسع"

          },
          {
            "name": "تمويل",
            "id": 5,
            "text":          "في هذه المرحلة يتم تقديم منتج تمويلي بالاضافه الي متابعة كافة الاعمال"

          },
          {
            "name": "تطوير الاعمال",
            "id": 6,
            "text":            "في هذه المرحلة يتم تمكين وتطوير مشاريع من خلال متخصصين في تطوير الاعمال "

  
          },
          {
            "name": "تصدير",
            "id": 7,
            "text":            "في هذه المرحله يتم دعم المشاركين من خلال ربطهم بجهات تصدير وربطهم بمنافذ دولية"

          },
          

      ]
      const [counter,setCounter]=useState(0);
      const [text,setText]=useState("في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة")
      const [index, setIndex] = useState(0);
      const texts = [            "في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة"
      ,           "في هذه المرحلة يتم قبول المشاركين بناء على الضوابط والشروط المذكورة",
      "في هذه المرحلة يتم تقديم برامج تدريبية و تأهيلية للمشاركين بموجز 7 حقائب تطورية"

      ,        "في هذه المرحلة يتم تقديم محتوى تدريبي الكتروني تفاعلي لكيفية اعداد دراسة الجدوى للمشاريع",
      "في هذه المرحلة يتم استقطاب متخصصين لمساندة المشاريع وتمكينها من تحقيق النمو والتوسع"
,
"في هذه المرحلة يتم تقديم منتج تمويلي بالاضافه الي متابعة كافة الاعمال"
,
"في هذه المرحلة يتم تمكين وتطوير مشاريع من خلال متخصصين في تطوير الاعمال "
,
"في هذه المرحله يتم دعم المشاركين من خلال ربطهم بجهات تصدير وربطهم بمنافذ دولية"


];
const [showText, setShowText] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
      const timeoutRef = useRef(null);
      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setCounter((prevIndex) =>
              prevIndex === contents.length - 1 ? 0 : prevIndex + 1
            ),
            
            
          2500
        );
    
        return () => {
          resetTimeout();
        };
      }, [counter]);

      const handleClick=(index,item)=>{
        setCounter(index)
        
          
            setText(texts[currentIndex])
          
         

      }

      useEffect(() => {
        if (currentIndex === texts.length - 1) {
          console.log("stopping");
          return;
        }
        const interval = setInterval(() => {
          const updatedData = currentIndex + 1;
          setCurrentIndex(updatedData);
        }, 2500);
    
        return () => clearInterval(interval);
      }, [currentIndex]);
    
    

  return (
    <Container>
      <div className='font content-text'>جسر المستفيد</div>
      <div className='font content-text2'>يعبر هذا النص العربي عن نص وهمي سيتم اضافة نص حقيقي قريباً</div>
    

      <div class="progressbar">
        <div class="progress" id="progress"></div>
        {
            contents.map((item,index)=>{
                return(

        <div onClick={()=>handleClick(index,item)} key={index} class="progress-step font" style={{backgroundColor:counter === index? ' #14B1C7':'#fff',color:counter === index? ' #fff':'#000', transition: "all 1s linear"}}>{item.name}</div>
                )
            })
        }

      </div>
    
    <Row className='content-box'>
        <Col xs="12" lg="1" className='Num'>0{counter+1}</Col>
     
        <Col xs="12" className="mt-4 content-p" lg="10"><p>{texts[counter]}</p></Col>
        <Col  lg="1" className='content-img'><img src={flower} width="100px"/></Col>
    </Row>
  
      
    </Container>
  )
}

export default ContentComponent
