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
import Viva_Icon_White from "@/public/assets/svgs/logo_icon-white.svg";
import Check_Icon from "@/public/assets/svgs/check-icon.svg";
import Syringe_Icon from "@/public/assets/svgs/syringe_icon-angled.svg";
import Innovative_Icon from '@/public/assets/svgs/innovative_icon.svg';
import Empower_Icon from '@/public/assets/svgs/empowerment_icon.svg';

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

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
                  <p className="button-group__button_content-text">Patient Journey</p>
                  <Image src={Map_Icon} alt="map icon" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </Link>
              <Link className="button-group__button button-group__button--light" href="#">
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">Allergist Info</p>
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
        <Image src={Map_Icon_Large} alt="map illustration" unoptimized={true} className="venom__patient-journey_illustration01" />
        <Image src={Viva_Icon_White} alt="map illustration" unoptimized={true} className="venom__patient-journey_illustration02" />
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
            <PatientJourneyCard header='Now' step_number='01' colorClassName='bg-mites' description={NowDescription} banner_URL={Now_Image_URL} />
            <PatientJourneyCard header='Today' step_number='02' colorClassName='bg-insects' description={TodayDescription} banner_URL={Today_Image_URL} />
            <PatientJourneyCard header='Tomorrow' step_number='03' colorClassName='bg-venom' description={TomorrowDescription} banner_URL={Tomorrow_Image_URL} />
            <PatientJourneyCard header='Next Time' step_number='04' colorClassName='bg-trees' description={NextTimeDescription} banner_URL={NextTime_Image_URL} />
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

      <section className="venom__epi-vs-vit">
        <div className="page-margins-big venom__epi-vs-vit__intro">
          <div className="venom__epi-vs-vit__intro_container">
            <h2 className="venom__epi-vs-vit__intro_container-header">
              Reactive or Proactive Treatment For Bee and Wasp Allergies?
              <br/>
              <span className="venom__epi-vs-vit__intro_container-header--span">The Choice Is Yours</span>
            </h2>
            <p className="venom__epi-vs-vit__intro_container-text">VIT is proactive treatment that prevents a life threatening emergency before it happens. An EAI is  the first step of emergency treatment after an allergic  reaction occurs.</p>
          </div>
        </div>

        <div className="venom__epi-vs-vit__comparison">
          <div className="venom__epi-vs-vit__comparison_leftcol"></div>
          <div className="venom__epi-vs-vit__comparison_rightcol"></div>
          <div className="venom__epi-vs-vit__comparison_headerbox">
            <div className="venom__epi-vs-vit__comparison_headerbox-box">
              <div className="venom__epi-vs-vit__comparison_headerbox-box-container">
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header01">EAI</h3>
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header02">Epinephrine Auto-Injector</h3>
              </div>
            </div>
            <div className="venom__epi-vs-vit__comparison_headerbox-box">
              <div className="venom__epi-vs-vit__comparison_headerbox-box-container">
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header01">VIT</h3>
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header02">Venom Immunotherapy</h3>
              </div>
            </div>
          </div>
          {/* List */}
          <div className="venom__epi-vs-vit__comparison_list">
            <div className="page-margins-big venom__epi-vs-vit__comparison_list-container">

              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">Reactive</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    It does not prevent an emergency; it&apos;s simply the first step of emergency treatment.
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Innovative_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">Proactive</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    Shown to be 98% effective at eliminating a systemic reaction following an insect sting.<sup>3</sup>
                  </p>
                </div>
              </div>


              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">Self-Administered</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    Epinephrine is often self-administered in a  crisis situation and can  be difficult to administer  correctly.<sup>4</sup>
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Syringe_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon-special" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">Professional</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    Venom Immunotherapy is administered by a licensed health care professional in a clinical setting.
                  </p>
                </div>
              </div>


              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">Dependent</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    Remembering to carry epinephrine every day  can be inconvenient,  meaning it may not  be available when it&apos;s  needed most.
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Check_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">Prepared</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    With VIT, your protection is always with you meaning  you are prepared and  protected, wherever you are.
                  </p>
                </div>
              </div>


              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">Worry</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    Relying on a reactive approach can mean constant fear and worry.
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Empower_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">Free From Fear</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    Venom Immunotherapy  reduces fear and  improves patient quality of life.<sup>1,3</sup>
                  </p>
                </div>
              </div>

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