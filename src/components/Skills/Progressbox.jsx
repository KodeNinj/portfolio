import React from 'react'
import Progress from './progress'
import "./skills.css"
const ProgressBoxs = (props) => {
    const {heading, heading2} = props
  return (
    <div>
        <div className="prog_container">
          <div className="left">
            <h3>{heading}</h3>
            <Progress thetitle="HTML" myvalue="90"/>
            <Progress thetitle="CSS" myvalue="90"/>
            <Progress thetitle="Vanilla JS" myvalue="70"/>
            <Progress thetitle="REACT" myvalue="60"/>
            <Progress thetitle="SQL" myvalue="50"/>
            <Progress thetitle="GIT BASH" myvalue="40"/>
          </div>
          <div className="right">
            <h3>{heading2}</h3>
            <Progress thetitle="Figma" myvalue="90"/>
            <Progress thetitle="GitHub" myvalue="65"/>
            <Progress thetitle="VsCode" myvalue="75"/>
            <Progress thetitle="Photoshop" myvalue="60"/>
            <Progress thetitle="illustrator" myvalue="50"/>
          </div>
        </div>
    </div>
  )
}

export default ProgressBoxs