import React from 'react'
import './Contact.css'
import Titles from '../../components/Titles/Titles'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_h6rzrze", "template_jfgc93m", form.current, 'gLloXFr_UMLjuZ0CN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
        <Titles title={'CONTACT'} />
        <form  ref={form} onSubmit={sendEmail} className='contact-form'>
        <input type="text" name="from_name" placeholder='Name' className="input"/>
        <input type="email" name="user_email" placeholder='ENTER YOUR EMAIL'className="input" />
        <input type="number" name='phone' placeholder='PHONE NUMBER' className="input"/>
        <textarea  name="message" id="" cols="30" rows="10" placeholder='Your Message'className="input">
             
        </textarea>

        <button  type="submit" value="Send">SUBMIT</button>


        </form>

      
    </div>
  )
}

export default Contact
