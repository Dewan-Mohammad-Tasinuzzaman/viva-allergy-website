'use client'; // Converted to client component


import Image from "next/image";
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


export default function Home() {


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
                  In Partnership with<br/>
                  <Link className='hero__content_subcontainer1-subheader--1---link' href="#">Hollisterstier</Link><br/>
                  We Deliver Excellence
                </h2>
                <div className="hero__content_subcontainer1-line"></div>
              </div>
              
              <div className="hero__content_centercontainer">
                <h1 className="hero__content_centercontainer-heading">Over <span className="hero__content_centercontainer-heading--span">65</span> Years of <span className="hero__content_centercontainer-heading--span">Allergy</span></h1>
                {/* <Link className='hero__content_centercontainer-link' href="#">Explore</Link> */}
              </div>

              <div className="hero__content_subcontainer2">
                <div className="hero__content_subcontainer2-line"></div>
                <h2 className="hero__content_subcontainer2-subheader--2">
                  <span className="hero__content_subcontainer2-subheader--2---span">Sole Supplier</span> of <Link className='hero__content_subcontainer2-subheader--2---span hero__content_subcontainer2-subheader--2---link' href="/venom-extracts">Venom</Link><br/>
                  Immunotherapy Treatment<br/>
                  in Canada</h2>
              </div>
            </div>

            <div className='hero__maincontainer-start--linkbox'><Link className='hero__maincontainer-start--link' href="#allergy-extracts">Explore</Link></div>

            {/* Keep Scrolling */}
            <div className="hero__maincontainer-start--keepScrolling">
              <KeepScrolling />
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
              <h3 className="header-primary allergy-extracts__intro_content-header">Allergy Extracts</h3>
              <p className="text-primary allergy-extracts__intro_content-text">
                <span className="marg-left-small"></span>Discover a comprehensive range of premium allergy extracts at Viva Allergy. Empower yourself to proactively and efficiently meet your patients&apos; specific needs, ensuring optimal care and improved well-being.
              </p>
              <div className="allergy-extracts__intro_content-linksbox">
                <div className="allergy-extracts__intro_content-link">
                  <ButtonPrimary href="/product-catalogue" target="" label="Product Catalogue" />
                </div>
                <div className="allergy-extracts__intro_content-link">
                  <ButtonSecondary href="/order-forms" label="Order Forms" />
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
              <AllergyExtract className="allergy-extracts__extracts_extract" title="Venom" description="" imageURL={allergyImageVenom} onClick={() => {}} />
            </Link>
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Epidermal" description="" imageURL={allergyImageEpidermal} onClick={() => openModal("Epidermal", "Our AP Dog is the only extract on the market fulfilling the practice parameter's recommended dosing of 15 mcg of Can ft1.", "If your patients are still battling the distressing symptoms of dog allergies, even after treatment, it could be due to the use of lower-concentration extracts. This leaves patients without the much-needed relief from their dog allergies.", "Give your patients the relief they deserve with our premium AP extracts.", allergyImageEpidermal)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Mite" description="" imageURL={allergyImageMites} onClick={() => openModal("Mite", "Dust mite allergies are prevalent and challenging to manage, impacting individuals' quality of life.", "Our 30,000 au/mL mite extract offers enhanced precision for diagnosing and allows for more flexibility, ensuring precise and personalized care.", "Trust us for consistent results and improved patient care.", allergyImageMites)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Pollen" description="" imageURL={allergyImagePollen} onClick={() => openModal("Pollen", "Testing and treating patients for grass, tree, and weed pollen allergies can be challenging. The prevalence of these allergens varies by region, underscoring the importance of customizing testing panels.", "At Viva Allergy, we provide a comprehensive range of more than 30 pollen extracts for you to accurately detect and treat the allergens affecting your patients' quality of life.", "", allergyImagePollen)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Insect" description="" imageURL={allergyImageInsects} onClick={() => openModal("Insect", "Diagnose cockroach allergy with our antigen, at a 1:10 w/v concentration, from recognized allergy-inducing species, such as B. germanica and P. americana.", "", "", allergyImageInsects)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Mold" description="" imageURL={allergyImageMolds} onClick={() => openModal("Mold", "Mold allergies present persistent challenges for patients, with mold spores indoors and outdoors triggering allergic reactions.", "Choose from our wide-ranging selection of common allergy-causing molds, including Alternaria tenuis, Aspergillus fumigatus, and Penicillium notatum, allowing healthcare professionals like you to address specific diagnostic and treatment needs effectively.", "", allergyImageMolds)} />
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
              <h3 className="header-primary skin-tests__container_content-header">Skin Test Devices</h3>
              <p className="text-primary skin-tests__container_content-text">
                <span className="marg-left-small"></span>Our skin test device systems, ComforTen® and Quintip®, offer you quick and easy setup for efficient and reproducible testing experiences.
              </p>
              <div className="skin-tests__container_content-link">
                <ButtonPrimary href="/skin-test-devices" target="" label="Learn More" />
              </div>
            </div>

          </div>
      </section>


      <div className={isModalOpen ? "sideModalContainer sideModalContainer__show" : "sideModalContainer"}>
        <SideModal isOpen={isModalOpen} onClose={closeModal} imageURL01={selectedImage} imageURL02="" imageURL03="" title={selectedTitle} description_01={selectedDescription_01} description_02={selectedDescription_02} description_03={selectedDescription_03} />
      </div>
      

      {/* FOOTER */}
      <Footer showRequestQuote={true} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
    
  );
}
