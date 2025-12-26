import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {  // ← UPPERCASE P!
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/">Go to Home</Link>
      <br />
      <button onClick={() => navigate('/')}>Navigate to Home</button>
    </div>
  )
}