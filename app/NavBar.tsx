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

const NavBar = () => {

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
        <Link href="/">
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
            <Link onClick={closeMobileMenu} className={`${"/" === currentPath ? 'active-page-nav' : ''} navbar__options_item-link`} href="/">Home</Link>
          </li>
          <li onMouseEnter={() => setIsHoverProducts(true)} onMouseLeave={() => setIsHoverProducts(false)} className='navbar__options_item'>
            <div className="flex align-items-center">
              <p className={`${("/venom-extracts" === currentPath || "/product-catalogue" === currentPath || "/scratch-form" === currentPath || "/skin-test-devices" === currentPath) ? 'active-page-nav' : ''} navbar__options_item-link`}>Products</p>
              <Image src={Arrow_Icon} alt="down-arrow" unoptimized={true} className="navbar__options_item-arrow" />
            </div>
            <ul onMouseEnter={() => setIsHoverProducts(true)} className={`${isHoverProducts ? 'show-sub-menu' : ''} sub-menu`}>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${"/venom-extracts" === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href="/venom-extracts">Venom Extracts</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${"/skin-test-devices" === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href="/skin-test-devices">Skin-Test Devices</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${"/product-catalogue" === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href="/product-catalogue">Product Catalogue</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${"/order-forms" === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href="/order-forms">Order Forms</Link>
              </li>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${"/allergist-locator" === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href="/allergist-locator">Allergist Locator</Link>
              </li>
            </ul>
          </li>
          <li onMouseEnter={() => setIsHoverAbout(true)} onMouseLeave={() => setIsHoverAbout(false)} className='navbar__options_item'>
            <div className="flex align-items-center">
              <p className={`${("/about" === currentPath) ? 'active-page-nav' : ''} navbar__options_item-link`}>About</p>
              <Image src={Arrow_Icon} alt="down-arrow" unoptimized={true} className="navbar__options_item-arrow" />
            </div>
            <ul onMouseEnter={() => setIsHoverAbout(true)} className={`${isHoverAbout ? 'show-sub-menu' : ''} sub-menu`}>
              <li className="sub-menu__item">
                <Link onClick={closeMobileMenu} className={`${"/about" === currentPath ? 'active-sub-menu' : ''} sub-menu__item_link`} href="/about">About Us</Link>
              </li>
              <li className="sub-menu__item flex align-items-center">
                <Link onClick={closeMobileMenu} className={`sub-menu__item_link`} href="https://www.junopharm.ca/" target="_blank">Juno Pharmaceuticals</Link>
                <Image src={NewTab_Icon} alt="new-tab" unoptimized={true} className="sub-menu__item_link-newtab"/>
              </li>
              <li className="sub-menu__item flex align-items-center">
                <Link onClick={closeMobileMenu} className={`sub-menu__item_link`} href="https://www.hsallergy.com/" target="_blank">HollisterStier</Link>
                <Image src={NewTab_Icon} alt="new-tab" unoptimized={true} className="sub-menu__item_link-newtab"/>
              </li>
            </ul>
          </li>
          <li className='navbar__options_item'>
            <Link onClick={closeMobileMenu} className='btn-primary navbar__options_item-button' href="/contacts">Contact Us</Link>
          </li>
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

export default NavBar;
