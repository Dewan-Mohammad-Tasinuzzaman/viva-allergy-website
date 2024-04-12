'use client'


import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";



interface PatientJourneyCardProps {
    header: string;
    step_number: string;
    description: React.ReactNode;
    banner_URL: string;
}


const PatientJourneyCard: React.FC<PatientJourneyCardProps> = ({ header, step_number, description, banner_URL }) => {


  return (
    <div className="journey-card">
        <div className="journey-card__container">
            <h3 className="journey-card__container_header">{header}</h3>
            <h3 className="journey-card__container_number">{step_number}</h3>
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