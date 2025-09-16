import React from 'react'
import { Col} from 'reactstrap'
import '../styles/timetable.css'

const fourHL = () => {
    return (
        <div class="container">
        <div class="row">
           <div class="timetable">
               <div class="heading">
                   <h1>Abubakar Tafawa <span>balewa</span> University <span>Bauchi</span></h1>
                   <h2>faculty of Computing</h2>
                   <h3>Department of <span>computer</span> Science <span>Timetable</span></h3>
               </div> <br />
             <div className=''>
                 {alert('400L level students are on IT')}
             <Col className="coll-1 header-color-style">
                <h1>400 Level students are on 1 year IT(Internship), so they dont have any timetable.</h1>               
            </Col>
             </div>
                    </div>
                  </div>
                </div>
    )
}

export default fourHL
