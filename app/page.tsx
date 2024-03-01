'use client'; // Converted to client component

import Image from "next/image";
import { ParallaxBanner } from 'react-scroll-parallax';
import "../styles/main.scss";
import HomeBannerImage from "../public/assets/images/home-banner-photo-enhanced.jpg";

export default function Home() {


    // Convert the image import to a string URL
    const homeBannerImageUrl = "./assets/images/home-banner-photo-enhanced.jpg";


  return (

    <main>

      <div id="section-hero" className="hero">

        {/* <Image src={HomeBannerImage} alt="Home Banner Image" unoptimized={true} className="hero-image" /> */}
        <ParallaxBanner
            layers={[{ image: homeBannerImageUrl, speed: -15 }]}
            className="aspect-[2/1] hero-image"
        />
        <div className="hero__filter"></div>

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
      </div>

    </main>
  );
}
