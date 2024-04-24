import React from 'react'
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import Image from "next/image";
import VivaIcon_White from "@/public/assets/svgs/logo_icon-white.svg";
import { useTranslation } from '../../i18n';





type AllergistLocatorProps = {
  params: {
    lng: string;
  };
};


export default async function AllergistLocator({ params: { lng } }: AllergistLocatorProps) {

  // Language
  const { t } = await useTranslation(lng, 'allergist-locator-page')


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
            
            <iframe className='allergist-locator__iframe' src='https://www.bullseyelocations.com/pages/Main_BeeAware?f=1' />
        </div>

        {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={true} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />

    </main>
  )
}