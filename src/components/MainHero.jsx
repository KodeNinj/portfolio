import React from 'react'
import HeroBody from './hero/Meetme/HeroBody'
import NavHeader from './hero/Navigations/NavHeader'
import './index.css'

const MainHero = () => {
  return (
    <div className='HeroSection'>
        <NavHeader/>
        <HeroBody/>
    </div>
  )
}

export default MainHero