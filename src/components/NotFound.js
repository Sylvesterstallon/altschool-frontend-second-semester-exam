import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 PAGE NOT FOUND</h1>
      <p>Go back to 
        <Link to="/">Home</Link>
      </p>
    </div>
    
  
  )
}