'use client';

import React, { FormEvent, useState, useEffect } from 'react'
import Image from "next/image";
import Check_Icon from '@/public/assets/svgs/check-icon.svg';
import Viva_Icon from '@/public/assets/svgs/logo_icon-white.svg';

const ContactForm = () => {

  // FOR CONTACT FORM
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [details, setDetails] = useState('');
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          first_name, last_name, category, email, phone, zip, details,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });

      if (res.ok) {
        // Clear form fields after successful submission
        setFirstName('');
        setLastName('');
        setCategory('');
        setEmail('');
        setPhone('');
        setZip('');
        setDetails('');
        setShowSuccessNotification(true); // Show success notification
        console.log('Form submitted successfully');
      } else {
        console.error('Failed to submit form');
      }
    } catch(err:any) {
      console.error('Error:', err);
    }
  }

  // Effect to hide success notification after 2 seconds
  useEffect(() => {
    if (showSuccessNotification) {
      const timer = setTimeout(() => {
        setShowSuccessNotification(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessNotification]);

  return (

    <>
      <form className="contacts__container__formContainer_form" onSubmit={onSubmit}>

        <div className="contacts__container__formContainer_form_group">
          <label htmlFor='first-name' className="contacts__container__formContainer_form_group-label">First Name<span className="required-star">*</span></label>
          <input 
            value={first_name} 
            onChange={(e) => setFirstName(e.target.value)}
            type="text" 
            className="contacts__container__formContainer_form_group-input" id="first-name" name='first-name' placeholder='' required
          />
        </div>

        <div className="contacts__container__formContainer_form_group">
          <label htmlFor='last-name' className="contacts__container__formContainer_form_group-label">Last Name<span className="required-star">*</span></label>
          <input 
            value={last_name} 
            onChange={(e) => setLastName(e.target.value)}
            type="text" 
            className="contacts__container__formContainer_form_group-input" id="last-name" name='last-name' placeholder="" required 
          />
        </div>

        <div className="contacts__container__formContainer_form_group">
          <label htmlFor='category' className="contacts__container__formContainer_form_group-label">Category<span className="required-star">*</span></label>
          <select 
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="contacts__container__formContainer_form_group-input contacts__container__formContainer_form_group-input-select"
            id="category"
            name="category"
            required
          >
            <option 
              className='contacts__container__formContainer_form_group-input-select--option' value="" disabled selected hidden>
              Select
            </option>
            <option className='contacts__container__formContainer_form_group-input-select--option'>
              Allergist
            </option>
            <option className='contacts__container__formContainer_form_group-input-select--option' value="Clinic/Hospital">Clinic/Hospital</option>
            <option className='contacts__container__formContainer_form_group-input-select--option' value="Patient">Patient</option>
            <option className='contacts__container__formContainer_form_group-input-select--option' value="Pharmacy">Pharmacy</option>
          </select>
        </div>

        <div className="contacts__container__formContainer_form_group">
          <label htmlFor='email' className="contacts__container__formContainer_form_group-label">Email<span className="required-star">*</span></label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            type="text" 
            className="contacts__container__formContainer_form_group-input" id="email" name='email' placeholder="" required 
          />
        </div>

        <div className="contacts__container__formContainer_form_group">
          <label htmlFor='phone-number' className="contacts__container__formContainer_form_group-label">Phone<span className="required-star">*</span></label>
          <input 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            type="text" 
            className="contacts__container__formContainer_form_group-input" id="phone-number" name='phone-number' placeholder="" required pattern="[0-9]*" 
          />
        </div>

        <div className="contacts__container__formContainer_form_group">
          <label htmlFor='postal-code' className="contacts__container__formContainer_form_group-label">Postal Code</label>
          <input 
            value={zip} 
            onChange={(e) => setZip(e.target.value)}
            type="text" 
            className="contacts__container__formContainer_form_group-input" id="postal-code" name='postal-code' placeholder="" 
          />
        </div>

        <div className="contacts__container__formContainer_form_group contacts__container__formContainer_form_group-last-group">
          <label htmlFor='details' className="contacts__container__formContainer_form_group-label">Details<span className="required-star">*</span></label>
          <textarea 
            value={details} 
            onChange={(e) => setDetails(e.target.value)}
            className="contacts__container__formContainer_form_group-input" id="details" name="details" placeholder="" rows={6} style={{ resize: "none" }} required 
          ></textarea>
        </div>
        <button className='btn-primary contacts__container__formContainer_form_button' type='submit'>Submit</button>
      </form>





      {/* Success notification */}
      {showSuccessNotification && (
        <div className="success-notification-container">
          <div className="success-notification-container__contents">
            <Image src={Viva_Icon} alt="Verified Icon" unoptimized={true} className="success-notification-container__contents_icon-viva" />
            <Image src={Check_Icon} alt="Verified Icon" unoptimized={true} className="success-notification-container__contents_icon-check" />
            <p className='success-notification-container__contents_text'>Success</p>
          </div>
        </div>
      )}

      
    </>
  )
}

export default ContactForm