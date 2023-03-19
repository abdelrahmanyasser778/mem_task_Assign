import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import footer from '../images/foooterImg.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import insta from '../images/insta.png'
import youtube from '../images/youtube.png'
import linkedin from '../images/LinkedIn.png'
const Footer = () => {
  return (
    <div className="footer-background footer mt-3 pt-2 " style={{ maxHeight: "190px" }}>
    <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
            <Col xs="12" sm="4" className="d-flex justify-content-center  ">
                <div className="footer-shroot ">الرئيسية</div>
                <div className="footer-shroot mx-2"> عن المنصة</div>
                <div className="footer-shroot mx-2"> الخدمات</div>
                <div className="footer-shroot mx-2"> انضم الينا</div>
            </Col>
            <Col sm="4" className="d-flex justify-content-center ">
              <img src={footer} width="40px" height="40px"/>
            </Col>
            <Col
                xs="12" sm="4"
                className="logo-footer  li-item ">
                <div  style={{ cursor: "pointer", border:"1px solid #fff" ,borderRadius:"100%" ,padding:"0px 5px" }}>
                <i class="ri-linkedin-box-fill"></i>
                </div>
                <div  style={{ cursor: "pointer" ,"marginRight":"10px" ,border:"1px solid #fff" ,borderRadius:"100%",padding:"0px 5px"}}>
                <i class="ri-youtube-fill"></i>
                </div>
                <div style={{ cursor: "pointer","marginRight":"10px" , border:"1px solid #fff" ,borderRadius:"100%" ,padding:"0px 5px" }}>
                <i class="ri-instagram-line"></i>
                </div>
                <div style={{ cursor: "pointer","marginRight":"10px", border:"1px solid #fff" ,borderRadius:"100%" ,padding:"0px 5px" }} className="">
                <i class="ri-twitter-fill"></i>
                </div>
                <div style={{ cursor: "pointer","marginRight":"10px", border:"1px solid #fff" ,borderRadius:"100%" ,padding:"0px 5px" }} className="">
                <i class="ri-facebook-circle-fill"></i>
                </div>
            </Col>
        <hr class="new1"></hr>
        </Row>
        <Row className="d-flex justify-content-between align-items-left pb-3">
          <Col className='d-flex justify-content-end'>
            <div className='footer-shroot mx-3' style={{textDecoration:"underline"}}>سياسة الخصوصية</div>
            <div className='footer-shroot' style={{textDecoration:"underline"}}>شروط الاستخدام</div>
          </Col>
        </Row>

    </Container>
</div>
  )
}

export default Footer
