'use client'; // Converted to client component
import Image from "next/image";
import "../styles/main.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import BannerImage from "@/public/assets/images/home-banner-photo-enhanced.jpg"
import Link from 'next/link'

export default function Home() {


    // Convert the image import to a string URL
    const homeBannerImageUrl = "./assets/images/home-banner-photo-enhanced-cropped.jpg";


  return (

    <main>

      <div id="section-hero" className="hero">

        <ParallaxBanner
          layers={[
            {
              image: homeBannerImageUrl,
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

          </div>

          <div className="hero__maincontainer-end">
            <div className="hero__form"></div>
          </div>

        </div>

      </div>

      <div className="bg-white" id="scroll-tester">
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
        <h1>SCROLL</h1>
      </div>

    </main>
    
  );
}
