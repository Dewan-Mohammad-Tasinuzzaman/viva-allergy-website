'use client';

import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";

const ContactsPage = () => {

  // Image URL
  const Contact_Image_URL = "/assets/images/contactus-img.jpg";
  const Location_Image_URL = "/assets/images/location-img.png";

  return (
    <main className='pos-relative'>
      
      <div className="page-margins-big contacts">
        <div className="contacts__container">

          <div className="contacts__container__formContainer">
            <h1 className="header-primary contacts__container__formContainer_header">Contact Us</h1>
            <p className="text-primary contacts__container__formContainer_text">Contact our customer service team. Fill out the form below and a customer service specialist will contact you.</p>
            <p className="text-primary contacts__container__formContainer_note">Required fields are indicated with an <span className="required-star">*</span></p>
            <form className="contacts__container__formContainer_form">
              <div className="contacts__container__formContainer_form_group">
                <label htmlFor='first-name' className="contacts__container__formContainer_form_group-label">First Name<span className="required-star">*</span></label>
                <input type="text" className="contacts__container__formContainer_form_group-input" id="first-name" name='first-name' placeholder="" required />
              </div>
              <div className="contacts__container__formContainer_form_group">
                <label htmlFor='last-name' className="contacts__container__formContainer_form_group-label">Last Name<span className="required-star">*</span></label>
                <input type="text" className="contacts__container__formContainer_form_group-input" id="last-name" name='last-name' placeholder="" required />
              </div>
              <div className="contacts__container__formContainer_form_group">
                <label htmlFor='category' className="contacts__container__formContainer_form_group-label">Category<span className="required-star">*</span></label>
                <select className="contacts__container__formContainer_form_group-input contacts__container__formContainer_form_group-input-select" id="category" name="category" required>
                  <option className='contacts__container__formContainer_form_group-input-select--option' value="" disabled selected hidden>Select</option>
                  <option className='contacts__container__formContainer_form_group-input-select--option' value="Allergist">Allergist</option>
                  <option className='contacts__container__formContainer_form_group-input-select--option' value="Clinic/Hospital">Clinic/Hospital</option>
                  <option className='contacts__container__formContainer_form_group-input-select--option' value="Patient">Patient</option>
                  <option className='contacts__container__formContainer_form_group-input-select--option' value="Pharmacy">Pharmacy</option>
                </select>
              </div>
              <div className="contacts__container__formContainer_form_group">
                <label htmlFor='email' className="contacts__container__formContainer_form_group-label">Email<span className="required-star">*</span></label>
                <input type="email" className="contacts__container__formContainer_form_group-input" id="email" name='email' placeholder="" required />
              </div>
              <div className="contacts__container__formContainer_form_group">
                <label htmlFor='phone-number' className="contacts__container__formContainer_form_group-label">Phone<span className="required-star">*</span></label>
                <input type="text" className="contacts__container__formContainer_form_group-input" id="phone-number" name='phone-number' placeholder="" required pattern="[0-9]*" />
              </div>
              <div className="contacts__container__formContainer_form_group">
                <label htmlFor='postal-code' className="contacts__container__formContainer_form_group-label">Postal Code</label>
                <input type="text" className="contacts__container__formContainer_form_group-input" id="postal-code" name='postal-code' placeholder="" />
              </div>
              <div className="contacts__container__formContainer_form_group contacts__container__formContainer_form_group-last-group">
                <label htmlFor='details' className="contacts__container__formContainer_form_group-label">Details<span className="required-star">*</span></label>
                <textarea className="contacts__container__formContainer_form_group-input" id="details" name="details" placeholder="" rows={6} style={{ resize: "none" }}></textarea>
              </div>
              <button className='btn-primary contacts__container__formContainer_form_button' type='submit'>Submit</button>
            </form>
          </div>

          <div className="contacts__container__contacts">
            <ParallaxBanner
              layers={[
                {
                  image: Contact_Image_URL,
                  speed: -40,
                  translateY: [0, 20],
                  opacity: [1, 1],
                  scale: [1.05, 1, 'easeOutCubic'],
                  shouldAlwaysCompleteAnimation: true,
                },
              ]}
              className="w-full aspect-1-1 contacts__container__contacts_image"
            />
            <div className="contacts__container__contacts_infobox">
              <h2 className="contacts__container__contacts_infobox-header">Customer Service</h2>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">Phone:</span> 1.800.268.1326</p>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">Fax:</span> 1.888.331.4283</p>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">Email:</span> poallergie@omegalabs.ca</p>
            </div>
          </div>

          <div className="contacts__container__location">
            <ParallaxBanner
              layers={[
                {
                  image: Location_Image_URL,
                  speed: -40,
                  translateY: [0, 20],
                  opacity: [1, 1],
                  scale: [1.05, 1, 'easeOutCubic'],
                  shouldAlwaysCompleteAnimation: true,
                },
              ]}
              className="w-full aspect-1-1 contacts__container__location_image" onClick={() => window.open("https://maps.app.goo.gl/D2MhqpwVyX7XUjFh7", "_blank")}
            />
            <div className="contacts__container__location_infobox">
              <h2 className="contacts__container__location_infobox-header">Location</h2>
              <p className="contacts__container__location_infobox-detail">11177 Rue Hamon,<br/>Montréal, QC H3M 3E4</p>
            </div>
          </div>

        </div>
      </div>



      {/* FOOTER */}
      <Footer showRequestQuote={false} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
  )
}

export default ContactsPage