import React from 'react'
import { Container, Row, Col} from 'reactstrap'

import '../../styles/newslatter.css'

const NewsLatter = () => {
    return (
        <section>
            <Container className='newslatterr'>
             <Row>
              <Col lg='12' className='text-center'>
               <h2 className='mb-4'>Subscribe Our NewsLetter</h2>
               <div className='subscribe'>
                <input type='text' placeholder='Email'/>
               <button className='btn-sub'>Subscribe</button>
               </div>
              </Col>
              
              <Col lg='3' md="4" sm="6" className='mobile-newsletter center'>
            <h5 className="footer__tittle ">NewsLetter</h5>
             <p> Subscribe our Newsletter </p>
             <div className='newsletter'>
              <input type='email' placeholder='Enter your email'/>
              <span><i className="ri-send-plane-line"></i></span>
             </div>
            </Col>
             </Row>
            </Container>
        </section>
    )
}

export default NewsLatter
