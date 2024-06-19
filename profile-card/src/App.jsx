import React from 'react';

// import './src/components/Profilecard.css';

import ProfileCard from './components/ProfileCard.jsx'
function App() {
  const profiles = [
    {
     
      name: 'John Doe',
      age: 25,
      profilePic:"https://i.pravatar.cc/150?img=13",
      bio: 'I am a software engineer',
   
      

    },
    {
      name: 'Jane Doe',
      age: 22,
      profilePic:"https://i.pravatar.cc/150?img=19",
      bio: 'I am a software engineer',
    

    },
    {
      name: 'James Doe',
      age: 30,
      profilePic:"https://i.pravatar.cc/150?img=17",
      bio: 'I am a software engineer',
     

    }
  ]
  
  return (
    <div>
    {profiles.map((profile, index) => (
      <ProfileCard key={index} {...profile} />
    ))
    }
  
  </div>
  )
}

export default App