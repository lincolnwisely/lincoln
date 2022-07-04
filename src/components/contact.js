import React from 'react';
import { useState, setState } from "react";
import { send } from 'emailjs-com';

import * as styles from './contact.css.ts';
const ContactForm = () => {
  // Initiate forms
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

const [isSubmited, setIsSubmited] = useState(false);


const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_kc2asid',
      'template_uuxlcyn',
      toSend,
      'E5iEwRvVHBMDGsqS4'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmited(true);
          
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const thanks = () => {

  }
  return (
isSubmited ? (
  <div className={styles.success}>Done! thank you.</div>
) : (


<form className={styles.form} onSubmit={onSubmit}  id="contact-form" >
  <input
    className={styles.input}
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    className={styles.input}
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    className={styles.input}
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <div>
   <input 
  type="checkbox" required name="consent" readOnly checked />
    <label className={styles.checkboxLabel} htmlFor="consent">I understand that I may never hear back</label></div>

    <button className={styles.button } type="submit">Submit</button>
</form> 
  )
  )
}

export default ContactForm