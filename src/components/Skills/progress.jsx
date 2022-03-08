import React from 'react'
import "./skills.css"
const Progress = (props) => {
    const {myvalue, thetitle} = props;
  return (
    <div className='progressDIV'>
        <label htmlFor="file">{thetitle}</label>
        <progress className='file' value={myvalue} max='100'></progress>
    </div>
  )
}

export default Progress