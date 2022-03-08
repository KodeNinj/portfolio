import React from 'react'
import Btn from '../btn'
import Lang from '../lang'
import Socials from '../socials'
import Wave from '../wave'
import MeetMe from './meetme'
import "./meetme.css"

const HeroBody = () => {
  return (
    <div>
      <div className='herobody'>
      <Lang/>
      <div>
        <MeetMe/>
        <Btn/>
      </div>
    </div>
    <Socials/>
    <Wave/>
    </div>
  )
}

export default HeroBody