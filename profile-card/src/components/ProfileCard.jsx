import React from 'react'
import "./profilecard.css"


const ProfileCard = ({profilePic, name,age, bio }) => {
  return (
//name
//age
//profile picture
//bio
<div className='profilecard-container'>

    <div className='profile-card'>
    <img src={profilePic}style={{width:"100px", height:"100px", borderRadius:"50%"}}  alt='profile picture'/>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <p>{bio}</p>
     
    </div>
</div>
  )
}

export default ProfileCard