'use client'; // Converted to client component


import Image from "next/image";
import Plus_Icon_White from '@/public/assets/svgs/plus_icon.svg';
import "@/styles/main.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import Link from 'next/link'
import KeepScrolling from "@/components/KeepScrolling";
import MiniQuoteForm from "@/components/MiniQuoteForm";
import ButtonPrimary from "@/components/ButtonPrimary";
import CircularImage from "@/components/CircularImage";
import AllergyExtract from "@/components/AllergyExtract";
import Logo_Black from '@/public/assets/svgs/logo_icon-black.svg';
import { useEffect, useState } from "react";
import SideModal from "@/components/SideModal";
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useTranslation } from '../i18n/client';





// Define the props type for the HomePage component
type HomePageProps = {
  params: {
    lng: string;
  };
};


export default function Home({ params: { lng } }: HomePageProps) {

  // Language
  const { t } = useTranslation(lng, 'home-page');


  // Images for ParallaxBanner
  const homeBannerImage = "/assets/images/home-banner-photo-enhanced-cropped.jpg";
  const apDogImage = "/assets/images/ap-dog-image.jpg";
  const beeImage = "/assets/images/bee-image-1.jpg";
  const allergyImageVenom = "/assets/images/venoms_icon.png";
  const allergyImageEpidermal = "/assets/images/epidermals_dog_icon.png";
  const allergyImageMites = "/assets/images/mites_icon.png";
  const allergyImagePollen = "/assets/images/pollen_icon.png";
  const allergyImageInsects = "/assets/images/insect_icon.png";
  const allergyImageMolds = "/assets/images/molds_icon.png";
  const skinTestsImage = "/assets/images/skin-tests-image.png";


  // FOR MODAL (Opening and closing)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription_01, setSelectedDescription_01] = useState('');
  const [selectedDescription_02, setSelectedDescription_02] = useState('');
  const [selectedDescription_03, setSelectedDescription_03] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (title: string, description_01: string, description_02: string, description_03: string, image: string) => {
    setIsModalOpen(true);
    setSelectedTitle(title);
    setSelectedDescription_01(description_01);
    setSelectedDescription_02(description_02);
    setSelectedDescription_03(description_03);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTitle('');
    setSelectedDescription_01('');
    setSelectedDescription_02('');
    setSelectedDescription_03('');
    setSelectedImage('');
  };


  return (

    <main className='pos-relative'>

      <div id="section-hero" className="hero">

        <ParallaxBanner
          layers={[
            {
              image: homeBannerImage,
              speed: -70,
              translateY: [0, 22],
              opacity: [1, 1],
              scale: [1.1, 1, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
            },
          ]}
          className="w-full aspect-2-1 hero__image"
        />
        <div className="hero__filter"></div>
        <div className="banner-shadow"></div>
        

        <div className="hero__maincontainer">

          <div className="hero__maincontainer-start">

            <div className="hero__content page-span-big">
              <div className="hero__content_subcontainer1">
                <h2 className="hero__content_subcontainer1-subheader--1">
                  {t('hero-sub-header01-span01')}<br/>
                  {t('hero-sub-header01-span02')}<Link className='hero__content_subcontainer1-subheader--1---link' href="#">{t('hero-sub-header01-link01')}</Link><br/>
                  {t('hero-sub-header01-span03')}<Link className='hero__content_subcontainer1-subheader--1---link' href="#">{t('hero-sub-header01-link02')}</Link>
                </h2>
                <div className="hero__content_subcontainer1-line"></div>
              </div>
              
              <div className="hero__content_centercontainer">
                <h1 className="hero__content_centercontainer-heading">{t('hero-header-span01')}<span className="hero__content_centercontainer-heading--span">{t('hero-header-bold01')}</span>{t('hero-header-span02')}<span className="hero__content_centercontainer-heading--span">{t('hero-header-bold02')}</span></h1>
                {/* <Link className='hero__content_centercontainer-link' href="#">Explore</Link> */}
              </div>

              <div className="hero__content_subcontainer2">
                <div className="hero__content_subcontainer2-line"></div>
                <h2 className="hero__content_subcontainer2-subheader--2">
                  <span className="hero__content_subcontainer2-subheader--2---span">{t('hero-sub-header02-span01')}</span>{t('hero-sub-header02-span02')}<Link className='hero__content_subcontainer2-subheader--2---span hero__content_subcontainer2-subheader--2---link' href="/venom-extracts">{t('hero-sub-header02-link01')}</Link><br/>
                  {t('hero-sub-header02-span02.5')}<Link className='hero__content_subcontainer2-subheader--2---span hero__content_subcontainer2-subheader--2---link' href="/venom-extracts">{t('hero-sub-header02-link02')}</Link>{t('hero-sub-header02-span03')}<br/>
                  {t('hero-sub-header02-span03.5')}<Link className='hero__content_subcontainer2-subheader--2---span hero__content_subcontainer2-subheader--2---link' href="/venom-extracts">{t('hero-sub-header02-link03')}</Link>{t('hero-sub-header02-span04')}</h2>
              </div>
            </div>

            <div className='hero__maincontainer-start--linkbox'><Link className='hero__maincontainer-start--link' href="#allergy-extracts">{t('explore')}</Link></div>

            {/* Keep Scrolling */}
            <div className="keepScrolling hero__maincontainer-start--keepScrolling">
              <Image src={Plus_Icon_White} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1" />
              <p className="keepScrolling__text">{t('keepscrolling')}</p>
              <Image src={Plus_Icon_White} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2" />
            </div>

          </div>

          {/* <div className="hero__maincontainer-end">
            <div className="hero__form">
              <MiniQuoteForm />
            </div>
          </div> */}

        </div>

      </div>

      <section id="allergy-extracts" className="page-margins-big allergy-extracts">
          <div className="allergy-extracts__intro">
            <div className="allergy-extracts__intro_content">
              <h3 className="header-primary allergy-extracts__intro_content-header">{t('allergy-extracts-title')}</h3>
              <p className="text-primary allergy-extracts__intro_content-text">
                <span className="marg-left-small"></span>{t('allergy-extracts-description')}
              </p>
              <div className="allergy-extracts__intro_content-linksbox">
                <div className="allergy-extracts__intro_content-link">
                  <ButtonPrimary href="/product-catalogue" target="" label={t('product-catalogue')} />
                </div>
                <div className="allergy-extracts__intro_content-link">
                  <ButtonSecondary href="/order-forms" label={t('order-forms')} />
                </div>
              </div>
            </div>

            <div className="allergy-extracts__intro_photos">
              <div className="allergy-extracts__intro_photos-container">
                  <CircularImage img_href={beeImage} classNameContainer="allergy-extracts__intro_photos-1" classNameImage="allergy-extracts__intro_photos-1--image" classNameFilter="allergy-extracts__intro_photos-1--filter" ParallaxSpeed={-50} ParallaxTranslateY={5} ParallaxScale={1.1} />
                  <CircularImage img_href={apDogImage} classNameContainer="allergy-extracts__intro_photos-2" classNameImage="allergy-extracts__intro_photos-2--image" classNameFilter="allergy-extracts__intro_photos-2--filter" ParallaxSpeed={-50} ParallaxTranslateY={5} ParallaxScale={1.1} />
              </div>
            </div>
          </div>

          <div className="allergy-extracts__extracts">
            <Link href="/venom-extracts#intro">
              <AllergyExtract className="allergy-extracts__extracts_extract" title={t('extract-venom')} description="" imageURL={allergyImageVenom} onClick={() => {}} />
            </Link>
            <AllergyExtract className="allergy-extracts__extracts_extract" title={t('extract-epidermal')} description="" imageURL={allergyImageEpidermal} onClick={() => openModal(`${t('extract-epidermal')}`, `${t('extract-epidermal-description-span01')}`, `${t('extract-epidermal-description-span02')}`, `${t('extract-epidermal-description-span03')}`, allergyImageEpidermal)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title={t('extract-mite')} description="" imageURL={allergyImageMites} onClick={() => openModal(`${t('extract-mite')}`, `${t('extract-mite-description-span01')}`, `${t('extract-mite-description-span02')}`, `${t('extract-mite-description-span03')}`, allergyImageMites)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title={t('extract-pollen')} description="" imageURL={allergyImagePollen} onClick={() => openModal(`${t('extract-pollen')}`, `${t('extract-pollen-description-span01')}`, `${t('extract-pollen-description-span02')}`, "", allergyImagePollen)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title={t('extract-insect')} description="" imageURL={allergyImageInsects} onClick={() => openModal(`${t('extract-insect')}`, `${t('extract-insect-description-span01')}`, "", "", allergyImageInsects)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title={t('extract-mold')} description="" imageURL={allergyImageMolds} onClick={() => openModal(`${t('extract-mold')}`, `${t('extract-mold-description-span01')}`, `${t('extract-mold-description-span02')}`, "", allergyImageMolds)} />
          </div>
      </section>

      <section id="section-skin-tests" className="skin-tests">
          <div className="skin-tests__container">

            <div className="skin-tests__container_imagebox">
              <ParallaxBanner
                layers={[
                    {
                    image: skinTestsImage,
                    speed: -30,
                    translateY: [0, 30],
                    scale: [1, 1.08, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                    },
                ]}
                className={`aspect-1-1 skin-tests__container_imagebox-img`}
              />
              <div className="skin-tests__container_imagebox-filter"></div>
              <div className="skin-tests__container_imagebox-object-1"></div>
              <div className="skin-tests__container_imagebox-object-2"></div>
              <div className="skin-tests__container_imagebox-logobox">
                <Image src={Logo_Black} alt="Logo" unoptimized={true} className="skin-tests__container_imagebox-logobox--logo" />
              </div>
            </div>

            <div className="skin-tests__container_content">
              <h3 className="header-primary skin-tests__container_content-header">{t('skin-tests-title')}</h3>
              <p className="text-primary skin-tests__container_content-text">
                <span className="marg-left-small"></span>{t('skin-tests-description')}
              </p>
              <div className="skin-tests__container_content-link">
                <ButtonPrimary href="/skin-test-devices" target="" label={t('learn-more')} />
              </div>
            </div>

          </div>
      </section>


      <div className={isModalOpen ? "sideModalContainer sideModalContainer__show" : "sideModalContainer"}>
        <SideModal isOpen={isModalOpen} onClose={closeModal} imageURL01={selectedImage} imageURL02="" imageURL03="" title={selectedTitle} description_01={selectedDescription_01} description_02={selectedDescription_02} description_03={selectedDescription_03} />
      </div>
      

      {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={true} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
    
  );
}
