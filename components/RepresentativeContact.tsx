import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Phone_Icon from '@/public/assets/svgs/phone_icon.svg';
import Email_Icon from '@/public/assets/svgs/email_icon.svg';
import Email_Icon_White from '@/public/assets/svgs/email_icon-white.svg';


interface RepresentativeContactProps {
    img_href: string;
    name: string;
    title: string;
    phone: string;
    email_btn_label: string;
    email: string;
}

const RepresentativeContact: React.FC<RepresentativeContactProps> = ({ img_href, name, title, phone, email_btn_label, email }) => {

    const handleEmailButtonClick = () => {
        window.location.href = 'mailto:' + email;
    };

  return (
    <div className='representative'>
        <div className="representative__container">
            <div className="representative__container_picture">
                <Image src={img_href} fill={true} alt="rep photo" unoptimized={true} className="representative__container_picture-img" />
            </div>
            <div className="representative__container_details">
                <h3 className="representative__container_details-name">{name}</h3>
                <p className="representative__container_details-title">{title}</p>
                <div className="representative__container_details-info">
                    <Image src={Phone_Icon} fill={false} alt="phone icon" unoptimized={true} className="representative__container_details-info--icon" />
                    <p className="representative__container_details-info--text">{phone}</p>
                </div>
                <div className="representative__container_details-info">
                    <Image src={Email_Icon} fill={false} alt="email icon" unoptimized={true} className="representative__container_details-info--icon" />
                    <p className="representative__container_details-info--text">{email}</p>
                </div>
                <div className='representative__container_details-button' onClick={handleEmailButtonClick}>
                    <div className="representative__container_details-button--text">{email_btn_label}</div>
                    <Image src={Email_Icon_White} fill={false} alt="email icon" unoptimized={true} className="representative__container_details-button--icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepresentativeContact