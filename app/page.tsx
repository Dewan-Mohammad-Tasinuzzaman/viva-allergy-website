'use client'; // Converted to client component
import Image from "next/image";
import "../styles/main.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import BannerImage from "@/public/assets/images/home-banner-photo-enhanced.jpg"

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
              opacity: [0.98, 0.9],
              scale: [1.05, 1, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
            },
          ]}
          className="w-full aspect-2-1 hero-image"
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
