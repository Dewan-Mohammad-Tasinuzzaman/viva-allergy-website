
// Modal component
import React from 'react';
import Image from 'next/image';
import Plus_Icon from '@/public/assets/svgs/plus_icon.svg';

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageURL01: string;
  imageURL02: string;
  imageURL03: string;
  title: string;
  description: string;
}

const SideModal: React.FC<SideModalProps> = ({ isOpen, onClose, imageURL01, imageURL02, imageURL03, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="sideModal">
        <div className="sideModal__collapseContainer">
            <div className="sideModal__collapseContainer_button" onClick={onClose} >
                <Image src={Plus_Icon} alt="collapse icon" unoptimized={true} className="sideModal__collapseContainer_button-icon" />
            </div>
        </div>
        <div className="sideModal__content">
            <div className='sideModal__content_imagesContainer'>
                <div className="sideModal__content_imagesContainer-imgbox">
                    <Image src={imageURL01} fill={true} alt="extract_illustration" unoptimized={true} className="sideModal__content_imageContainer-imgbox--img sideModal__content_imageContainer-imgbox--img01" />
                    <div className="sideModal__content_imagesContainer-imgbox--filter"></div>
                </div>
            </div>
            <div className="sideModal__content_info">
                <h2 className='sideModal__content_info-title'>{title}</h2>
                <p className="sideModal__content_info-description">{description}</p>
            </div>
        </div>
    </div>
  );
};

export default SideModal;