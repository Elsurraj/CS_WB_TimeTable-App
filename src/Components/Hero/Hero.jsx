import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import HeroImg from '../../assest/images/hero.jpg'

import '../../styles/hero.css'

const Hero = () => {
    return (
       <section className='mt-5'>
        <Container>
         <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h2 className='hero__title mb-4'>
              Web Based<br/> <span className='color'>TimeTable</span>  System
              </h2>
              <p className='hero__subtitle mb-5'>
              Abubakar Tafawa <br/> Balewa University Bauchi
              </p>

              <div className='hero__btns d-flex align-items-center gap-5 mt-4 '>
                     <button className='order__btn d-flex align-items-center justify-content-between'>
                        <Link to='/register' >Explore <i className='ri-arrow-right-s-line'></i></Link>
                     </button>

              </div>
            </div>
          </Col>


          <Col lg='6' md='6'>
           <div className='hero__img'>
             <img src={HeroImg} alt='hero-img' className='w-100' />
           </div>
          </Col>
         </Row>
        </Container>
       </section>
    )
}

export default Hero;
