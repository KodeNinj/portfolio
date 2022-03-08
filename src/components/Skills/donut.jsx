import React from 'react'
import HeaderTxt from '../AboutMe.jsx/HeaderTxt'
import "./skills.css"

function HeaderDesign (props){
    const {linecolor, innerText} = props;
    return (
    <div className="HeaderDesign">
        <div className="skill_header">
            <div className="line" style={{backgroundColor: linecolor}}></div>
            <div><HeaderTxt title={innerText} Textcolor={linecolor}/></div>
            <div className="line" style={{backgroundColor: linecolor}}></div>
         </div>
    </div>
   )
}
export default HeaderDesign