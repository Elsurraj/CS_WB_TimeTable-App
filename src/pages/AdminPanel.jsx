import React from 'react'
import {Link } from 'react-router-dom'
import '../styles/timetable.css'

const AdminPanel = () => {
    return (
        <div className="container">
        <div className="row">
        <div className="wrapper admin-list">
                   <div className="admin-col">
                       <h3><Link to='#'>Profile</Link></h3>
                   </div>                    
                </div>
                <div className="wrapper admin-list">
                   <div className="admin-col">
                       <h3><Link to='#'>Create schedule</Link></h3>
                   </div>                    
                </div>
                <div className="wrapper admin-list">
                   <div className="admin-col">
                       <h3><Link to='#'>Faculties</Link></h3>
                   </div>                    
                </div>
                <div className="wrapper admin-list">
                   <div className="admin-col">
                       <h3><Link to='#'>Manage students</Link></h3>
                   </div>                    
                </div>
                  </div>
                </div>
    )
}

export default AdminPanel
