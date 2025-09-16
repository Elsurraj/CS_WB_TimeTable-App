import React, { useRef } from 'react'; // Import useRef hook
import html2pdf from 'html2pdf.js';   // Import html2pdf
import '../styles/timetable.css';

const TimeTable = () => {
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
        <div className="container">
            <div className="row">
                {/* Assign the ref to the element containing your timetable content */}
                <div className="timetable" ref={timetableRef}>
                    <div className="heading">
                        <h1>Abubakar <span>Tafawa</span> University <span>Bauchi</span></h1>
                        <h2>faculty of <span>Computing</span> </h2> 
                        <h3>Department of <span>computer</span> Science <span>Timetable</span></h3>
                    </div> <br />
                    <div className="500L">
                        <div className="heading-2">
                            <p>500Level</p>
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
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Tuesday</th>
                                <th>EEE502</th>
                                <th>EEE513</th>
                                <th>EEE417</th>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F001</th>
                                <th>F001</th>
                                <th>F001</th>
                                <th></th>
                            </tr>
                            <tr className='bold'>
                                <th>Wednessday</th>
                                <th>CS511</th>
                                <th>CS512</th>
                                <th>CS513</th>
                                <th>CS514</th>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F03</th>
                                <th>F03</th>
                                <th>F03</th>
                                <th>F03</th>
                            </tr>
                            <tr className='bold'>
                                <th>Thursday</th>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Friday</th>
                                <th>CS515</th>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr className='bold'>
                                <th>Venue</th>
                                <th>F03</th>
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
    );
}

export default TimeTable;
