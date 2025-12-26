import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {  // ← UPPERCASE H!
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link>
      <br />
      <button onClick={() => navigate('/profile')}>Navigate to Profile</button>
    </div>
  )
}
