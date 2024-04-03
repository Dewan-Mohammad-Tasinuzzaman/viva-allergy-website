'use client';

import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import DownloadIcon_Dark from "@/public/assets/svgs/download_icon-dark.svg";
import DownloadIcon_White from "@/public/assets/svgs/download_icon-white.svg";

const OrderFormsPage = () => {

  // Images for Parallax
  const BannerImage_URL = "/assets/images/about07.png";


  return (
    <main className='pos-relative'>

      <div className="order-forms">
        <section id='fellowship-program' className="order-forms__fellowship">
          <div className="order-forms__fellowship_content">
            <div className="order-forms__fellowship_content-mainbox">
              <h1 className="header-tertiary order-forms__fellowship_content-mainbox-header">Fellowship Program</h1>
              <p className="text-secondary order-forms__fellowship_content-mainbox-text">Are you an allergist looking to set up your practice? Our New Fellow Program is designed specifically for you!</p>
              <p className="text-primary order-forms__fellowship_content-mainbox-subtext">Through this program, we provide valuable insights, resources, and discounts on initial orders to help you succeed in your practice. Interested in learning more about this opportunity?</p>
              <Link className='btn-primary order-forms__fellowship_content-mainbox-link' href="/contacts">Get Started</Link>
            </div>
            <div className="button-group order-forms__fellowship_content-buttonsbox">
              <Link className="button-group__button button-group__button--dark" href="#">
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">SCIT Order Form</p>
                  <Image src={DownloadIcon_White} alt="Logo" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </Link>
              <Link className="button-group__button button-group__button--light" href="#">
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">Venom Order Form</p>
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
      <Footer showRequestQuote={false} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
      
    </main>
  )
}

export default OrderFormsPage