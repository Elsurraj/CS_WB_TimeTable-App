import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import LoginImg from '../assest/images/hero4.jpeg';
import '../styles/loginTimetable.css'

const LoginTimetable = () => {
    return (
        <section>
      <Container>
        <Row>
          <div className="account-page">
            <div className="container">
              <div className="row">
                <div className="col-2 account">
                  <img src={LoginImg} className="bg-image" alt="Imag" />                
                  </div>

                <div className='col-2'>
                <div className="form-container generate-container">
                             <div className="form-btn">                                
                                 <span >Generate TimeTable</span>
                                 <hr id="Indicator" />
                             </div>                           
                                <form className='form__container' id="RegForm">
                                    <input type="text" placeholder="Reg. Number" required /> 
                                    <div className='options-select'>
                                        <select>
                                            <option >Faculty</option>
                                            <option value='computing'>Computing</option>
                                        </select>
                                        <select>
                                            <option value=''>Department</option>
                                            <option value='Computer Science'>Computer Science</option>
                                            <option value='Cyber Security'>Cyber Security</option>
                                            <option value='AI'>AI</option>
                                            <option value='Data Science'>Data Science</option>
                                        </select>                                       
                                    
                                    <div class="select-options">
                                        <div class="select-options-col">
                                            <select>
                                                <option value="">Semester</option>
                                                <option value="1st">1st</option>
                                                <option value="2nd">2nd</option>
                                            </select>
                                        </div>
                                        <div class="select-options-col">
                                        <select>
                                            <option value="">Sesion</option>
                                            <option value="1st">2018/2019</option>
                                            <option value="1st">2019/2020</option>
                                            <option value="1st">2020/2021</option>
                                            <option value="1st">2021/2022</option>
                                            <option value="1st">2022/2023</option>
                                            <option value="2nd">2018/2019</option>
                                            <option value="2nd">2019/2020</option>
                                            <option value="2nd">2020/2021</option>
                                            <option value="2nd">2021/2022</option>
                                            <option value="2nd">2022/2023</option>
                                            <option value="2nd">2023/2024</option>
                                         </select>
                                        </div>                                       
                                    </div> 

                                    
                                    <select>
                                        <option value="">Level</option>
                                        <option value="100L">100L</option>
                                        <option value="200L">200L</option>
                                        <option value="300L">300L</option>
                                        <option value="400L">400L</option>
                                        <option value="500L">500L</option>                                       
                                    </select>
                                </div>
                                    
                                      
                                                                    
                                    <button type="submit" className="btnn">
                                        <Link to='/timetable'>Generate </Link>
                                    </button>
                                </form>
                         </div>
                </div>
             </div>
        </div>
    </div>
                  </Row>
                </Container>
             </section>
    )
}

export default LoginTimetable
