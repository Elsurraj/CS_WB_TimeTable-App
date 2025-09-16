import React, {useRef} from 'react'
import { Container } from 'reactstrap'
import Logo from '../../assest/images/logo.jpg'
import {Link } from 'react-router-dom'

import '../../styles/header.css'

const navLinks = [
    {
        display: 'Home',
        url: 'home'
    },
    {
        display: 'TimeTable',
        url: 'timetable'
    },
    {
        display: 'About',
        url: 'about'
    },   
   
]
 
const Header = () => {
    const MenuRef = useRef()
    const menuToggle = () => MenuRef.current.classList.toggle('active__menu')

    return (
        <header className='header'>
         <Container>
          <div className='navigation d-flex align-items-center justify-content-between'>
             <div className='logo'>              
               <img src={Logo} alt="logo" />           
             </div>

             <div className='nav d-flex align-items-center gap-5'>
               <div className='nav__menu' ref={MenuRef} onClick={menuToggle}>
                 <ul className='nav__list'>
                   {
                       navLinks.map((item, index) =>(
                           <li key={index}
                              className='nav__item'>
                           <a href={item.url} >
                               {item.display}
                           </a></li>
                       ))
                   }
                 </ul>
               </div>
               
             </div>
             <div className='nav__right'>
                 <p className='mb-0 d-flex align-items-center gap-2'>
                 <span className='user'>
                        <Link to='/register'><i className='ri-user-line'></i></Link>
                        </span>
                 </p>
               </div>

               <div className='mobile__menu'>
                   <span><i className='ri-menu-line' onClick={menuToggle}></i> </span>
               </div>
          </div>
         </Container>
        </header>
    )
}

export default Header
