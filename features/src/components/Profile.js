import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div className='profile'>
      <img src="features\src\components\Frame 55550.png" alt="Profile" className="profile-picture" />
      <div className='profile-box'>
        <div className='pb-1'>
          <h2>Flint Afflick</h2>
          <p className='grey id'>Skillop UID: 2K23/WEBD/0410</p>    
        </div>
    <div className='pb-2'>
      <p className='pb-2'><span>Designation: </span>Member</p>
      <p><span>Department:</span> Web Development</p>
      <p><span>College:</span> Delhi Technological University</p>
      <p><span>Phone:</span> 8595867129</p>
      <p><span>Email: </span>flintafflick@gmail.com</p>
    </div>
      
      <button className="home-page-button">Skillop Home Page</button>
      </div>
      
    </div>
  )
}

export default Profile
