import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Row } from 'reactstrap';
import LoginImg from '../assest/images/hero4.jpeg';
import '../styles/loginTimetable.css';

const GenerateTT = () => {
    // State variables to store form input values
    const [regNumber, setRegNumber] = useState('');
    const [faculty, setFaculty] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [session, setSession] = useState('');
    const [level, setLevel] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check the conditions for navigation
        if (
            regNumber && // Ensure reg number is entered
            faculty === 'computing' &&
            department === 'Computer Science' &&
            semester && // Ensure semester is selected
            session // Ensure session is selected
        ) {
            switch (level) {
                case '100L':
                    navigate('/oneHL');
                    break;
                case '200L':
                    navigate('/twoHL');
                    break;
                case '300L':
                    navigate('/threeHL'); // Assuming this should be /threeHL based on typical progression
                    break;
                case '400L': // You had 400L in your select but no rule for it
                    navigate('/fourHL'); // Added a rule for 400L
                    break;
                case '500L':
                    navigate('/fiveHL');
                    break;
                default:
                    // Handle cases where no specific level is selected or conditions aren't met
                    alert('Please select a valid level to generate the timetable.');
                    break;
            }
        } else {
            alert('Please fill in all required fields and ensure the correct Faculty and Department are selected.');
        }
    };

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
                                            <span>Generate TimeTable</span>
                                            <hr id="Indicator" />
                                        </div>
                                        <form className='form__container' id="RegForm" onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                placeholder="Reg. Number"
                                                required
                                                value={regNumber}
                                                onChange={(e) => setRegNumber(e.target.value)}
                                            />
                                            <div className='options-select'>
                                                <select value={faculty} onChange={(e) => setFaculty(e.target.value)}>
                                                    <option value=''>Faculty</option>
                                                    <option value='computing'>Computing</option>
                                                    <option value='science'>Science</option>                                                    
                                                </select>
                                                <select value={department} onChange={(e) => setDepartment(e.target.value)}>     
                                                    <option value="">Department</option>                                               
                                                    <option value='Computer Science'>Computer Science</option>
                                                    <option value='Cyber Security'>Cyber Security</option>
                                                    <option value='AI'>AI</option>
                                                    <option value='Data Science'>Data Science</option>
                                                </select>
                                            </div>

                                            <div className="select-options">
                                                <div className="select-options-col">
                                                    <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                                                        <option value="">Semester</option>
                                                        <option value="1st">1st</option>
                                                        <option value="2nd">2nd</option>
                                                    </select>
                                                </div>
                                                <div className="select-options-col">
                                                    <select value={session} onChange={(e) => setSession(e.target.value)}>
                                                        <option value="">Session</option>
                                                        <option value="2018/2019">2018/2019</option>
                                                        <option value="2019/2020">2019/2020</option>
                                                        <option value="2020/2021">2020/2021</option>
                                                        <option value="2021/2022">2021/2022</option>
                                                        <option value="2022/2023">2022/2023</option>
                                                        <option value="2023/2024">2023/2024</option>
                                                    </select>
                                                </div>
                                            </div>

                                          <div className='options-select'>
                                          <select value={level} onChange={(e) => setLevel(e.target.value)}>
                                                <option value="">Level</option>
                                                <option value="100L">100L</option>
                                                <option value="200L">200L</option>
                                                <option value="300L">300L</option>
                                                <option value="400L">400L</option>
                                                <option value="500L">500L</option>
                                            </select>
                                          </div>

                                            <button type="submit" className="btnn">
                                                Generate
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
    );
};

export default GenerateTT;