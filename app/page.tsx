'use client'; // Converted to client component


import Image from "next/image";
import "@/styles/main.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import Link from 'next/link'
import KeepScrolling from "@/components/KeepScrolling";
import MiniQuoteForm from "@/app/MiniQuoteForm";
import ButtonPrimary from "@/components/ButtonPrimary";
import CircularImage from "@/components/CircularImage";
import AllergyExtract from "@/components/AllergyExtract";
import { useState } from "react";
import SideModal from "@/components/SideModal";

export default function Home() {


    // Convert the image import to a string URL
    const homeBannerImage = "/assets/images/home-banner-photo-enhanced-cropped.jpg";
    const apDogImage = "/assets/images/ap-dog-image.jpg";
    const beeImage = "/assets/images/bee-image-1.jpg";
    const allergyImageVenom = "/assets/images/venoms_icon.png";
    const allergyImageEpidermal = "/assets/images/epidermals_dog_icon.png";
    const allergyImageMites = "/assets/images/mites_icon.png";
    const allergyImagePollen = "/assets/images/grass-pollen_icon.png";
    const allergyImageInsects = "/assets/images/insect_icon.png";
    const allergyImageMolds = "/assets/images/molds_icon.png";


    // FOR MODAL (Opening and closing)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (title: string, description: string, image: string) => {
      setIsModalOpen(true);
      setSelectedTitle(title);
      setSelectedDescription(description);
      setSelectedImage(image);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedTitle('');
      setSelectedDescription('');
      setSelectedImage('');
    };


  return (

    <main>

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

            <div className="hero__content mix-blend-diff page-span-big">
              <div className="hero__content_subcontainer1">
                <h2 className="hero__content_subcontainer1-subheader--1">
                  We&apos;re Providing Excellence<br/>
                  In Partnership with<br/>
                  <Link className='hero__content_subcontainer1-subheader--1---link' href="#">Hollisterstier</Link>
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

            <div className='hero__maincontainer-start--linkbox'><Link className='hero__maincontainer-start--link' href="#section-allergy-extracts">Explore</Link></div>

            {/* Keep Scrolling */}
            <div className="hero__maincontainer-start--keepScrolling">
              <KeepScrolling />
            </div>

          </div>

          <div className="hero__maincontainer-end">
            <div className="hero__form">
              <MiniQuoteForm />
            </div>
          </div>

        </div>

      </div>

      <section id="section-allergy-extracts" className="allergy-extracts page-margins-big">
          <div className="allergy-extracts__intro">
            <div className="allergy-extracts__intro_content">
              <h3 className="header-primary allergy-extracts__intro_content-header">Allergy Extracts</h3>
              <p className="text-primary allergy-extracts__intro_content-text">
                <span className="marg-left-small"></span>With a commitment to excellence, Viva Allergy offers a wide selection of premium allergy extracts. Be empowered to proactively and efficiently meet the specific requirements of your patients, ensuring optimal care and improved well-being.
              </p>
              <div className="allergy-extracts__intro_content-link">
                <ButtonPrimary href="/product-catalogue" label="Product Catalogue" />
              </div>
            </div>

            <div className="allergy-extracts__intro_photos">
              <div className="allergy-extracts__intro_photos-container">
                  <CircularImage img_href={beeImage} classNameContainer="allergy-extracts__intro_photos-1" classNameImage="allergy-extracts__intro_photos-1--image" classNameFilter="allergy-extracts__intro_photos-1--filter" />
                  <CircularImage img_href={apDogImage} classNameContainer="allergy-extracts__intro_photos-2" classNameImage="allergy-extracts__intro_photos-2--image" classNameFilter="allergy-extracts__intro_photos-2--filter" />
              </div>
            </div>
          </div>

          <div className="allergy-extracts__extracts">
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Venom" description="" imageURL={allergyImageVenom} onClick={() => openModal('Venom', 'As the sole venom extract supplier in North America, we remain dedicated to ensuring adequate supply and quality product.', allergyImageVenom)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Epidermal" description="" imageURL={allergyImageEpidermal} onClick={() => openModal('Epidermal', 'The only extract on the market fulfilling the practice parameter’s recommended dosing of 15 mcg of Can f 1.', allergyImageEpidermal)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Mite" description="" imageURL={allergyImageMites} onClick={() => openModal('Mite', 'Rely on our 30,000 au/mL mite for diagnosing patients.', allergyImageMites)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Pollen" description="" imageURL={allergyImagePollen} onClick={() => openModal('Pollen', 'Our inventory of over 70 pollen extracts allows you to test and treat based on local-to-you pollens.', allergyImagePollen)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Insect" description="" imageURL={allergyImageInsects} onClick={() => openModal('Insect', 'Diagnose and treat fire ant and cockroach allergy patients with our insect extracts.', allergyImageInsects)} />
            <AllergyExtract className="allergy-extracts__extracts_extract" title="Mold" description="" imageURL={allergyImageMolds} onClick={() => openModal('Mold', 'Current practice parameters recommend using the strongest concentrates available and our molds are 1:10 w/v strength.', allergyImageMolds)} />
          </div>
      </section>


      <div className={isModalOpen ? "sideModalContainer sideModalContainer__show" : "sideModalContainer"}>
        <SideModal isOpen={isModalOpen} onClose={closeModal} imageURL01={selectedImage} imageURL02="" imageURL03="" title={selectedTitle} description={selectedDescription} />
      </div>
    </main>
    
  );
}
