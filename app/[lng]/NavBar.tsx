'use client'; // Converted to client component

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
import Logo_Gradient from '@/public/assets/svgs/logo_icon-gradient.svg';
import Logo_Text from '@/public/assets/svgs/logo_text-only.svg';
import Arrow_Icon from '@/public/assets/svgs/down_arrow-icon.svg';
import NewTab_Icon from '@/public/assets/svgs/new_tab-icon.svg';
import Plus_Icon from '@/public/assets/svgs/plus_icon.svg';
import { useTranslation } from '../i18n/client';
import { languages } from '../i18n/settings'





// Define the props type for the NavBar component
type NavBarProps = {
  params: {
    lng: string;
  };
};


export default function NavBar({ params: { lng } }: NavBarProps) {


  // Language
  const { t } = useTranslation(lng, 'navbar');


  // To use this, we must convert this component to a Client Componenet
  const currentPath = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false); // State to control mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  // For sub-menus
  // products
  const [isHoverProducts, setIsHoverProducts] = useState(false);
  // about
  const [isHoverAbout, setIsHoverAbout] = useState(false);



  // Sticky-Effect
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const isScrolledDown = currentScrollTop > lastScrollTop;

      setLastScrollTop(currentScrollTop);

      // If scrolled down or at the top of the page, show the navbar
      setIsNavBarVisible(!isScrolledDown || currentScrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const navbarClass = isNavBarVisible ? 'navbar' : 'navbar navbar-hidden';

  return (
    <>

      {/* Desktop Nav */}
      <nav ref={navBarRef} className={navbarClass}>
        <Link href={`/${lng}`}>
          <div className="navbar__logoContainer">
            <div className="navbar__logoContainer_logoBox">
              <Image src={Logo_Gradient} alt="Logo" unoptimized={true} className="navbar__logoContainer_logoBox-logo" />
            </div>
            <div className="navbar__logoContainer_textBox">
              <Image src={Logo_Text} alt="Logo" unoptimized={true} className="navbar__logoContainer_textBox-text" />
            </div>
          </div>
        </Link>
        
        <ul className={`navbar__options ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
          <div className={`navbar__options_collapseContainer`} onClick={closeMobileMenu}>
              <div className="navbar__options_collapseContainer-button" >
                  <Image src={Plus_Icon} alt="collapse icon" unoptimized={true} className="navbar__options_collapseContainer-button--icon" />
              </div>
          </div>
          <li className='navbar__options_item'>
            <Link onClick={closeMobileMenu} className={`${`/${lng}` === currentPath ? 'active-page-nav' : ''} navbar__options_item-link`} href={`/${lng}`}>{t('home')}</Link>
          </li>
          <li onMouseEnter={() => setIsHoverProducts(true)} onMouseLeave={() => setIsHoverProducts(false)} className='navbar__options_item'>
            <div className="flex align-items-center">
              <p className={`${(`/${lng}/venom-extracts` === currentPath || `/${lng}/product-catalogue` === currentPath || `/${lng}/order-forms` === currentPath || `/${lng}/skin-test-devices` === currentPath || `/${lng}/allergist-locator` === currentPath) ? 'active-page-nav' : ''} navbar__options_item-link`}>{t('products')}</p>
              <Image src={Arrow_Icon} alt="down-arrow" unoptimized={true} className="navbar__options_item-arrow" />
            </div>
            <ul onMouseEnter={() => setIsHoverProducts(true)} className={`${isHoverProducts ? 'show-sub-menu' : ''} sub-menu`}>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${`/${lng}/venom-extracts` === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href={`/${lng}/venom-extracts`}>{t('venom-extracts')}</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${`/${lng}/skin-test-devices` === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href={`/${lng}/skin-test-devices`}>{t('skin-test-devices')}</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${`/${lng}/product-catalogue` === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href={`/${lng}/product-catalogue`}>{t('product-catalogue')}</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${`/${lng}/order-forms` === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href={`/${lng}/order-forms`}>{t('order-forms')}</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${`/${lng}/allergist-locator` === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href={`/${lng}/allergist-locator`}>{t('allergist-locator')}</Link>
              </li>
            </ul>
          </li>
          <li onMouseEnter={() => setIsHoverAbout(true)} onMouseLeave={() => setIsHoverAbout(false)} className='navbar__options_item'>
            <div className="flex align-items-center">
              <p className={`${(`/${lng}/about` === currentPath) ? 'active-page-nav' : ''} navbar__options_item-link`}>{t('about')}</p>
              <Image src={Arrow_Icon} alt="down-arrow" unoptimized={true} className="navbar__options_item-arrow" />
            </div>
            <ul onMouseEnter={() => setIsHoverAbout(true)} className={`${isHoverAbout ? 'show-sub-menu' : ''} sub-menu`}>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${`/${lng}/about` === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href={`/${lng}/about`}>{t('about-us')}</Link>
              </li>
              <li className="sub-menu__item flex align-items-center">
                <Link onClick={closeMobileMenu} className={`sub-menu__item_link`} href="https://www.junopharm.ca/" target="_blank">{t('juno')}</Link>
                <Image src={NewTab_Icon} alt="new-tab" unoptimized={true} className="sub-menu__item_link-newtab"/>
              </li>
              <li className="sub-menu__item flex align-items-center">
                <Link onClick={closeMobileMenu} className={`sub-menu__item_link`} href="https://www.hsallergy.com/" target="_blank">{t('hollisterstier')}</Link>
                <Image src={NewTab_Icon} alt="new-tab" unoptimized={true} className="sub-menu__item_link-newtab"/>
              </li>
            </ul>
          </li>
          <li className='navbar__options_item'>
            <Link onClick={closeMobileMenu} className='btn-primary navbar__options_item-button' href={`/${lng}/contacts`}>{t('contact-us')}</Link>
          </li>
          {languages.filter((l) => lng !== l).map((l, index) => {
            return (
              <div key={l} className='navbar__options_item navbar__options_langswitch'>
                <p className="navbar__options_langswitch-text">{t('translate')}</p>
                <span className='navbar__options_langswitch-btn'>
                  {index > 0 && (' or ')}
                  <p className="navbar__options_langswitch-btn--current">{lng}</p>
                  <Link className='navbar__options_item-link navbar__options_langswitch-btn--link' href={`/${l}`}>{l}</Link>
                </span>
              </div>
            )
          })}
        </ul>

        <div className="navbar__expand-btn" onClick={toggleMobileMenu}>
          <div className="navbar__expand-btn_iconbox">
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--1"></div>
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--2"></div>
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--1"></div>
          </div>
        </div>
      </nav>
    </>
  );
}