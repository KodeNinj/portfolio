import React from 'react'
import Logo from './logo'
import Navlinks from './nav'
import './nav.css'


const NavHeader = () => {
  return (
    <div className='Navheader'>
        <Logo/>
        <Navlinks/>
    </div>
  )
}

export default NavHeader