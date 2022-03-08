import React from 'react'
import "./mainAbout.css"
const HeaderTxt = (props) => {
  const {title, Textcolor} = props
  return (
    <h3 className='headings' style={{color: Textcolor}}>{title}</h3>
  )
}

export default HeaderTxt