import React from 'react'
import Logos from '../img/logo.png'
import './logo.css';

const Logo = () => {
  return (
    <img 
    className='logo'
    src= {Logos} 
    alt="logo" />
  )
}

export default Logo