import React, { useRef } from 'react'; // Import useRef hook
import html2pdf from 'html2pdf.js';   // Import html2pdf
import '../styles/timetable.css';

const TwoHL = () => {

    const timetableRef = useRef();

    const handleDownloadPdf = () => {
        //options for the PDF generation
        const options = {
            margin: [10, 10, 10, 10],
            filename:'ATBU_Computer_Science_Timetable_500L_1st_Semester.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true  },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        const element = timetableRef.current;
        //use html2pdf to generate and download the PDF
        if(element){
            html2pdf().from(element).set(options).save();
        }


    }
        return (
        <div class="container">
        <div class="row">
           <div class="timetable" ref={timetableRef}>
               <div class="heading">
                   <h1>Abubakar Tafawa <span>balewa</span> University <span>Bauchi</span></h1>
                   <h2>faculty of <span>Computing</span></h2>
                   <h3>Department of <span>computer</span> Science <span>Timetable</span></h3>
               </div> <br />
               <div class="200L">
                        <div class="heading-2">
                            <p>200Level</p>
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
                                <th>MTH211</th>
                                <th>CS211</th>
                                <td>FREE</td>
                                <th>CS212</th>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F002</th>
                                <th>F002</th>    
                                <td></td> 
                                <th>F002</th>                           
                            </tr>
                            <tr className='bold'>
                                <th>Tuesday</th>
                                <th>CS213</th>
                                <th>PHY211</th>
                                <th>MTH212</th>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F002</th>
                                <th>F002</th>    
                                <th>F002</th> 
                                <th></th>                           
                            </tr>
                            <tr className='bold'>
                                <th>Wednessday</th>
                                <td>FREE</td>
                                <th>ST211</th>
                                <th>CS211</th>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th></th>
                                <th>F002</th>    
                                <th>F002</th> 
                                <th></th>                           
                            </tr>
                            <tr className='bold'>
                                <th>Thursday</th>
                                <th>MTH211</th>
                                <th>PHY211</th>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F002</th>
                                <th>F002</th>                         
                            </tr>
                            <tr className='bold'>
                                <th>Friday</th>
                                <th>CS213</th>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F002</th>                                                       
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

export default TwoHL
