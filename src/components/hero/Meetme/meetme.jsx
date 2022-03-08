import React from 'react'
import "./meetme.css"

const MeetMe = (props) => {
   
  return (
    <div className='meetbody'>
        <div className="opening">
            <h2>Let meetMe = {"{"}</h2>
        </div>
        <div className="body">
            <div className="name">
                <h2>name: <span> "Segun",</span></h2>
            </div>
            <div className="role">
                <h2>Role: </h2>
                <div className="roletext">
                    <h2>"Frontend Dev"</h2>
                    <h2>"UI/UX Designer"</h2>
                    <h2>"Graphics Designer"</h2>
                </div>
            </div>
        </div>
        <div className="close">
            <h2>{'}'}</h2>
        </div>
    </div>
  )
}

export default MeetMe