import React from 'react'
import "./project.css"
const EachProject = (props) => {
    const {Title, Platform, Tools, Prototype, Description, ImageUrl, BtnName} = props;
  return (
    <div className="main_project" >
        <div className="proj_left">
        <img src={ImageUrl} alt="" />
        </div>
        <div className="proj_right">
        <div className="title">
            <h3>Title:</h3>
            <h4>{Title}</h4>
        </div>

        <div className="platform">
            <h3>Platform</h3>
            <h4>{Platform}</h4>
        </div>
        <div className="Tools">
            <h3>Tools:</h3>
            <h4>{Tools}</h4>
        </div>
       
        <div className="Description">
            <p>Description: <span>{Description}</span></p>
        </div>
        <div className="Prototype">
            <a href={Prototype}><button>{BtnName}</button></a>
        </div>
    </div>
</div>
  )
}

export default EachProject