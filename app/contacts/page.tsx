'use client';

import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import ContactForm from '@/components/ContactForm';

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
            
            {/* FORM */}
            <ContactForm />

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