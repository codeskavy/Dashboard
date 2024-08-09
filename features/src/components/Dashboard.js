import React from 'react'
import Progress from './Progress'
import Notes from './Notes'
import Task from './Task'
import Profile from './Profile'
import Test from './Test'
import './Dashboard.css' 
const Dashboard = () => {
  return (
    <div className='dashboard-main'>
        
        <div className='header'>
        
        <h1>Dashboard Overview</h1><br/>
        <button className='dashboard-edit'>Edit Dashboard</button>
        </div>
        <p className='left-align f'>This dashboard data will be seen by the senior member of the Skillop society to analyze your process.</p>

        
        <div className='dashboard-content'> 
            <div className='grid-1'>
                <Progress/>
                <Test/>
                </div> 
            <div className='grid-2'>
            <Notes/>
            <Task/>
            </div>
            <div className='grid-3'>
                <Profile/>
            </div>
       
        </div>

      
    </div>
  )
}

export default Dashboard
