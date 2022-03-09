
import React from 'react'
import HeaderDesign from '../Skills/donut'
import "./contact.css"
import Map from "./map.jpeg"

const Contact = () => {
  return (
    <div className='contact_container'>
         <HeaderDesign linecolor="#453f78" innerText="Contact"/>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam amet ipsum, magnam voluptatum quaerat possimus, corporis repellat inventore aperiam tempora quos itaque odio? Sapiente quibusdam maxime quis, quam blanditiis quo esse? Fuga placeat quo ducimus cumque, reiciendis odit modi magnam.</p>
         <div className="flexme">
         <form action="" className='form'>
             <h4>Let's Work together</h4>
             <input type="text" placeholder='Name' required />
             <input type="email" placeholder='Email' required/>
             <input type="tel" name="Phone"placeholder='Phone' id="phone" />
            <div className="radiocontainer">
                <div className='emp'>
                    <input type="radio" name="radio" id="employer" />
                    <label for="employer">Employer</label>
                </div>
                <div>
                    <input type="radio" name="radio" id="gigs" />
                    <label for="gigs">Gigs Enquiry</label>
                </div>
            </div>
            <input type="text" name="Message" id="message" placeholder='Message' />
             <input type="submit" value="Submit" className='submit'/>

         </form>
         <div className="right">
             <div className="img"></div>
         </div>
         </div>
    </div>
  )
}

export default Contact