'use client';

import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import DownloadIcon_Dark from "@/public/assets/svgs/download_icon-dark.svg";
import DownloadIcon_White from "@/public/assets/svgs/download_icon-white.svg";
import { useTranslation } from '../../i18n/client';


type OrderFormsPageProps = {
  params: {
    lng: string;
  };
};


export default function OrderFormsPage({ params: { lng } }: OrderFormsPageProps) {

  // Language
  const { t } = useTranslation(lng, 'order-forms-page');

  // Images for Parallax
  const BannerImage_URL = "/assets/images/about07.png";


  return (
    <main className='pos-relative'>

      <div className="order-forms">
        <section id='fellowship-program' className="order-forms__fellowship">
          <div className="order-forms__fellowship_content">
            <div className="order-forms__fellowship_content-mainbox">
              <h1 className="header-primary order-forms__fellowship_content-mainbox-header">{t('title')}</h1>
              <p className="text-secondary order-forms__fellowship_content-mainbox-text">{t('subheader01')}</p>
              <p className="text-primary order-forms__fellowship_content-mainbox-subtext">{t('subheader02')}</p>
              <Link className='btn-primary order-forms__fellowship_content-mainbox-link' href="/contacts">{t('get-started')}</Link>
            </div>
            <div className="button-group order-forms__fellowship_content-buttonsbox">
              <Link className="button-group__button button-group__button--dark" href="/assets/files/Viva_Allergy_SCIT_Form_Colour.pdf" target='blank'>
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">{t('scit-order-form')}</p>
                  <Image src={DownloadIcon_White} alt="Logo" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </Link>
              <Link className="button-group__button button-group__button--light" href="/assets/files/Viva_Allergy_Venom_Form_Colour.pdf" target='blank'>
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">{t('venom-order-form')}</p>
                  <Image src={DownloadIcon_Dark} alt="Logo" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </Link>
            </div>
          </div>
          <div className="order-forms__fellowship_imgbox">
            <ParallaxBanner
              layers={[
                {
                  image: BannerImage_URL,
                  speed: -50,
                  translateY: [0, 20],
                  opacity: [1, 1],
                  scale: [1.05, 1, 'easeOutCubic'],
                  shouldAlwaysCompleteAnimation: true,
                },
              ]}
              className="w-full aspect-1-1 order-forms__fellowship_imgbox-img"
            />
            <div className="order-forms__fellowship_imgbox-imgfilter"></div>
          </div>
        </section>
      </div>
      


      {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={false} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
      
    </main>
  )
}