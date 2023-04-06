import React from 'react';
import ContactConstants from '../constants/ContactConstants';
import ButtonMailto from '../ButtonMailTo';
import '../../App.css';

function Contact() {
  return (
    <div>
      <div className="contactHeading">
        <h1>{ContactConstants.CONTACT_HEADING}</h1>
      </div>
      <div className="contactHeading">
        <p>Either write an email to me at <ButtonMailto label="joshgreenert@gmail.com" mailto="mailto:joshgreenert@gmail.com" /> or use the form below</p>
      </div>
      <div className='contactPage'>
        <iframe 
          src={ContactConstants.CONTACT_FORM_URL} 
          title="Contact Form"
          width="640" 
          height="750" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Contact;