import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import Image from 'next/image';
import Info_Icon from '@/public/assets/svgs/info_icon.svg';

interface AllergyExtractProps {
  title: string;
  description: string;
  imageURL: string;
  className: string;
  onClick: () => void;
}

const AllergyExtract: React.FC<AllergyExtractProps> = ({ title, description, imageURL, className, onClick }) => {
  return (
    <div className={`allergyExtract ${className}`} onClick={onClick}>

      {/* picture */}
      <div className={`allergyExtract__pictureContainer`}>
        <ParallaxBanner
          layers={[
              {
              image: imageURL,
              speed: -50,
              translateY: [0, 0],
              scale: [1, 1.2, 'easeOutCubic'],
              shouldAlwaysCompleteAnimation: true,
              },
          ]}
          className={`aspect-1-1 allergyExtract__pictureContainer_img`}
          />
          <div className={`allergyExtract__pictureContainer_filter`}></div>
      </div>

      {/* title */}
      <h2 className={`allergyExtract__title`}>{title}</h2>

      <div className={`allergyExtract__interaction`}>
          <div className="allergyExtract__interaction_base"></div>
          <div className="allergyExtract__interaction_top">
            <Image src={Info_Icon} alt="collapse icon" unoptimized={true} className="allergyExtract__interaction_top-infoIcon" />
          </div>
      </div>

    </div>
  )
}

export default AllergyExtract
