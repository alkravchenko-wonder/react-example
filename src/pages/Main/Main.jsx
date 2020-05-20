import React from 'react';
import './main.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <Link to='/todos'>
      <h1>Go to todos Page</h1>
    </Link>
  )
}

export default Main;