import React from 'react'
import HeaderDesign from './donut'
import "./skills.css"
import ProgressBoxs from './Progressbox'
const MainSkills = () => {
  return (
    <div className='skill_container'>
        <HeaderDesign linecolor="#00f6ed" innerText="Skills"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique vitae incidunt eos temporibus ex totam sint deserunt quis laboriosam pariatur consequatur et sit suscipit harum tempore repellendus cumque, possimus nisi doloribus illum alias assumenda unde? Dignissimos quo cum ab et harum, doloremque, enim deserunt eligendi delectus accusamus, id nesciunt sapiente eius sed! Mollitia corporis ratione dicta vel facilis tempore veniam.</p>
        <ProgressBoxs heading="Language & Proficiency" heading2="Tools & Proficiency"/>
    </div>
  )
}

export default MainSkills