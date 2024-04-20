'use client';

import React, { useRef, useState } from 'react'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Logo_Icon_White from '@/public/assets/svgs/logo_icon-white.svg';
import Plus_Icon_Dark from '@/public/assets/svgs/plus_icon-dark.svg';
import Plus_Icon_White from '@/public/assets/svgs/plus_icon.svg';
import Comforten_Illustration from '@/public/assets/svgs/skin-tests_illustration.svg';
import Comforten_Img01 from '@/public/assets/images/comforten-1.png';
import Comforten_Img02 from '@/public/assets/images/comforten-2.png';
import Comforten_Img03 from '@/public/assets/images/comforten-3.png';
import Play_Icon from '@/public/assets/svgs/play_icon-grey.svg';
import Video_Image from '@/public/assets/images/allergy_skin-test_products-edited-notitle.png';
import { ParallaxBanner } from "react-scroll-parallax";
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';

const SkinTestPage = () => {

  // Images for ParallaxBanner
  const Quintip_Img_URL = "/assets/images/quintip.png";
  const Comforten_Img01_URL = "/assets/images/comforten-1.png";
  const Comforten_Img02_URL = "/assets/images/comforten-2.png";
  const Comforten_Img03_URL = "/assets/images/comforten-3.png";
  const Quintip_Banner_Img_URL = "/assets/images/3d_quintip_img.png";

  // Video file path
  const SkinTestVideo_URL = "/assets/videos/comforten-video-subbed.mp4";

  // State to manage the visibility of the video container
  const [showVideo, setShowVideo] = useState(false);

  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to toggle the visibility of the video container and play/pause the video
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    // If video is currently playing, pause it and hide the container
    if (showVideo) {
      video.pause();
      setShowVideo(false);
    } else {
      // If video is not playing, play it and show the container
      video.play();
      setShowVideo(true);
    }
  };


  const [selectedImage, setSelectedImage] = useState(Comforten_Img01_URL);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const handleOptionClick = (index: React.SetStateAction<number>, imageUrl: React.SetStateAction<string>) => {
    setSelectedImage(imageUrl);
    setSelectedOptionIndex(index);
  };

  return (
    <main className='pos-relative'>
      
      {/* 3D - Viewer */}
      <div className="skintests__3dcontainer">
        <ParallaxBanner
          layers={[
              {
              image: Quintip_Banner_Img_URL,
              speed: -50,
              translateY: [0, 10],
              scale: [1.1, 1, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
              },
          ]}
          className={`skintests__3dcontainer_img`}
        />
        <div className="skintests__3dcontainer_3dviewer">
          <Spline className='skintests__3dcontainer_3dviewer-scene' scene="https://prod.spline.design/Gri41IhbhKqM7uP5/scene.splinecode" />
        </div>
      </div>

      {/* Main - Content */}
      <div className="skintests">

        <div className="skintests__introContainer">
          <div className="page-margins-big skintests__intro">
            <h1 className="header-tertiary skintests__intro_header">Skin Test <span className="skintests__intro_header-span">Devices</span></h1>
            <p className="text-secondary skintests__intro_body">Our skin test device systems, ComforTen® and Quintip®, offer you quick and easy setup for efficient and reproducible testing experiences.</p>
            <div className="keepScrolling skintests__intro_keepScrolling">
                <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1 skintests__intro_keepScrolling-icons" />
                <p className="keepScrolling__text skintests__intro_keepScrolling-text">Keep Scrolling</p>
                <Image src={Plus_Icon_Dark} alt="plus icon" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2 skintests__intro_keepScrolling-icons" />
            </div>
          </div>
        </div>

        <section id='skin-test-devices' className='skin-test-devices'>
          <div className="skintests__features page-margins-big">
            <div className="skintests__features_info">
              <h2 className="skintests__features_info-title">Designed For <span className="skintests__features_info-title--span">Patient Comfort</span></h2>
              <div className="skintests__features_info-feature">
                <span className="skintests__features_info-feature--bullet"></span>
                <p className="skintests__features_info-feature--text">A translucent tray for easy antigen inspection</p>
              </div>
              <div className="skintests__features_info-feature">
                <span className="skintests__features_info-feature--bullet"></span>
                <p className="skintests__features_info-feature--text">Removable reservoirs to minimize mistakes</p>
              </div>
              <div className="skintests__features_info-feature">
                <span className="skintests__features_info-feature--bullet"></span>
                <p className="skintests__features_info-feature--text">Collars to prevent foreign material and evaporation</p>
              </div>
              <div className="skintests__features_info-feature">
                <span className="skintests__features_info-feature--bullet"></span>
                <p className="skintests__features_info-feature--text">Reproducible results and minimal patient discomfort</p>
              </div>
            </div>

            <div className="skintests__features_illustrations">
              <div className="skintests__features_illustrations-container">
                <div className="skintests__features_illustrations-container--circle"></div>
                <Image src={Comforten_Illustration} alt="Skin-Test Device Illustration" unoptimized={true} className="skintests__features_illustrations-container--img" />
              </div>
            </div>
          </div>

          {/* Quintip */}
          <div className="skintests__quintip">
            <div className="skintests__quintip_banner">
              <ParallaxBanner
                layers={[
                  {
                    image: Quintip_Img_URL,
                    speed: -50,
                    translateY: [0, 35],
                    opacity: [1, 1],
                    scale: [1.1, 1, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                  },
                ]}
                className="w-full aspect-2-1 skintests__quintip_banner-img"
              />
            </div>
            <div className="skintests__quintip_info">
              <h2 className="header-secondary skintests__quintip_info-title">Quintip®</h2>
              <p className="text-primary skintests__quintip_info-text">Easily integrate a single extract into your existing setup. With Quintip®, you can enjoy all the benefits of the ComforTen® Device, including stainless steel lancet tips and a 1.2mm depth guard, while streamlining your allergenic testing process.</p>
            </div>
          </div>

          {/* Comforten */}
          <div className="skintests__comforten">
            <div className="skintests__comforten_banner">
              <ParallaxBanner
                layers={[
                  {
                    image: selectedImage,
                    speed: -50,
                    translateY: [0, 35],
                    opacity: [1, 1],
                    scale: [1.1, 1, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                  },
                ]}
                className="w-full aspect-2-1 skintests__comforten_banner-img"
              />
              <div className="skintests__comforten_banner-selector">
                <div className={`skintests__comforten_banner-selector--option ${selectedOptionIndex === 0 ? 'skintests__comforten_banner-selector--option--selected' : ''}`} onMouseEnter={() => handleOptionClick(0, Comforten_Img01_URL)}>
                  <Image src={Comforten_Img01} alt="Skin-Test Device Illustration" unoptimized={true} className="skintests__comforten_banner-selector--option---img" />
                </div>
                <div className={`skintests__comforten_banner-selector--option ${selectedOptionIndex === 1 ? 'skintests__comforten_banner-selector--option--selected' : ''}`} onMouseEnter={() => handleOptionClick(1, Comforten_Img02_URL)}>
                  <Image src={Comforten_Img02} alt="Skin-Test Device Illustration" unoptimized={true} className="skintests__comforten_banner-selector--option---img" />
                </div>
                <div className={`skintests__comforten_banner-selector--option ${selectedOptionIndex === 2 ? 'skintests__comforten_banner-selector--option--selected' : ''}`} onMouseEnter={() => handleOptionClick(2, Comforten_Img03_URL)}>
                  <Image src={Comforten_Img03} alt="Skin-Test Device Illustration" unoptimized={true} className="skintests__comforten_banner-selector--option---img" />
                </div>
              </div>
            </div>
            <div className="skintests__comforten_info">
              <h2 className="header-secondary skintests__comforten_info-title">Comforten®</h2>
              <p className="text-primary skintests__comforten_info-text">Test ten extracts at once with the ComforTen Multiple Skin Test System®, available in a 30-hole or 60-hole tray. Enjoy all the benefits of our skin test device systems, along with optional-use spacers that increase testing capacity.</p>
            </div>
          </div>


          <div id='video' className="skintests__instructions">
            <div className="page-margins-big skintests__instructions_container">
              <div className="skintests__instructions_video">
                  <div className="skintests__instructions_video-logobox">
                    <Image src={Logo_Icon_White} alt="Logo" unoptimized={true} className="skintests__instructions_video-logobox--logo" />
                    <div className="skintests__instructions_video-logobox--filter"></div>
                  </div>
                <div className="skintests__instructions_video-card" onClick={toggleVideo}>
                  <div className="skintests__instructions_video-card--imageContainer">
                    <Image src={Video_Image} alt="video-thumbnail" unoptimized={true} className="skintests__instructions_video-card--imageContainer---image" />
                    <div className="skintests__instructions_video-card--imageContainer---filter"></div>
                  </div>
                  <div className="skintests__instructions_video-card--playCircle">
                    <Image src={Play_Icon} alt="play-icon" unoptimized={true} className="skintests__instructions_video-card--playCircle---playIcon" />
                  </div>
                </div>
              </div>

              <div className="skintests__instructions_info">
                <h2 className="header-secondary skintests__instructions_info-title">Comforten® - Device in Action</h2>
                <p className="text-primary skintests__instructions_info-text">
                  Watch this video to learn more about the skin test device system. You&apos;ll discover how ComforTen® elevates the allergy testing experience and receive a demo on how easy it is.
                  <br/>
                  We provide this product in partnership with <span className="text-primary skintests__instructions_info-text--span">HollisterSteir</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      


      
      {/* VIDEO POP-UP */}
      <div className={`skin-tests-vidcontainer ${showVideo ? 'show-skin-test-video' : ''}`}>
        <div className="skin-tests-vidcontainer-elementsContainer">
          <div className="skin-tests-vidcontainer__button" onClick={toggleVideo}>
            <Image src={Plus_Icon_White} alt="cross icon" unoptimized={true} className="skin-tests-vidcontainer__button_icon" />
          </div>
          <video ref={videoRef} className="skin-tests-vidcontainer__source" controls>
            <source src={SkinTestVideo_URL} type="video/mp4" />
            <source src={SkinTestVideo_URL} type="video/webm" />
            {/* Add more source elements for different formats if necessary */}
            Your browser does not support the video tag. Time to switch!
          </video>
        </div>
      </div>


      {/* FOOTER */}
      <Footer showRequestQuote={true} />


      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
  )
}

export default SkinTestPage