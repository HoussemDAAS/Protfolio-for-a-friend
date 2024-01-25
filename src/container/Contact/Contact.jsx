import React from 'react'
import './Contact.css'
import Titles from '../../components/Titles/Titles'
const Contact = () => {
  return (
    <div className='contact'>
        <Titles title={'CONTACT'} />
        <form action="submit" className='contact-form'>
        <input type="text" placeholder='Name' class="input"/>
        <input type="email" placeholder='ENTER YOUR EMAIL'class="input" />
        <input type="number" placeholder='PHONE NUMBER' class="input"/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'class="input">
             
        </textarea>

        <button type='submit'>SUBMIT</button>


        </form>

      
    </div>
  )
}

export default Contact
