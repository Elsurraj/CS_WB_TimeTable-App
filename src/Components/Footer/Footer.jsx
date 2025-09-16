import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

import '../../styles/footer.css'

const FooterQuickLinks =[
    {
        display: 'Home',
        url: '#',
    },
    {
        display: 'About US',
        url: 'about',
    },
    {
        display: 'Courses',
        url: '#',
    },
    {
        display: 'Pages',
        url: '#',
    },
    
]
const FooterInfoLinks =[
    {
        display: 'Privacy Policy',
        url: '#',
    },
    {
        display: 'Membership',
        url: '#',
    },
    {
        display: 'Purchases Guide',
        url: '#',
    },
    {
        display: 'Terms of Services',
        url: '#',
    },
]

const Footer = () => {
    
    return (
        <footer className='footer'>
            <br/> <br/> <br/>
            <Container>
             <Row>
              <Col lg='3'  >
               <h2 className='d-flex align-items-center gap-1'>
                <i className='ri-pantone-line'></i>ATBU Bauchi
               </h2>
               <div className='follow  align-items-center gap-2 '>
                <p className='fw-bold mb-0'>Follow us on Social Media</p>
                <span>
                 {''}
                 <a href='#'>
                  <i className='ri-facebook-line'></i>
                 </a>
                </span>
                <span>
                 {''}
                 <a href='#'>
                  <i className='ri-instagram-line'></i>
                 </a>
                </span>
                <span>
                 {''}
                 <a href='#'>
                  <i className='ri-linkedin-line'></i>
                 </a>
                </span>
                <span>
                 {''}
                 <a href='#'>
                  <i className='ri-twitter-line'></i>
                 </a>
                </span>
               </div>
              </Col>

              <Col lg='3'>
              <h6 className='fw-bold'>Explore</h6>
              <ListGroup className='link__list'>
              {
                  FooterQuickLinks.map((item, index) =>(
                      <ListGroupItem key={index} className='border-0 ps-0 link__item'>
                      <a href={item.url} >{item.display}</a>
                      </ListGroupItem>
                  ))
              }
              </ListGroup>
              </Col>

              <Col lg='3'>
               <h6 className='fw-bold'>Information</h6>
              <ListGroup className='link__list'>
              {
                  FooterInfoLinks.map((item, index) =>(
                      <ListGroupItem key={index} className='border-0 ps-0 link__item'>
                      <a href={item.url} >{item.display}</a>
                      </ListGroupItem>
                  ))
              }
              </ListGroup>
              </Col>

              <Col lg='3'>
              <h6 className='fw-bold'>Get In Touch</h6>
              <p>Address: Bauchi State Nigeria</p>
              <p>Tel: +238060810846</p>
              <p>Email: Atbu@gmail.com</p>
              </Col>

                <br/> <br/>
                <br/> <br/>
              
                 <footer className="app-footer">
                <p>&copy; {new Date().getFullYear()} ATBU Timetable System. Design & Developed by Suraj - All rights reserved.</p>
                    </footer>              
              </Row>
            </Container>
        </footer>
    )
}

export default Footer
