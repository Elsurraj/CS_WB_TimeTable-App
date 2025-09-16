import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import '../styles/about.css'

const About = () => {
    return (
        <section>
   
            <Container>
                <Row>
    <div className="about-section">
    <div className="small-container">
        <div class="row">
            <Col className="col-3 header-color-style">
                <h2> About Abubakar Tafawa Balewa University (ATBU), Bauchi</h2>
                <p>               
                Abubakar Tafawa Balewa University (ATBU), Bauchi, is a federal university of technology located in Bauchi,
                Bauchi State, Nigeria. Established in 1980 as the Federal University of Technology, Bauchi, it was later
                renamed in 1988 in honour of the first Prime Minister of Nigeria, Sir Abubakar Tafawa Balewa. 
                ATBU is renowned for its commitment to technological education, research, and innovation, 
                contributing significantly to national development through its various faculties and programs. 
                The university fosters a conducive learning environment, attracting students and scholars from 
                across Nigeria and beyond.
                </p>                
            </Col>

            <Col className="col-3 header-color-style">
                <h2>About The Faculty of Computing, ATBU Bauchi</h2>
                <p>                
                The Faculty of Computing at Abubakar Tafawa Balewa University is at the forefront of 
                technological education and research within the institution. It is dedicated to producing
                 highly skilled and innovative graduates in various fields of computing. The faculty offers 
                 a diverse range of programs designed to equip students with theoretical knowledge, practical
                  skills, and problem-solving abilities essential for success in the rapidly evolving global
                   technology landscape. With experienced faculty members and modern facilities, the Faculty
                    of Computing strives to be a hub for cutting-edge research and development in computing 
                    sciences.
                </p> 
            </Col>

            <Col className="col-3 header-color-style">
                <h2>About The Department of Computer Science, ATBU Bauchi</h2>
                <p>                
            The Department of Computer Science, a prominent department within the Faculty of Computing
             at ATBU, is committed to delivering a comprehensive and robust computer science education.
              It offers a Bachelor of Technology (B.Tech) degree in Computer Science, focusing on
               fundamental principles, advanced concepts, and practical applications in areas such
                as algorithms, data structures, software engineering, artificial intelligence, 
                and cybersecurity. The department aims to develop critical thinking, creativity,
                 and technical proficiency in its students, preparing them for diverse roles in 
                 the IT industry, academia, and research. Graduates are well-prepared to tackle 
                 complex computational challenges and contribute to technological advancements.
                </p>              
            </Col>           

        </div>
                    <br /> <br />
        <div className='row row-new'>
        <Col className="coll-1 header-color-style">
                <h2>About The Timetable Generation Software</h2>
                <p>              
            This software is an innovative solution designed to streamline the timetable generation 
            and access process for students of the Computer Science Department, Faculty of Computing,
             ATBU Bauchi. Our primary goal is to simplify how students view and manage their academic 
             schedules, making it quick, efficient, and user-friendly. By simply entering their registration 
             number, selecting their faculty (Computing), department (Computer Science), semester, session,
              and current academic level, students can instantly retrieve their personalized timetable.
               The system intelligently navigates to the correct timetable based on the selected level
                (e.g., 100L, 200L, 300L, 400L, 500L), ensuring that students always have access to the most                
                 relevant and up-to-date schedule. This eliminates the need for manual searching and provides 
                 a centralized, accessible platform for academic planning.   
                </p>
            </Col>
        </div>
        
    </div>
</div>
                </Row>
            </Container>
        </section>
    )
}

export default About
