import React from 'react'
import HeaderTxt from './HeaderTxt'
import img from "./img/img.jpg"
import "./mainAbout.css"

const MainAbout = () => {
  return (
    <div className='aboutme-container'>
      <div className='left'>
        <HeaderTxt title="About Me" Textcolor="#453f78"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptas aut obcaecati aspernatur molestias corporis eos tempora harum, sapiente id fuga porro! Ex culpa, aliquid fugiat incidunt blanditiis sunt? Quos eum cupiditate magnam tempore minima aperiam voluptatum a corrupti, officiis, quisquam corporis. Fugiat ipsum necessitatibus possimus odio, tenetur soluta dolore!
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Delectus tenetur sequi non. Eum, quibusdam sit.</li>
            <li>Dolorem praesentium quasi, exercitationem dolores similique doloribus?</li>
            <li>Tempore commodi adipisci eligendi alias laudantium qui.</li>
            <li>Harum expedita enim ut veniam autem eveniet?</li>
          </ul>
        </p>
        <a href="https://drive.google.com/file/d/1sxz6qAafEj9k9lCjXoINrm3ZLj-Idz8v/view?usp=sharing" className='downloadCv'>Download CV <i className='fa fa-download'/></a>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
    </div>
  )
}

export default MainAbout