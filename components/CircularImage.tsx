import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";

interface CircularImageProps {
  img_href: string;
  classNameContainer: string;
  classNameImage: string;
  classNameFilter: string;
}

const CircularImage: React.FC<CircularImageProps> = ({ img_href, classNameContainer, classNameImage, classNameFilter }) => {
  return (
    <div className={`circularImage ${classNameContainer}`}>
        <ParallaxBanner
        layers={[
            {
            image: img_href,
            speed: -80,
            translateY: [0, 30],
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
