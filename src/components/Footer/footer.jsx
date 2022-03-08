import React from 'react'
import "./footer.css"
import logo from "./logo.png"
const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <p>All right reserved</p>
        <div className="social">
        <i className="fa fa-linkedin"/>
        <i className="fa fa-behance"/>
        <i className="fa fa-github"/>
        <i className="fa fa-download"/>
        </div>

    </div>
  )
}

export default Footer