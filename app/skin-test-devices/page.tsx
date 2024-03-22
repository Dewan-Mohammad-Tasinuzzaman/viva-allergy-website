'use client';

import React from 'react'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Plus_Icon from '@/public/assets/svgs/plus_icon-dark.svg';
import Comforten_Illustration from '@/public/assets/svgs/skin-tests_illustration.svg';
import { ParallaxBanner } from "react-scroll-parallax";

const SkinTestPage = () => {

  // Images for ParallaxBanner
  const Quintip_Img = "/assets/images/quintip.png";

  return (
    <main className='pos-relative'>
      
      {/* 3D - Viewer */}
      <div className="skintests__3dcontainer">
        <div className="skintests__3dcontainer_3dviewer">
          <Spline className='skintests__3dcontainer_3dviewer-scene' scene="https://prod.spline.design/1GvAbMbhHd-MbPbZ/scene.splinecode" />
        </div>
      </div>

      {/* Main - Content */}
      <div className="skintests">

        <div className="skintests__introContainer">
          <div className="skintests__intro">
            <h1 className="skintests__intro_text">Skin-Test <span className="skintests__intro_text-span">Devices</span></h1>
            <div className="keepScrolling skintests__intro_keepScrolling">
                <Image src={Plus_Icon} alt="Logo" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1 skintests__intro_keepScrolling-icons" />
                <p className="keepScrolling__text skintests__intro_keepScrolling-text">Keep Scrolling</p>
                <Image src={Plus_Icon} alt="Logo" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2 skintests__intro_keepScrolling-icons" />
            </div>
          </div>
        </div>

        <section id='skin-test-devices' className='skin-test-devices'>
          <div className="skintests__features page-margins-big">
            <div className="skintests__features_info">
              <h2 className="skintests__features_info-title"><span className="skintests__features_info-title--span01"></span>Designed For <span className="skintests__features_info-title--span02">Patient Comfort</span></h2>
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

          <div className="skintests__quintip">
            <div className="skintests__quintip_banner">
              <ParallaxBanner
                layers={[
                  {
                    image: Quintip_Img,
                    speed: -50,
                    translateY: [0, 35],
                    opacity: [1, 1],
                    scale: [1, 1, 'easeOutCubic'],
                    shouldAlwaysCompleteAnimation: true,
                  },
                ]}
                className="w-full aspect-2-1 skintests__quintip_banner-img"
              />
            </div>
            <div className="skintests__quintip_info">
              <h2 className="skintests__quintip_info-title">Quintip®</h2>
              <p className="skintests__quintip_info-text">Easily integrate a single extract into your existing setup. With Quintip® you can enjoy all the benefits of the ComforTen® Device, including stainless steel lancet tips and a 1.2mm depth guard while streamlining your allergenic testing process.</p>
            </div>
          </div>
        </section>

      </div>

    </main>
  )
}

export default SkinTestPage