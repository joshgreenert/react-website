import React from 'react';
import ContactConstants from '../constants/ContactConstants';
import ButtonMailto from '../ButtonMailTo';
import '../../App.css';

export default function Contact() {
  return (
  <div>
    <div className="contactHeading">
      <h1>{ContactConstants.CONTACT_HEADING}</h1>
    </div>
    <div className="contactHeading">
      <p>Either write an email to me at <ButtonMailto label="joshgreenert@gmail.com" mailto="mailto:joshgreenert@gmail.com" /> or use the form below</p>
    </div>
    <div className='contactPage'>
      <iframe src={ContactConstants.CONTACT_FORM_URL} 
        width="640" 
        height="750" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">Loading…</iframe>
    </div>
    
    
  </div>
  )
}