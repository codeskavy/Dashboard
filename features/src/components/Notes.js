import React from 'react'
import './Notes.css'
const Notes = () => {
  return (
    <div className='notes left-align'>
    <p className='left-align grey'>Notes</p>
     <h2>Add your Ideas!</h2>
      <p className='grey'>Take notes of your ideas and thoughts.</p>
      <div className="note-items ">
        <div className="note-item"><span>Skillop Progress</span><br/>Lorem ipsum dolor sit amet...</div>
        <div className="note-item"><span>Skillop Progress</span><br/> Lorem ipsum dolor sit amet...</div>
        <div className="note-item"><span>Skillop Progress</span><br/>Lorem ipsum dolor sit amet...</div>
      </div>
      <p className='blue'>Add or Edit Notes</p>
    </div>
  )
}

export default Notes
