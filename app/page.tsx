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
              speed: -300,
              translateY: [0, 20],
              opacity: [0.98, 0.98],
              scale: [1.05, 1, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
            },
          ]}
          className="w-full aspect-2-1 hero__image"
        />
        <div className="hero__filter"></div>
        <div className="banner-shadow"></div>
        

        <div className="hero__maincontainer">

          <div className="hero__maincontainer-start">

            <div className="hero__content">
              <h2 className="hero__content_subheader-1">We Are Providing Excellence<br/>In Partnership with<br/><span className="hero__content_subheading-1--link">Hollisterstier</span></h2>
              <div className="hero__content_centercontainer">
                <h1 className="hero__content_centercontainer-heading">Over 65 Years Of Allergy</h1>
                <Link className='hero__content_centercontainer-link' href="/get-started">Explore</Link>
              </div>
              <h2 className="hero__content_subheader-2">Sole Supplier of Venom<br/>Immunotherapy Treatment<br/>in Canada</h2>
            </div>

            {/* Keep Scrolling */}

          </div>

          <div className="hero__maincontainer-end">
            FORM
          </div>

        </div>

      </div>

      <div className="bg-white">
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
