import React, { useRef } from 'react'; // Import useRef hook
import html2pdf from 'html2pdf.js';   // Import html2pdf
import '../styles/timetable.css';
const ThreeHL = () => {

    // Create a ref to attach to the element you want to download
        const timetableRef = useRef();
    
        const handleDownloadPdf = () => {
            // Options for the PDF generation
            const options = {
                margin: [10, 10, 10, 10], // top, left, bottom, right
                filename: 'ATBU_Computer_Science_Timetable_500L_1st_Semester.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
    
            // Select the element to convert
            const element = timetableRef.current;
    
            // Use html2pdf to generate and download the PDF
            if (element) {
                html2pdf().from(element).set(options).save();
            }
        };

    return (
        <div class="container">
        <div class="row">
           <div class="timetable" ref={timetableRef}>
               <div class="heading">
                   <h1>Abubakar Tafawa <span>balewa</span> University <span>Bauchi</span></h1>
                   <h2>faculty of <span>Computing</span></h2>
                   <h3>Department of <span>computer</span> Science <span>Timetable</span></h3>
               </div> <br />
               <div class="300L">
                        <div class="heading-2">
                            <p>300Level</p>
                            <p>Fisrt Semester</p>
                        </div>
                        <table>
                            <tr className='bold bg-color'>
                                <th>Day</th>
                                <th>8-10</th>
                                <th>10-12</th>
                                <th>2-4</th>
                                <th>4-6</th>
                            </tr>
                            <tr className='bold'>
                                <th>Monday</th>
                                <th>CS311</th>
                                <th>CS312</th>
                                <th>CS313</th>
                                <th>CS314</th>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F003</th>
                                <th>F003</th>    
                                <td>F003</td> 
                                <th>F003</th>  
                            </tr>
                            <tr className='bold'>
                                <th>Tuesday</th>
                                <th>MTH311</th>
                                <th>MTH312</th>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F003</th>
                                <th>F003</th> 
                            </tr>
                            <tr className='bold'>
                                <th>Wednessday</th>
                                <td>FREE</td>
                                <th>CS315</th>
                                <th>311</th>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th></th>
                                <th>F003</th>    
                                <td>F003</td> 
                                <th></th>  
                            </tr>
                            <tr className='bold'>
                                <th>Thursday</th>
                                <th>MTH311</th>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F003</th>                                  
                            </tr>
                            <tr className='bold'>
                                <th>Friday</th>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                        </table>
                   </div>
                    </div>
                  </div>
                {/* Download Button */}
                <div className="download-button-container">
                    <button onClick={handleDownloadPdf} className="download-btn">
                        Download Timetable (PDF)
                    </button>
                </div>
                </div>
    )
}

export default ThreeHL
