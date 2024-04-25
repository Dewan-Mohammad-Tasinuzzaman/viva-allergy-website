'use client';

import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import {ContactForm} from '@/components/ContactForm';
import { useTranslation } from '../../i18n/client';



type ContactsPageProps = {
  params: {
    lng: string;
  };
};


export default function ContactsPage({ params: { lng } }: ContactsPageProps) {

  // Language
  const { t } = useTranslation(lng, 'contacts-page');


  
  // Image URL
  const Contact_Image_URL = "/assets/images/contactus-img.jpg";
  const Location_Image_URL = "/assets/images/location-img.png";

  return (
    <main className='pos-relative'>
      
      <div className="page-margins-big contacts">
        <div className="contacts__container">

          <div className="contacts__container__formContainer">
            <h1 className="header-primary contacts__container__formContainer_header">{t('title')}</h1>
            <p className="text-primary contacts__container__formContainer_text">{t('description')}</p>
            <p className="text-primary contacts__container__formContainer_note">{t('form-hint')} <span className="required-star">*</span></p>
            
            {/* FORM */}
            <ContactForm lng={lng} />

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
              <h2 className="contacts__container__contacts_infobox-header">{t('customer-service')}</h2>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">{t('contacts-phone')}</span> 1.800.268.1326</p>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">{t('contacts-fax')}</span> 1.888.331.4283</p>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">{t('contacts-email')}</span> poallergie@omegalabs.ca</p>
            </div>
            <div className="contacts__container__contacts_infobox">
              <h2 className="contacts__container__contacts_infobox-header contacts__container__contacts_infobox-header--smaller">{t('reporting-complaints')}</h2>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">{t('contacts-phone')}</span> 1.800.363.0584 / 514.335.0310 Ext: 3334</p>
              <p className="contacts__container__contacts_infobox-detail"><span className="contacts__container__contacts_infobox-detail--span">{t('contacts-email')}</span> pharmacovigilance@omegalabs.ca</p>
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
              <h2 className="contacts__container__location_infobox-header">{t('location-title')}</h2>
              <p className="contacts__container__location_infobox-detail">{t('location-street')}<br/>{t('location-province')}</p>
            </div>
          </div>

        </div>
      </div>



      {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={false} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
  )
}