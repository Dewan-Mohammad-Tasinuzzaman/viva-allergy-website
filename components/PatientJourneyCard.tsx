'use client'


import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import Link from 'next/link'
import Image from "next/image";
import Viva_Icon from "@/public/assets/svgs/logo_icon-black.svg";
import Viva_Icon_White from "@/public/assets/svgs/logo_icon-white.svg";


interface PatientJourneyCardProps {
    header: string;
    step_number: string;
    description: React.ReactNode;
    banner_URL: string;
    colorClassName: string;
}


const PatientJourneyCard: React.FC<PatientJourneyCardProps> = ({ header, step_number, description, banner_URL, colorClassName }) => {


  return (
    <div className="journey-card">
        <Image src={Viva_Icon} alt="viva icon" unoptimized={true} className="journey-card--icon" />
        <div className="journey-card__container">
            <h3 className="journey-card__container_header">{header}</h3>
            <div className={`journey-card__container_numbox ${colorClassName}`}>
              <h3 className="journey-card__container_numbox-number">{step_number}</h3>
              <div className="journey-card__container_numbox-filter"></div>
            </div>
            <div>{description}</div>
            <ParallaxBanner
            layers={[
                {
                image: banner_URL,
                speed: -40,
                translateY: [0, 10],
                opacity: [1, 1],
                scale: [1.3, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
                },
            ]}
            className="w-full aspect-2-1 journey-card__container_img"
            />
        </div>
    </div>
  )
}

export default PatientJourneyCard