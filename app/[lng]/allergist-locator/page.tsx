'use client'

import React from 'react'
import Script from 'next/script';
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import Image from "next/image";
import VivaIcon_White from "@/public/assets/svgs/logo_icon-white.svg";
import { useTranslation } from '../../i18n/client';



type AllergistLocatorProps = {
  params: {
    lng: string;
  };
};


export default function AllergistLocator({ params: { lng } }: AllergistLocatorProps) {

  // Language
  const { t } = useTranslation(lng, 'allergist-locator-page')

  const handleLoad = () => {
    window.parent.scrollTo(0, 0);
  };


  return (
    <main className='pos-relative'>
        
        <div className="allergist-locator">

          <div className="page-margins-big allergist-locator__content">
              <div className="allergist-locator__content_intro">
                  <h1 className="header-primary allergist-locator__content_intro_header">{t('title')}</h1>
                  <p className="text-secondary allergist-locator__content_intro_text"><span className="marg-left-small"></span>{t('description')}</p>
              </div>
              <div className="allergist-locator__content_logobox">
                  <Image src={VivaIcon_White} alt="Logo" unoptimized={true} className="allergist-locator__content_logobox-icon" />
              </div>
          </div>

          <Script src="/locator_script_01.js" />

          <iframe
            className='allergist-locator__iframe'
            id='bullseye_iframe'
            title='Bullseye Locations Search'
            width={'100%'}
            height={'1400'}
            allowFullScreen
            src='https://beeawareallergy.bullseyelocations.com/local/VivaAllergyReactInterface?f=1'
            onLoad={handleLoad}
            allow='geolocation'
          />

          <Script src="/locator_script_02.js" />

        </div>

        {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={true} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />

    </main>
  )
}