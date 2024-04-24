'use client';


import React from 'react'
import Image from 'next/image';
import Plus_Icon_Dark from '@/public/assets/svgs/plus_icon-dark.svg';
import Personalized_Icon from '@/public/assets/svgs/personalized_icon.svg';
import Innovative_Icon from '@/public/assets/svgs/innovative_icon.svg';
import Empower_Icon from '@/public/assets/svgs/empowerment_icon.svg';
import Grass_Illustration from '@/public/assets/svgs/grass-pollen_illustration.svg';
import CircularImage from "@/components/CircularImage";
import { ParallaxBanner } from "react-scroll-parallax";
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import RepresentativeContact from '@/components/RepresentativeContact';
import Logo_Black from '@/public/assets/svgs/logo_icon-black.svg';
import { useTranslation } from '../../i18n/client';



// Define the props type for the AboutPage component
type AboutPageProps = {
  params: {
    lng: string;
  };
};



export default function AboutPage({ params: { lng } }: AboutPageProps) {

  // Language
  const { t } = useTranslation(lng, 'about-page');

  // Images for ParallaxBanner
  const MissionBannerImage_URL = "/assets/images/immunotherapy-treatment-img.jpg";
  const VivaGreenImage_URL = "/assets/images/viva-icon-round-green.png";
  const AboutBannerImage_URL = "/assets/images/about-banner-image.jpg";
  const InfiniteTextBannerImage_URL = "/assets/images/immunotherapy-treatment-img-cropped.jpg";


  // Other Images
  const RepImage01_URL = "/assets/images/viva-alain.jpg";
  const RepImage02_URL = "/assets/images/viva-hussein.jpg";

  return (
    <main className='pos-relative'>

      <div className="about">

        <section id='about-intro' className="page-margins-big about__introContainer">
          <div className="about__intro">
            <h1 className="header-tertiary about__intro_header">{t('title')}</h1>
            <p className="text-secondary about__intro_body"><span className="marg-left-small"></span>{t('description')}</p>
            <div className="keepScrolling about__intro_keepScrolling">
                <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1 about__intro_keepScrolling-icons" />
                <p className="keepScrolling__text about__intro_keepScrolling-text">{t('keepscrolling')}</p>
                <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2 about__intro_keepScrolling-icons" />
            </div>
          </div>
          <div className="about__circularImages">
            <div className="about__circularImages_container">
                <CircularImage img_href={VivaGreenImage_URL} classNameContainer="about__circularImages_container-1" classNameImage="about__circularImages_container-1--image" classNameFilter="about__circularImages_container-1--filter" ParallaxSpeed={-50} ParallaxTranslateY={5} ParallaxScale={1.2} />
                <CircularImage img_href={AboutBannerImage_URL} classNameContainer="about__circularImages_container-2" classNameImage="about__circularImages_container-2--image" classNameFilter="about__circularImages_container-2--filter" ParallaxSpeed={-50} ParallaxTranslateY={5} ParallaxScale={1.2} />
            </div>
          </div>
        </section>

        <div className="infinite-text-container about__taglineBox">
          <ParallaxBanner
            layers={[
              {
                image: InfiniteTextBannerImage_URL,
                speed: -50,
                translateY: [0, 50],
                opacity: [1, 1],
                scale: [1.1, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
              },
            ]}
            className="w-full aspect-2-1 infinite-text-container__banner about__taglineBox_banner"
          />
          <div className="infinite-text-container__filter01 about__taglineBox_filter01"></div>
          <div className="infinite-text-container__filter02 about__taglineBox_filter02"></div>
          <div className="infinite-text-container__content about__taglineBox_content">
            {t('tagline')}{t('tagline')}{t('tagline')}
          </div>
        </div>


        <section id='about-mission' className="about__mission">
          
          <div className="about__mission_contentsbox">
            <ParallaxBanner
                layers={[
                  {
                    image: MissionBannerImage_URL,
                    speed: -50,
                    translateY: [0, 30],
                    opacity: [1, 1],
                    scale: [1.4, 1, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                  },
                ]}
                className="w-full aspect-2-1 about__mission_banner"
              />
              <div className="about__mission_banner-shadow"></div>
            <div className="about__mission_contentsbox_flex-container">
              
              <div className="about__mission_features">
                <div className="about__mission_features_container">
                  <div className="about__mission_features_container-feature">
                    <div className="about__mission_features_container-feature--iconbox">
                      <Image src={Personalized_Icon} alt="feature icon" unoptimized={true} className="about__mission_features_container-feature--iconbox---icon" />
                    </div>
                    <h2 className="about__mission_features_container-feature--title">{t('feature01')}</h2>
                  </div>
                  <div className="about__mission_features_container-line"></div>
                  <div className="about__mission_features_container-feature">
                    <div className="about__mission_features_container-feature--iconbox">
                      <Image src={Innovative_Icon} alt="feature icon" unoptimized={true} className="about__mission_features_container-feature--iconbox---icon" />
                    </div>
                    <h2 className="about__mission_features_container-feature--title">{t('feature02')}</h2>
                  </div>
                  <div className="about__mission_features_container-line"></div>
                  <div className="about__mission_features_container-feature">
                    <div className="about__mission_features_container-feature--iconbox">
                      <Image src={Empower_Icon} alt="feature icon" unoptimized={true} className="about__mission_features_container-feature--iconbox---icon" />
                    </div>
                    <h2 className="about__mission_features_container-feature--title">{t('feature03')}</h2>
                  </div>
                </div>
              </div>
              <div className="about__mission_content">
                <div className="about__mission_content-box">
                  <div className="about__mission_content-box--logobox">
                    <Image src={Logo_Black} alt="Logo" unoptimized={true} className="about__mission_content-box--logobox---img" />
                  </div>
                  <h2 className="about__mission_content-box--header">{t('mission-title')}</h2>
                  <p className="about__mission_content-box--text">{t('mission-description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id='about-representatives' className="about__reps">
          <Image src={Grass_Illustration} alt="art illustration" unoptimized={true} className="about__reps_illustration" />
          <div className="page-margins-big about__reps_maincontainer">
            <h2 className="header-secondary about__reps_header">{t('reps-title')}</h2>
            <div className="about__reps_container">
              <div className="about__reps_container-rep about__reps_container-rep01">
                <RepresentativeContact img_href={RepImage01_URL} name='Alain Bouchahine' title={t('reps-01-position')} phone='+1 (437) 425 3452' email_btn_label={t('email')} email='abouchahine@omegalabs.ca' />
              </div>
              <div className="about__reps_container-rep about__reps_container-rep02">
                <RepresentativeContact img_href={RepImage02_URL} name='Hussein Nahle' title={t('reps-02-position')} phone='+1 (514) 578 8124' email_btn_label={t('email')} email='hnahle@omegalabs.ca' />
              </div>
            </div>
          </div>
        </section>

      </div>



      {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={true} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
  )
}