import React, {useState} from 'react'
import HeaderDesign from '../Skills/donut'
import EachProject from './EachProject'
import "./project.css"

const Project = () => {
    const [toggleState, setToggleState] = useState(1)

    function toggleTab(index){
        setToggleState(index)
    }
  return (
    <div className='projectbody'>
        <HeaderDesign linecolor="#453f78" innerText="Projects"/>
        <div className="project_container">
            <div className="switch">
                <div className={toggleState === 1 ? "frontend active" : "frontend inactive"} onClick={()=>toggleTab(1)} ><h3>Frontend Development Portfolio</h3></div>
                <div className= {toggleState === 2 ? "uiux active" : "uiux inactive"} onClick={()=>toggleTab(2)}><h3>UI/UX Portfolio</h3></div>
            </div>
            {/* END OF THE SWITCH */}
            <div className={toggleState === 1 ? "frontendItems showme" : "frontend hideme"}>
            <EachProject 
           Title="Primus Hospital Website"
           Platform="Web"
           Tools="HTML, CSS, REACTJS"
           Prototype="https://bit.ly/Srjkste245de"
           Description="loremdsjnvsljkfnlf fdnfjsnasja fje je fjefndendflef ejf ef ef jfl fw fjf j wfj wfjw efj fjwe fjf e fwje fewnfkne ee"
           BtnName="View Project"
           ImageUrl="https://img.hospital/wp-content/uploads/2020/03/ABOUT-US1-2.png"
           
           />
           <EachProject 
           Title="MiBuddy App"
           Platform="IOS App"
           Tools="HTML, CSS, REACTJS, React Native"
           Prototype="https://bit.ly/Srjkste245de"
           Description="loremdsjnvsljkfnlf fdnfjsnasja fje je fjefndendflef ejf ef ef jfl fw fjf j wfj wfjw efj fjwe fjf e fwje fewnfkne ee"
           BtnName="View Project"
           ImageUrl="https://images.newscientist.com/wp-content/uploads/2021/04/21160754/21-april_pepper-the-robot.jpg"
           />
            </div>
            <div className={toggleState === 2 ? "uiuxItems showme" : "uiuxItems hideme"}>
            <EachProject 
           Title="Mirnoo App"
           Platform="IOS App"
           Tools="FIGMA & Protopie"
           Prototype="https://bit.ly/Srjkste245de"
           Description="loremdsjnvsljkfnlf fdnfjsnasja fje je fjefndendflef ejf ef ef jfl fw fjf j wfj wfjw efj fjwe fjf e fwje fewnfkne ee"
           BtnName="View Prototype"
           ImageUrl="https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815613b10.jpg?compress=1&resize=400x300"
           />
            <EachProject 
           Title="Spendee App"
           Platform="IOS App"
           Tools="FIGMA & Protopie"
           Prototype="https://bit.ly/Srjkste245de"
           Description="loremdsjnvsljkfnlf fdnfjsnasja fje je fjefndendflef ejf ef ef jfl fw fjf j wfj wfjw efj fjwe fjf e fwje fewnfkne ee"
           BtnName="View Prototype"
           ImageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cdbefb104928081.5f6d97a055414.jpg"
           />
            </div>
          
        </div>
    </div>
  )
}

export default Project