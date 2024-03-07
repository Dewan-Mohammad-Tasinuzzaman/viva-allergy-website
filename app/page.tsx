'use client'; // Converted to client component
import Image from "next/image";
import "@/styles/main.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import Link from 'next/link'
import KeepScrolling from "@/components/KeepScrolling";
import MiniQuoteForm from "@/app/MiniQuoteForm";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function Home() {


    // Convert the image import to a string URL
    const homeBannerImage = "/assets/images/home-banner-photo-enhanced-cropped.jpg";
    const introImage01 = "/assets/images/ap-dog-image.jpg";
    const introImage02 = "/assets/images/bee-image-1.jpg";


  return (

    <main>

      <div id="section-hero" className="hero">

        <ParallaxBanner
          layers={[
            {
              image: homeBannerImage,
              speed: -70,
              translateY: [0, 20],
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

            <div className='hero__maincontainer-start--linkbox'><Link className='hero__maincontainer-start--link' href="#scroll-tester">Explore</Link></div>

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
                With a commitment to excellence, Viva Allergy offers a wide selection of premium allergy extracts. Be empowered to proactively and efficiently meet the specific requirements of your patients, ensuring optimal care and improved well-being.
              </p>
              <div className="allergy-extracts__intro_content-link">
                <ButtonPrimary href="/product-catalogue" label="Product Catalogue" />
              </div>
            </div>

            <div className="allergy-extracts__intro_photos">
              <div className="allergy-extracts__intro_photos-1">
                <ParallaxBanner
                  layers={[
                    {
                      image: introImage02,
                      speed: -50,
                      translateY: [0, 20],
                      shouldAlwaysCompleteAnimation: true,
                    },
                  ]}
                  className="aspect-1-1 allergy-extracts__intro_photos-1--img"
                />
                <div className="allergy-extracts__intro_photos-1--filter"></div>
              </div>

              <div className="allergy-extracts__intro_photos-2">
                <ParallaxBanner
                  layers={[
                    {
                      image: introImage01,
                      speed: -50,
                      translateY: [0, 20],
                      shouldAlwaysCompleteAnimation: true,
                    },
                  ]}
                  className="aspect-1-1 allergy-extracts__intro_photos-2--img"
                />
                <div className="allergy-extracts__intro_photos-2--filter"></div>
              </div>
            </div>
          </div>
      </section>

      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>
      <div className="scroll">SCROLL</div>

    </main>
    
  );
}
