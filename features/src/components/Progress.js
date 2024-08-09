import React from 'react'
import './Progress.css'
const Progress = () => {
  return (
    <div className='progress left-align'>
        <p className='left-align grey'>Your Growth</p>
        <div className='test-scores'>
            <h3>Test Scores</h3>
            <img src="" alt="" /> 
        </div>

        <div className='skills'>
        <h3>Your Skills</h3>
        <div className="skills-list">
          <span>React</span>
          <span>MongoDB</span>
          <span>Javascript</span>
          <span>NodeJS</span>
          <span>ExpressJS</span>
          <span>Tailwind CSS</span>
        </div>
        </div>
        <h3>Your Skills</h3>
        <div className="current-projects">
        <h3>Current Projects</h3>
        <span>Skillop</span>
        <span>ConnectOp</span>
      </div>
      
    </div>
  )
}

export default Progress
