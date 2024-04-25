'use client'


import LoadingAnimation from '@/components/LoadingAnimation'
import React from 'react'
import { ReactLenis, useLenis, Lenis } from '@studio-freight/react-lenis'
import Link from 'next/link'
import Image from "next/image";
import Map_Icon from "@/public/assets/svgs/map_icon.svg";
import Map_Icon_Large from "@/public/assets/svgs/map_icon_large.svg";
import Allergist_Icon from "@/public/assets/svgs/allergist_info-icon.svg";
import Plus_Icon_Dark from '@/public/assets/svgs/plus_icon-dark.svg';
import Plus_Icon_White from '@/public/assets/svgs/plus_icon.svg';
import Vespids_Diagram from '@/public/assets/images/venom_extracts-upscaled-edited.png';
import Honey_Bee_Diagram from '@/public/assets/images/honey_bee_diagram.png';
import Hornet_Diagram from '@/public/assets/images/hornet_diagram.png';
import Wasp_Diagram from '@/public/assets/images/wasps_diagram.png';
import Yellow_Jacket_Diagram from '@/public/assets/images/yellow_jacket_diagram.png';
import BeeAware_Img from '@/public/assets/images/beeaware-img.png';
import Allergist_CTA_Icon from '@/public/assets/svgs/location-custom-icon.svg';
import Footer from '@/components/Footer';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from "react-scroll-parallax";
import PatientJourneyCard from '@/components/PatientJourneyCard';
import KeepScrolling from '@/components/KeepScrolling';
import Viva_Icon_White from "@/public/assets/svgs/logo_icon-white.svg";
import Viva_Logo_Icon from "@/public/assets/images/viva-icon-square-green.png";
import Check_Icon from "@/public/assets/svgs/check-icon.svg";
import Syringe_Icon from "@/public/assets/svgs/syringe_icon-angled.svg";
import Innovative_Icon from '@/public/assets/svgs/innovative_icon.svg';
import Empower_Icon from '@/public/assets/svgs/empowerment_icon.svg';
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from '@/components/ButtonSecondary'
import { useTranslation } from '../../i18n/client';



type VenomPageProps = {
  params: {
    lng: string;
  };
};


export default function VenomPage({ params: { lng } }: VenomPageProps) {


  // Language
  const { t } = useTranslation(lng, 'venom-page');


  // Video URL
  const IntroVideo_MP4_URL = "/assets/videos/venom-banner.mp4";
  const IntroVideo_WEBM_URL = "/assets/videos/venom-banner.webm";
  const WaspVideo_MP4_URL = "/assets/videos/wasp_closeup.mp4";
  const WaspVideo_WEBM_URL = "/assets/videos/wasp_closeup.webm";
  const VITSuccessVideo_MP4_URL = "/assets/videos/nature_park.mp4";
  const VITSuccessVideo_WEBM_URL = "/assets/videos/nature_park.webm";

  // Images for ParallaxBanner
  const Intro_Banner_Img_URL = "/assets/images/venom-banner-img.jpeg";
  const Wasp_Banner_Img_URL = "/assets/images/wasp_closeup_img.jpeg";
  const Park_Banner_Img_URL = "/assets/images/nature_park_img.jpeg";
  const Now_Image_URL = "/assets/images/ambulance-1-cropped.jpg";
  const Today_Image_URL = "/assets/images/clock-time-4.jpg";
  const Tomorrow_Image_URL = "/assets/images/laptop-research-3.jpg";
  const NextTime_Image_URL = "/assets/images/outdoors-1.jpg";
  const Allergists_Image_URL = "/assets/images/laptop-research-3.jpg";
  const Bee_Image_URL_01 = "/assets/images/bee_image_allergy-01.jpg";
  const Bee_Image_URL_02 = "/assets/images/bee_image_allergy-02.jpg";
  const Bee_Image_URL_03 = "/assets/images/bee_image_allergy-03.jpg";

  // Descriptions of Journey Steps
  const NowDescription = (
    <p className="journey-card__container_text">
      {t('step01-description-span01')}<sup>2</sup>{t('step01-description-span02')}
    </p>
  );
  const TodayDescription = (
    <p className="journey-card__container_text">
      {t('step02-description-span01')}{t('step02-description-span02')}
    </p>
  );
  const TomorrowDescription = (
    <p className="journey-card__container_text">
      {t('step03-description-span01')}{t('step03-description-span02')}
    </p>
  );
  const NextTimeDescription = (
    <p className="journey-card__container_text">
      {t('step04-description-span01')}{t('step04-description-span02')}
    </p>
  );


  // For horizontal scrollers
  // For venom__patient-journey horizontal scroller
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  // For venom__options_container horizontal scroller
  const optionsTargetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: optionsScrollYProgress } = useScroll({
    target: optionsTargetRef,
  });
  const optionsX = useTransform(optionsScrollYProgress, [0, 1], ["0%", "-100%"]);


  return (
    <main className='pos-relative venom'>
      
      <section id='intro' className="venom__intro">
        <div className="venom__intro__container">
          <div className="venom__intro__container__content">

            <div className="venom__intro__container__content_infobox">
              <div className="page-margins-small venom__intro__container__content_infobox_contents">
                <h1 className="venom__intro__container__content_infobox_contents-heading01">{t('title-span01')}<span className="venom__intro__container__content_infobox_contents-heading01--span">{t('title-span02')}</span></h1>
                <h2 className="venom__intro__container__content_infobox_contents-heading02">{t('subheader')}</h2>
                <p className="venom__intro__container__content_infobox_contents-text">{t('description-span01')}<sup>1</sup>{t('description-span02')}</p>
                <div className="keepScrolling venom__intro__container__content_infobox_contents-keepScrolling">
                  <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1 venom__intro__container__content_infobox_contents-keepScrolling--icons" />
                  <p className="keepScrolling__text venom__intro__container__content_infobox_contents-keepScrolling--text">{t('keep-scrolling')}</p>
                  <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2 venom__intro__container__content_infobox_contents-keepScrolling--icons" />
                </div>
              </div>
            </div>

            <div className="button-group venom__intro__container__content_buttonsbox">
              <a className="button-group__button button-group__button--dark" href="#patient-journey">
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">{t('patient-journey')}</p>
                  <Image src={Map_Icon} alt="map icon" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </a>
              <a className="button-group__button button-group__button--light" href="#allergist-info">
                <div className="button-group__button_content">
                  <p className="button-group__button_content-text">{t('allergist-info')}</p>
                  <Image src={Allergist_Icon} alt="allergist icon" unoptimized={true} className="button-group__button_content-icon" />
                </div>
              </a>
            </div>

          </div>

          <div className="venom__intro__container__videobox">
            <ParallaxBanner
              layers={[
                  {
                  image: Intro_Banner_Img_URL,
                  speed: -50,
                  translateY: [0, 25],
                  scale: [1, 1.05, 'easeOutCubic'],
                  shouldAlwaysCompleteAnimation: true,
                  },
              ]}
              className={`aspect-1-1 w-full venom__intro__container__videobox_img`}
            />
            <video className="venom__intro__container__videobox_video" autoPlay muted loop>
              <source src={IntroVideo_MP4_URL} type="video/mp4" />
              <source src={IntroVideo_WEBM_URL} type="video/webm" />
              {/* Add more source elements for different formats if necessary */}
              Your browser does not support the video tag. Time to switch!
            </video>
            <div className="venom__intro__container__videobox_filter"></div>
            <div className="venom__intro__container__videobox_frame"></div>
            <div className="venom__intro__container__videobox_banner">
              <p className="venom__intro__container__videobox_banner-text"><span className="color-venom">{t('vit-saves-lives-span01')}</span>{t('vit-saves-lives-span02')}<span className="color-venom">{t('vit-saves-lives-span01')}</span>{t('vit-saves-lives-span02')}<span className="color-venom">{t('vit-saves-lives-span01')}</span>{t('vit-saves-lives-span02')}</p>
            </div>
          </div>
        </div>
      </section>


      <section ref={targetRef} id='patient-journey' className="venom__patient-journey">
        <Image src={Map_Icon_Large} alt="map illustration" unoptimized={true} className="venom__patient-journey_illustration01" />
        <Image src={Viva_Icon_White} alt="map illustration" unoptimized={true} className="venom__patient-journey_illustration02" />
        <div className="venom__patient-journey_container">
          <motion.div style={{ x }} className="venom__patient-journey_container_slider">
            <div className="venom__patient-journey_container_slider-intro">
              <div className="venom__patient-journey_container_slider-intro--contents">
                <h2 className="venom__patient-journey_container_slider-intro--contents__header">{t('patient')}<span className="venom__patient-journey_container_slider-intro--contents__header-span">{t('journey')}</span></h2>

                <div className="keepScrolling venom__patient-journey_container_slider-intro--contents__keepScrolling">
                  <Image src={Plus_Icon_White} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1" />
                  <p className="keepScrolling__text">{t('keep-scrolling')}</p>
                  <Image src={Plus_Icon_White} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2" />
                </div>

              </div>
            </div>
            <PatientJourneyCard header={t('step01-title')} step_number='01' colorClassName='bg-mites' description={NowDescription} banner_URL={Now_Image_URL} />
            <PatientJourneyCard header={t('step02-title')} step_number='02' colorClassName='bg-insects' description={TodayDescription} banner_URL={Today_Image_URL} />
            <PatientJourneyCard header={t('step03-title')} step_number='03' colorClassName='bg-venom' description={TomorrowDescription} banner_URL={Tomorrow_Image_URL} />
            <PatientJourneyCard header={t('step04-title')} step_number='04' colorClassName='bg-trees' description={NextTimeDescription} banner_URL={NextTime_Image_URL} />
          </motion.div>
        </div>
      </section>
      

      <section id='venon-immunotherapy' className="venom__venom-immunotherapy">
        <div className="venom__venom-immunotherapy__container">
          <ParallaxBanner
            layers={[
                {
                image: Wasp_Banner_Img_URL,
                speed: -50,
                translateY: [0, 20],
                scale: [1, 1.1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
                },
            ]}
            className={`aspect-1-1 w-full venom__venom-immunotherapy__container_img`}
          />
          <video className="venom__venom-immunotherapy__container_video" autoPlay muted loop>
            <source src={WaspVideo_MP4_URL} type="video/mp4" />
            <source src={WaspVideo_WEBM_URL} type="video/webm" />
            {/* Add more source elements for different formats if necessary */}
            Your browser does not support the video tag. Time to switch!
          </video>
          <div className="venom__venom-immunotherapy__container_contents">
            <div className="venom__venom-immunotherapy__container_contents_box">
              <h1 className="venom__venom-immunotherapy__container_contents_box-header">{t('vit-title')}</h1>
              <p className="venom__venom-immunotherapy__container_contents_box-text">{t('vit-description')}<sup>3</sup></p>
            </div>
          </div>
        </div>
      </section>

      <section id='epi-vs-vit' className="venom__epi-vs-vit">
        <div className="page-margins-big venom__epi-vs-vit__intro">
          <div className="venom__epi-vs-vit__intro_container">
            <h2 className="venom__epi-vs-vit__intro_container-header">
              {t('comparison-title01')}
              <br/>
              <span className="venom__epi-vs-vit__intro_container-header--span">{t('comparison-title02')}</span>
            </h2>
            <p className="venom__epi-vs-vit__intro_container-text">{t('comparison-description')}</p>
          </div>
        </div>

        <div className="venom__epi-vs-vit__comparison">
          <div className="venom__epi-vs-vit__comparison_leftcol"></div>
          <div className="venom__epi-vs-vit__comparison_rightcol"></div>
          <div className="venom__epi-vs-vit__comparison_headerbox">
            <div className="venom__epi-vs-vit__comparison_headerbox-box">
              <div className="venom__epi-vs-vit__comparison_headerbox-box-container">
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header01">{t('comparison-eai')}</h3>
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header02">{t('comparison-eai-full')}</h3>
              </div>
            </div>
            <div className="venom__epi-vs-vit__comparison_headerbox-box">
              <div className="venom__epi-vs-vit__comparison_headerbox-box-container">
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header01">{t('comparison-vit')}</h3>
                <h3 className="venom__epi-vs-vit__comparison_headerbox-box-container--header02">{t('comparison-vit-full')}</h3>
              </div>
            </div>
          </div>
          {/* List */}
          <div className="venom__epi-vs-vit__comparison_list">
            <div className="page-margins-big venom__epi-vs-vit__comparison_list-container">

              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">{t('comparison-eai-01-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    {t('comparison-eai-01-text')}
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Innovative_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">{t('comparison-vit-01-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    {t('comparison-vit-01-text')}<sup>4</sup>
                  </p>
                </div>
              </div>


              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">{t('comparison-eai-02-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    {t('comparison-eai-02-text')}<sup>5</sup>
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Syringe_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon-special" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">{t('comparison-vit-02-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    {t('comparison-vit-02-text')}
                  </p>
                </div>
              </div>


              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">{t('comparison-eai-03-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    {t('comparison-eai-03-text')}
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Check_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">{t('comparison-vit-03-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    {t('comparison-vit-03-text')}
                  </p>
                </div>
              </div>


              <div className="venom__epi-vs-vit__comparison_list-container-item">
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerLeft">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__header">{t('comparison-eai-04-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerLeft__text">
                    {t('comparison-eai-04-text')}
                  </p>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle">
                  <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container">
                    <Image src={Empower_Icon} alt="map illustration" unoptimized={true} className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_icon" />
                    <div className="venom__epi-vs-vit__comparison_list-container-item--containerMiddle__container_filter"></div>
                  </div>
                </div>
                <div className="venom__epi-vs-vit__comparison_list-container-item--containerRight">
                  <h4 className="venom__epi-vs-vit__comparison_list-container-item--containerRight__header">{t('comparison-vit-04-title')}</h4>
                  <p className="venom__epi-vs-vit__comparison_list-container-item--containerRight__text">
                    {t('comparison-vit-04-text')}<sup>4,6</sup>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="venom__success">
        <ParallaxBanner
          layers={[
              {
              image: Park_Banner_Img_URL,
              speed: -50,
              translateY: [0, 40],
              scale: [1, 1.05, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
              },
          ]}
          className={`aspect-1-1 w-full venom__success_img`}
        />
        <video className="venom__success_video" autoPlay muted loop>
          <source src={VITSuccessVideo_MP4_URL} type="video/mp4" />
          <source src={VITSuccessVideo_WEBM_URL} type="video/webm" />
          {/* Add more source elements for different formats if necessary */}
          Your browser does not support the video tag. Time to switch!
        </video>
        <div className="venom__success_video-filter01"></div>
        <div className="venom__success_video-filter02"></div>
        <div className="venom__success_container">
          <h1 className="venom__success_container-header">{t('vid-banner-text')}</h1>
          <div className="venom__success_container-link">
            <ButtonSecondary href="/contacts" label={t('contact-us')} />
          </div>
        </div>
      </section>



      <section id='allergist-info' className="venom__allergist-info">
        <ParallaxBanner
          layers={[
              {
              image: Allergists_Image_URL,
              speed: -20,
              translateY: [0, 30],
              scale: [1, 1.15, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
              },
          ]}
          className={`aspect-1-1 venom__allergist-info_banner`}
        />
        <div className="venom__allergist-info_banner-filter"></div>

        <div className="venom__allergist-info_container">
          <div className="venom__allergist-info_container-contents">
            <h1 className="header-secondary venom__allergist-info_container-contents--header">{t('allergist-title')}</h1>
            <p className="text-secondary venom__allergist-info_container-contents--text">{t('allergist-subheader')}</p>
            <p className="text-primary venom__allergist-info_container-contents--subtext">{t('allergist-text-span01')}<sup>4</sup>{t('allergist-text-span02')}</p>
            <div className="venom__allergist-info_container-contents--link">
              <ButtonPrimary href="/assets/files/Viva_Allergy_Venom_Form_Colour.pdf" target='blank' label={t('venom-order-form')} />
            </div>
          </div>
        </div>
      </section>


      <section id='venom-extraction-process' className="page-margins-big venom__extraction">
        <div className="venom__extraction_header">{t('extraction-header-span01')}<br/>{t('extraction-header-span02')}</div>
        <div className="venom__extraction_container">

          <div className="venom__extraction_container-item">
            <div className="venom__extraction_container-item--numbox">
              <div className="bg-venom venom__extraction_container-item--numbox---circle">
                <p className="venom__extraction_container-item--numbox---circle----number">1</p>
              </div>
            </div>
            <div className="venom__extraction_container-item--contents">
              <h3 className="venom__extraction_container-item--contents---title">{t('extraction-item01-title')}</h3>
              <p className="venom__extraction_container-item--contents---text">{t('extraction-item01-description')}</p>
            </div>
          </div>

          <div className="venom__extraction_container-item">
            <div className="venom__extraction_container-item--numbox">
              <div className="bg-epidermals venom__extraction_container-item--numbox---circle">
                <p className="venom__extraction_container-item--numbox---circle----number">2</p>
              </div>
            </div>
            <div className="venom__extraction_container-item--contents">
              <h3 className="venom__extraction_container-item--contents---title">{t('extraction-item02-title')}</h3>
              <p className="venom__extraction_container-item--contents---text">{t('extraction-item02-description')}</p>
            </div>
          </div>

          <div className="venom__extraction_container-item">
            <div className="venom__extraction_container-item--numbox">
              <div className="bg-mites venom__extraction_container-item--numbox---circle">
                <p className="venom__extraction_container-item--numbox---circle----number">3</p>
              </div>
            </div>
            <div className="venom__extraction_container-item--contents">
              <h3 className="venom__extraction_container-item--contents---title">{t('extraction-item03-title')}</h3>
              <p className="venom__extraction_container-item--contents---text">{t('extraction-item03-description')}</p>
            </div>
          </div>

          <div className="venom__extraction_container-item">
            <div className="venom__extraction_container-item--numbox">
              <div className="bg-grass venom__extraction_container-item--numbox---circle">
                <p className="venom__extraction_container-item--numbox---circle----number">4</p>
              </div>
            </div>
            <div className="venom__extraction_container-item--contents">
              <h3 className="venom__extraction_container-item--contents---title">{t('extraction-item04-title')}</h3>
              <p className="venom__extraction_container-item--contents---text">{t('extraction-item04-description')}</p>
            </div>
          </div>

          <div className="venom__extraction_container-item">
            <div className="venom__extraction_container-item--numbox">
              <div className="bg-mold venom__extraction_container-item--numbox---circle">
                <p className="venom__extraction_container-item--numbox---circle----number">5</p>
              </div>
            </div>
            <div className="venom__extraction_container-item--contents">
              <h3 className="venom__extraction_container-item--contents---title">{t('extraction-item05-title')}</h3>
              <p className="venom__extraction_container-item--contents---text">{t('extraction-item05-description')}</p>
            </div>
          </div>

          <div className="venom__extraction_container-item">
            <div className="venom__extraction_container-item--numbox">
              <div className="bg-insects venom__extraction_container-item--numbox---circle">
                <p className="venom__extraction_container-item--numbox---circle----number">6</p>
              </div>
            </div>
            <div className="venom__extraction_container-item--contents">
              <h3 className="venom__extraction_container-item--contents---title">{t('extraction-item06-title')}</h3>
              <p className="venom__extraction_container-item--contents---text">{t('extraction-item06-description')}</p>
            </div>
          </div>

        </div>
      </section>



      <section className="venom__options">
        <div ref={optionsTargetRef} className="venom__options_container">
          <div className="venom__options_container-bgbox">
            <div className="venom__options_container-bgbox-bg venom__options_container-bgbox-bg--1">
              <Image src={Viva_Icon_White} alt="viva allergy icon" unoptimized={true} className="venom__options_container-bgbox-bg-icon venom__options_container-bgbox-bg-icon--1" />
            </div>
            <div className="venom__options_container-bgbox-bg venom__options_container-bgbox-bg--2">
              <Image src={Viva_Icon_White} alt="viva allergy icon" unoptimized={true} className="venom__options_container-bgbox-bg-icon venom__options_container-bgbox-bg-icon--2" />
            </div>
            <div className="venom__options_container-bgbox-bg venom__options_container-bgbox-bg--3">
              <Image src={Viva_Icon_White} alt="viva allergy icon" unoptimized={true} className="venom__options_container-bgbox-bg-icon venom__options_container-bgbox-bg-icon--3" />
            </div>
            <div className="venom__options_container-bgbox-bg venom__options_container-bgbox-bg--4">
              <Image src={Viva_Icon_White} alt="viva allergy icon" unoptimized={true} className="venom__options_container-bgbox-bg-icon venom__options_container-bgbox-bg-icon--4" />
              <div className="venom__options_container-bgbox-bg--4---iconbox">
                <Image src={Viva_Logo_Icon} alt="viva allergy icon" unoptimized={true} className="venom__options_container-bgbox-bg--4---iconbox-icon" />
                <div className="venom__options_container-bgbox-bg--4---iconbox-filter"></div>
              </div>
              <h2 className=" venom__options_container-bgbox-bg--4---header">{t('options-title')}</h2>
            </div>
          </div>
          

          <div className="venom__options_container-container">
            <motion.div style={{ x: optionsX }} className="venom__options_container-slider">
              <div className="venom__options_container-slider__section venom__options_container-slider__section--01">
                <div className="venom__options_container-slider__section_container">
                  <h2 className="color-dark-1 venom__options_container-slider__section_container-intro">{t('collection-title')}</h2>
                  <div className="bg-black venom__options_container-slider__section_container-line"></div>
                  <div className="venom__options_container-slider__section_container-infobox">
                    <h3 className="color-dark-1 venom__options_container-slider__section_container-infobox--header">{t('collection-type01')}</h3>
                  </div>
                  <Image src={Honey_Bee_Diagram} alt="options image" unoptimized={true} className="venom__options_container-slider__section_container-image venom__options_container-slider__section_container-image--custom" />
                </div>
              </div>
              <div className="venom__options_container-slider__section venom__options_container-slider__section--02">
                <div className="venom__options_container-slider__section_container">
                  <div className="venom__options_container-slider__section_container-infobox">
                    <h3 className="color-white venom__options_container-slider__section_container-infobox--header">{t('collection-type02')}</h3>
                    <h3 className="color-white venom__options_container-slider__section_container-infobox--text">{t('collection-type02-sub')}</h3>
                  </div>
                  <div className="bg-white venom__options_container-slider__section_container-line"></div>
                  <Image src={Hornet_Diagram} alt="options image" unoptimized={true} className="venom__options_container-slider__section_container-image venom__options_container-slider__section_container-image--custom" />
                </div>
              </div>
              <div className="venom__options_container-slider__section venom__options_container-slider__section--03">
                <div className="venom__options_container-slider__section_container">
                  <div className="venom__options_container-slider__section_container-infobox">
                    <h3 className="color-white venom__options_container-slider__section_container-infobox--header">{t('collection-type03')}</h3>
                    <h3 className="color-white venom__options_container-slider__section_container-infobox--text">{t('collection-type03-sub')}</h3>
                  </div>
                  <div className="bg-white venom__options_container-slider__section_container-line"></div>
                  <Image src={Wasp_Diagram} alt="options image" unoptimized={true} className="venom__options_container-slider__section_container-image" />
                </div>
              </div>
              <div className="venom__options_container-slider__section venom__options_container-slider__section--04">
                <div className="venom__options_container-slider__section_container">
                  <div className="venom__options_container-slider__section_container-infobox">
                    <h3 className="color-dark-1 venom__options_container-slider__section_container-infobox--header">{t('collection-type04')}</h3>
                    <h3 className="color-dark-1 venom__options_container-slider__section_container-infobox--text">{t('collection-type04-sub')}</h3>
                  </div>
                  <div className="bg-black venom__options_container-slider__section_container-line"></div>
                  <Image src={Yellow_Jacket_Diagram} alt="options image" unoptimized={true} className="venom__options_container-slider__section_container-image" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="venom__options_contents">
          <div className="page-margins-small venom__options_contents-box">
            {/* <h2 className="venom__options_contents-box--header">Venom Extract Options</h2> */}
            <div className="venom__options_contents-box--categories">
              <div className="venom__options_contents-box--categories__category">
                <h3 className="venom__options_contents-box--categories__category_title">{t('options-selection01-title')}</h3>
                <p className="venom__options_contents-box--categories__category_description">{t('options-selection01-text')}</p>
              </div>
              <div className="venom__options_contents-box--categories__category">
                <h3 className="venom__options_contents-box--categories__category_title">{t('options-selection02-title')}</h3>
                <p className="venom__options_contents-box--categories__category_description">{t('options-selection02-text')}</p>
              </div>
            </div>
            <div className="venom__options_contents-box--link">
              <ButtonPrimary href="/product-catalogue" target='' label={t('product-catalogue')} />
            </div>
          </div>
        </div>
      </section>


      <div className="venom__slideshow">
        <div className="slide-show">
          <div className="slide-show__container">
            <div className="slide-show__container_imgbox">
              <ParallaxBanner
                layers={[
                    {
                    image: Bee_Image_URL_03,
                    speed: -50,
                    translateY: [0, 40],
                    scale: [1, 1.15, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                    },
                ]}
                className={`aspect-1-1 w-full slide-show__container_imgbox-img`}
              />
              <div className="slide-show__container_imgbox-filter"></div>
            </div>
            <div className="slide-show__container_imgbox">
              <ParallaxBanner
                layers={[
                    {
                    image: Bee_Image_URL_02,
                    speed: -50,
                    translateY: [0, 40],
                    scale: [1, 1.15, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                    },
                ]}
                className={`aspect-1-1 w-full slide-show__container_imgbox-img`}
              />
              <div className="slide-show__container_imgbox-filter"></div>
            </div>
            <div className="slide-show__container_imgbox">
              <ParallaxBanner
                layers={[
                    {
                    image: Bee_Image_URL_01,
                    speed: -50,
                    translateY: [0, 40],
                    scale: [1, 1.15, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                    },
                ]}
                className={`aspect-1-1 w-full slide-show__container_imgbox-img`}
              />
              <div className="slide-show__container_imgbox-filter"></div>
            </div>
          </div>
        </div>
      </div>


      <section id='bee-aware' className="venom__beeaware">
        <div className="venom__beeaware__container">
          <Image src={BeeAware_Img} alt="BeeAware Image" unoptimized={true} className="venom__beeaware__container_img" />
          <div className="venom__beeaware__container_content">
            <h3 className="header-primary venom__beeaware__container_content-header">
              {t('beeaware-title-span01')}<br/>
              {t('beeaware-title-span02')}
            </h3>
            <div className="venom__beeaware__container_content-item">
              <div className="venom__beeaware__container_content-item--bullet"></div>
              <div className="venom__beeaware__container_content-item--info">
                <h4 className="venom__beeaware__container_content-item--info---title">{t('beeaware-item01-title')}</h4>
                <p className="venom__beeaware__container_content-item--info---description">{t('beeaware-item01-info')}</p>
              </div>
            </div>
            <div className="venom__beeaware__container_content-item">
              <div className="venom__beeaware__container_content-item--bullet"></div>
              <div className="venom__beeaware__container_content-item--info">
                <h4 className="venom__beeaware__container_content-item--info---title">{t('beeaware-item02-title')}</h4>
                <p className="venom__beeaware__container_content-item--info---description">{t('beeaware-item02-info')}</p>
                <Link className='venom__beeaware__container_content-item--info---link' href="/allergist-locator">{t('beeaware-item02-link')}</Link>
              </div>
            </div>
            <div className="venom__beeaware__container_content-item">
              <div className="venom__beeaware__container_content-item--bullet"></div>
              <div className="venom__beeaware__container_content-item--info">
                <h4 className="venom__beeaware__container_content-item--info---title">{t('beeaware-item03-title')}</h4>
                <p className="venom__beeaware__container_content-item--info---description">{t('beeaware-item03-info')}</p>
                <Link className='venom__beeaware__container_content-item--info---link' href="https://www.beeawareallergy.com/">{t('beeaware-item03-link')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="venom__allergist-cta">
        <Image src={Allergist_CTA_Icon} alt="Bee Illustration" unoptimized={true} className="venom__allergist-cta_illustration" />
        <div className="venom__allergist-cta_container">
          <h3 className="venom__allergist-cta_container-header">{t('allergist-cta-title')}</h3>
          <p className="venom__allergist-cta_container-text">{t('allergist-cta-info')}</p>
          <div className="venom__allergist-cta_container-link">
            <ButtonPrimary href="/contacts" target='' label={t('contact-us')} />
          </div>
        </div>
      </section>


      <section className="references">
        <Image src={Viva_Icon_White} alt="Bee Illustration" unoptimized={true} className="references_illustration" />
        <div className="page-margins-big references_container">
          <h4 className="references_container-header">{t('references-title')}</h4>
          <div className="references_container-item">
            <span className="references_container-item--number">[1]</span>
            <p className="references_container-item--text">
              {t('references-ref01')}
            </p>
          </div>
          <div className="references_container-item">
            <span className="references_container-item--number">[2]</span>
            <p className="references_container-item--text">
              {t('references-ref02')}
            </p>
          </div>
          <div className="references_container-item">
            <span className="references_container-item--number">[3]</span>
            <p className="references_container-item--text">
              {t('references-ref03')}
            </p>
          </div>
          <div className="references_container-item">
            <span className="references_container-item--number">[4]</span>
            <p className="references_container-item--text">
              {t('references-ref04')}
            </p>
          </div>
          <div className="references_container-item">
            <span className="references_container-item--number">[5]</span>
            <p className="references_container-item--text">
              {t('references-ref05')}
            </p>
          </div>
          <div className="references_container-item">
            <span className="references_container-item--number">[6]</span>
            <p className="references_container-item--text">
              {t('references-ref06')}
            </p>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={false} />

      {/* Loading Animation */}
      <LoadingAnimation customClassName="venom-loader" />
    </main>
  )
}