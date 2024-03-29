import React from 'react';
import { useState } from "react";
import * as styles from './contact.css.ts';
const ContactForm = () => {
  // Initiate forms
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (event) => {
   setIsSubmitted(!isSubmitted)
  };
  
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (

  <form className={styles.form} method="POST" action="https://getform.io/f/ceeb9899-b9c6-474c-ac4d-6baeefe618a7" id="contact-form" onSubmit={handleSubmit} >
  <input
    className={styles.input}
    type='text'
    required
    name='from_name'
    placeholder='Your Name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    className={styles.input}
    type='text'
    required
    name='message'
    placeholder='Your Message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    className={styles.input}
    type='text'
    name='reply_to'
    placeholder='Your Email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <div>
   <input 
  type="checkbox" required name="anxietyClause" />
        <label className={styles.checkboxLabel} htmlFor="anxietyClause">I understand that I may never hear back</label></div>

    <button className={styles.button} type="submit">Submit</button>
      {isSubmitted && (
        <div className={styles.success}>drumroll</div>
        )}
      
       
            
</form> 
  )
  
}

export default ContactForm