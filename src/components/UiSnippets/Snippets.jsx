import React from 'react'
import HeaderDesign from '../Skills/donut'
import "./snippets.css"

const Snippets = () => {
  return (
    <div className='snippet_container'>
        <HeaderDesign linecolor="#00f6ed" innerText="UI Snippets"/>
        <div className="flexMe">
            <div className="left"></div>
            <div className="right">
                <div className="up">
                    <div className="upleft"></div>
                    <div className="upright"></div>
                </div>
                <div className="down"></div>
            </div>
            <div className="lastline"></div>
        </div>
        <h4>View More {'>>>'} </h4>
    </div>
  )
}

export default Snippets