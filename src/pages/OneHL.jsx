import React, { useRef } from 'react'; // Import useRef hook
import html2pdf from 'html2pdf.js';   // Import html2pdf
import '../styles/timetable.css';

const TimeTable = () => {
    //Create a ref to attach to the element you want to download
    const timetableRef = useRef();

    const handleDownloadPdf = () =>{
        //options for the PDF generation
        const options = {
            margin: [10, 10, 10, 10], // top, left, bottom, right
            filename: 'ATBU_Computer_Science_Timetable_100L_1st_Semester.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {scale: 2, logging: true, dpi: 192, letterRendering: true},
            jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
        };
        //select element to convert
        const element = timetableRef.current;

        //Use html2pdf to generate and download the pdf
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
                   <h2>faculty of Computing</h2>
                   <h3>Department of <span>computer</span> Science <span>Timetable</span></h3>
               </div> <br />
               <div class="100L">
                        <div class="heading-2">
                            <p>100Level</p>
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
                                <th>CS111</th>
                                <th>CS112</th>
                                <th>MTH111</th>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F004</th>
                                <th>F004</th>
                                <th>F004</th>
                                <th>F004</th>
                            </tr>
                            <tr className='bold'>
                                <th>Tuesday</th>
                                <th>FREE</th>
                                <th>PHY111</th>
                                <th>CHM111</th>
                                <th>MTH112</th>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F004</th>
                                <th>F004</th>
                                <th>F004</th>
                                <th>F004</th>
                            </tr>
                            <tr className='bold'>
                                <th>Wednessday</th>
                                <th>GNS111</th>
                                <th>ST111</th>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F004</th>
                                <th>F004</th>                               
                            </tr>
                            <tr className='bold'>
                                <th>Thursday</th>
                                <th>CS112</th>
                                <th>MTH112</th>
                                <th>MTH113</th>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F004</th>
                                <th>F004</th>
                                <th>F004</th>                              
                            </tr>
                            <tr className='bold'>
                                <th>Friday</th>
                                <th>PHY11</th>
                                <th>MTH113</th>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F004</th>
                                <th>F004</th>                             
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

export default TimeTable
