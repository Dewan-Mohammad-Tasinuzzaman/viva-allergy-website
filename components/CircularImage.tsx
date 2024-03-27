import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";

interface CircularImageProps {
  img_href: string;
  classNameContainer: string;
  classNameImage: string;
  classNameFilter: string;
  ParallaxSpeed: number;
  ParallaxTranslateY: number;
  ParallaxScale: number;
}

const CircularImage: React.FC<CircularImageProps> = ({ img_href, classNameContainer, classNameImage, classNameFilter, ParallaxSpeed, ParallaxTranslateY, ParallaxScale }) => {
  return (
    <div className={`circularImage ${classNameContainer}`}>
        <ParallaxBanner
        layers={[
            {
            image: img_href,
            speed: ParallaxSpeed,
            translateY: [0, ParallaxTranslateY],
            scale: [1, ParallaxScale, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            },
        ]}
        className={`aspect-1-1 circularImage__img ${classNameImage}`}
        />
        <div className={`circularImage__filter ${classNameFilter}`}></div>
    </div>
  )
}

export default CircularImage
