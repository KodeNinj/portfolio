
import React from 'react'
import HeaderDesign from '../Skills/donut'
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact_container'>
         <HeaderDesign linecolor="#453f78" innerText="Contact"/>
         <p>Lorem ipsum, dolor sit amet consec tetur adipisi cing elit. Nam amet ipsum, magnam volup tatum quaerat possimus, corporis repellat invento re aperiam tempora quos itaque odio? Sapiente quibusdam maxime quis, quam blanditiis quo esse? Fuga placeat quo ducimus cumque, reiciendis odit modi magnam.</p>
         <div className="flexme">
         <form action="" className='form'>
             <h4>Let's Work together</h4>
             <input type="text" placeholder='Name' required />
             <input type="email" placeholder='Email' required/>
             <input type="tel" name="Phone"placeholder='Phone' id="phone" />
            <div className="radiocontainer">
                <div className='emp'>
                    <input type="radio" name="radio" id="employer" />
                    <label htmlFor="employer">Employer</label>
                </div>
                <div>
                    <input type="radio" name="radio" id="gigs" />
                    <label htmlFor="gigs">Gigs Enquiry</label>
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