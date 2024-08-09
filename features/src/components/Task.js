import React from 'react'
import './Task.css'
const Task = () => {
  return (
    <div className="task-list ">
      <p className='left-align grey'>To-do-List</p>
      <h2 className='left-align'>Schedule Your Tasks</h2>
      <h6 className='left-align grey'>Create a to-do list to never miss a deadline!</h6>
      <div className="task-items">
        <div className="task-item left-align"><span>Learn MySQL </span><br/>12:45 PM, 20/05/2024</div>
        <div className="task-item left-align"><span>Skillop - push changes </span><br/>09:35 AM, 20/05/2024</div>
        <div className="task-item left-align"><span>Online Meeting @ 6:30pm tomorrow </span><br/>08:00 AM, 20/05/2024</div>
      </div>
      <p className='blue'>Add or Edit Tasks</p>
    </div>
  )
}

export default Task
