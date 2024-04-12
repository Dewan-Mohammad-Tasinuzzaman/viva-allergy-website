'use client'


import LoadingAnimation from '@/components/LoadingAnimation'
import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Map_Icon from "@/public/assets/svgs/map_icon.svg";
import Map_Icon_Large from "@/public/assets/svgs/map_icon_large.svg";
import Allergist_Icon from "@/public/assets/svgs/allergist_info-icon.svg";
import Plus_Icon_Dark from '@/public/assets/svgs/plus_icon-dark.svg';
import Footer from '@/components/Footer';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import PatientJourneyCard from '@/components/PatientJourneyCard';
import KeepScrolling from '@/components/KeepScrolling';

const VenomPage = () => {

  // Video URL
  const IntroVideo_MP4_URL = "/assets/videos/park_swing.mp4";
  const IntroVideo_WEBM_URL = "/assets/videos/park_swing.webm";
  const WaspVideo_MP4_URL = "/assets/videos/wasp_closeup.mp4";
  const WaspVideo_WEBM_URL = "/assets/videos/wasp_closeup.webm";

  // Images for ParallaxBanner
  const Now_Image_URL = "/assets/images/ambulance-1-cropped.jpg";
  const Today_Image_URL = "/assets/images/clock-time-4.jpg";
  const Tomorrow_Image_URL = "/assets/images/laptop-research-3.jpg";
  const NextTime_Image_URL = "/assets/images/outdoors-1.jpg";

  // Descriptions of Journey Steps
  const NowDescription = (
    <p className="journey-card__container_text">
      Venom immunotherapy (VIT) is a game-changer for those at risk of life-threatening reactions to bee and wasp stings. In Canada, roughly 25,000 people will visit the emergency room each year after being stung.<sup>1</sup>
    </p>
  );
  const TodayDescription = (
    <p className="journey-card__container_text">
      Allergic reactions can be delayed up to 12+ hours. Watch for symptoms such as runny nose and vomiting that may indicate an allergy.
    </p>
  );
  const TomorrowDescription = (
    <p className="journey-card__container_text">
      Reflect on the incident. If the symptoms were anything more than slight swelling, consider calling a medical professional to discuss Venom Immunotherapy.
    </p>
  );
  const NextTimeDescription = (
    <p className="journey-card__container_text">
      Discover the risk of an allergic reaction in a doctor’s office instead of during your next sting.
    </p>
  );


  // For horizontal scroller
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <main className='pos-relative venom'>
      
      <section className="venom__intro">
        <div className="venom__intro__container">
          <div className="venom__intro__container__content">

            <div className="venom__intro__container__content_infobox">
              <div className="page-margins-small venom__intro__container__content_infobox_contents">
                <h1 className="venom__intro__container__content_infobox_contents-heading01">Allergic To Bee Stings?</h1>
                <h2 className="venom__intro__container__content_infobox_contents-heading02">Don&apos;t Let It Keep You Indoors</h2>
                <p className="venom__intro__container__content_infobox_contents-text">Venom immunotherapy (VIT) is a game-changer for those at risk of life-threatening reactions to bee and wasp stings. In Canada, roughly 25,000 people will visit the emergency room each year after being stung.<sup>1</sup></p>
                <div className="keepScrolling venom__intro__container__content_infobox_contents-keepScrolling">
                  <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1 venom__intro__container__content_infobox_contents-keepScrolling--icons" />
                  <p className="keepScrolling__text venom__intro__container__content_infobox_contents-keepScrolling--text">Keep Scrolling</p>
                  <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2 venom__intro__container__content_infobox_contents-keepScrolling--icons" />
                </div>
              </div>
            </div>

            <div className="button-group venom__intro__container__content_buttonsbox">
              <Link className="button-group__button button-group__button--dark" href="#">
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">SCIT Order Form</p>
                  <Image src={Map_Icon} alt="map icon" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </Link>
              <Link className="button-group__button button-group__button--light" href="#">
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">Venom Order Form</p>
                  <Image src={Allergist_Icon} alt="allergist icon" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </Link>
            </div>

          </div>

          <div className="venom__intro__container__videobox">
            <video className="venom__intro__container__videobox_video" autoPlay muted loop>
              <source src={IntroVideo_MP4_URL} type="video/mp4" />
              <source src={IntroVideo_WEBM_URL} type="video/webm" />
              {/* Add more source elements for different formats if necessary */}
              Your browser does not support the video tag. Time to switch!
            </video>
            <div className="venom__intro__container__videobox_banner">
              <p className="venom__intro__container__videobox_banner-text"><span className="venom__intro__container__videobox_banner-text--span">Venom</span> Immunotherapy Saves Lives • <span className="venom__intro__container__videobox_banner-text--span">Venom</span> Immunotherapy Saves Lives •</p>
            </div>
          </div>
        </div>
      </section>


      <section ref={targetRef} className="venom__patient-journey">
        <Image src={Map_Icon_Large} alt="map illustration" unoptimized={true} className="venom__patient-journey_illustration" />
        <div className="venom__patient-journey_container">
          <motion.div style={{ x }} className="venom__patient-journey_container_slider">
            <div className="venom__patient-journey_container_slider-intro">
              <div className="venom__patient-journey_container_slider-intro--contents">
                <h2 className="venom__patient-journey_container_slider-intro--contents__header">Patient <span className="venom__patient-journey_container_slider-intro--contents__header-span">Journey</span></h2>
                <div className="venom__patient-journey_container_slider-intro--contents__keepScrolling">
                  <KeepScrolling />
                </div>
              </div>
            </div>
            <PatientJourneyCard header='Now' step_number='01.' description={NowDescription} banner_URL={Now_Image_URL} />
            <PatientJourneyCard header='Today' step_number='02.' description={TodayDescription} banner_URL={Today_Image_URL} />
            <PatientJourneyCard header='Tomorrow' step_number='03.' description={TomorrowDescription} banner_URL={Tomorrow_Image_URL} />
            <PatientJourneyCard header='Next Time' step_number='04.' description={NextTimeDescription} banner_URL={NextTime_Image_URL} />
          </motion.div>
        </div>
      </section>
      

      <section className="venom__venom-immunotherapy">
        <div className="venom__venom-immunotherapy__container">
          <video className="venom__venom-immunotherapy__container_video" autoPlay muted loop>
            <source src={WaspVideo_MP4_URL} type="video/mp4" />
            <source src={WaspVideo_WEBM_URL} type="video/webm" />
            {/* Add more source elements for different formats if necessary */}
            Your browser does not support the video tag. Time to switch!
          </video>
          <div className="venom__venom-immunotherapy__container_contents">
            <div className="venom__venom-immunotherapy__container_contents_box">
              <h1 className="venom__venom-immunotherapy__container_contents_box-header">What Is Venom Immunothepary?</h1>
              <p className="venom__venom-immunotherapy__container_contents_box-text">VIT is a series of injections that introduces minute  amounts of venom into your body. The amount is  gradually increased over time to help your immune  system build a tolerance to the venom proteins. This  process is continued until your body has enough  immunity to tolerate a bee or wasp sting.<sup>2</sup></p>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <Footer showRequestQuote={false} />

      {/* Loading Animation */}
      <LoadingAnimation customClassName="" />
    </main>
  )
}

export default VenomPage