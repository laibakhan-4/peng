import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/"><li>Home</li></Link>
      <Link to="/registration"><li>Registration</li></Link>
 
    </div>
  )
}

export default NavBar
