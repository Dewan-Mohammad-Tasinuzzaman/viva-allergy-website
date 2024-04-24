'use client'

import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import BeeIllustration from '@/public/assets/svgs/bee-illustration-footer.svg';
import Logo_White from '@/public/assets/svgs/logo_icon-white.svg';
import Logo_Cream01 from '@/public/assets/svgs/big_viva_icon-gradient-cream-01.svg';
import Logo_Cream02 from '@/public/assets/svgs/big_viva_icon-gradient-cream-02.svg';
import Logo_Full_White from '@/public/assets/svgs/logo_full-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../app/i18n/settings'
import { useTranslation } from '../app/i18n/client'



type FooterProps = {
    params: {
        lng: string;
    };
    showRequestQuote: boolean;
};


export default function Footer({ params: { lng }, showRequestQuote }: FooterProps) {

    // Language
    const { t } = useTranslation(lng, 'footer')

    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
    <footer className="footer">
        {showRequestQuote && (
                <div className="footer__request-quote">
                    <Image src={BeeIllustration} alt="Bee Illustration" unoptimized={true} className="footer__request-quote_illustration" />
                    <div className="footer__request-quote_content page-margins-big">
                        <h3 className="header-primary footer__request-quote_content-header">{t('contact-us-title')}</h3>
                        <p className="text-primary footer__request-quote_content-text">
                            <span className="marg-left-small"></span>{t('contact-us-description')}
                        </p>
                        <Link className='btn-primary footer__request-quote_content-button' href="/contacts">{t('get-started')}</Link>
                    </div>
                </div>
            )}

        <div className="footer__main">
            <Image src={Logo_Cream01} alt="logo background" unoptimized={true} className="footer__main_logo" />
            <div className="page-span-small footer__main_content">
                <div className="footer__main_content-segment footer__main_content-segment01">
                    <h4 className="footer-title footer__main_content-segment01--about-title">{t('about-title')}</h4>
                    <p className="footer-text footer__main_content-segment01--text">{t('about-description')}</p>
                    <div className="footer__main_content-segment01--followbox">
                        <h4 className="footer__main_content-segment01--followbox---follow-title">{t('follow-us')}</h4>
                        <div className="footer__main_content-segment01--followbox---linksbox">
                            <div className="footer__main_content-segment01--followbox---linksbox-linkcircle">
                                <Link href='https://www.linkedin.com/showcase/viva-allergy/' target="_blank" className="footer__main_content-segment01--followbox---linksbox-linkcircle--linker">
                                    <FontAwesomeIcon icon={faLinkedinIn} className='footer__main_content-segment01--followbox---linksbox-linkcircle--icon' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__main_content-segment footer__main_content-segment02">
                    <div className="footer__main_content-segment02--extracts">
                        <h4 className="footer-title footer__main_content-segment02--extracts---title">{t('allergy-extracts')}</h4>
                        <Link className='footer-link footer__main_content-segment02--extracts---link' href="/venom-extracts">{t('allergy-extracts-link01')}</Link>
                        <Link className='footer-link footer__main_content-segment02--extracts---link' href="/product-catalogue">{t('allergy-extracts-link02')}<span className='footer__main_content-segment02--extracts---link----span'>{t('allergy-extracts-link02-span')}</span></Link>
                        <Link className='footer-link footer__main_content-segment02--extracts---link' href="/order-forms">{t('allergy-extracts-link03')}<span className='footer__main_content-segment02--extracts---link----span'>{t('allergy-extracts-link03-span')}</span></Link>
                    </div>
                    <div className="footer__main_content-segment02--skintests">
                        <h4 className="footer-title footer__main_content-segment02--skintests---title">{t('skin-tests')}</h4>
                        <Link className='footer-link footer__main_content-segment02--skintests---link' href="/skin-test-devices">{t('skin-tests-link01')}</Link>
                        <Link className='footer-link footer__main_content-segment02--skintests---link' href="/skin-test-devices">{t('skin-tests-link02')}</Link>
                    </div>
                </div>
                <div className="footer__main_content-segment footer__main_content-segment03">
                    <div className="footer__main_content-segment03--about">
                        <h4 className="footer-title footer__main_content-segment03--about---title">{t('about-us')}</h4>
                        <Link className='footer-link footer__main_content-segment03--about---link' href="/about">{t('about-us-link01')}</Link>
                        <Link className='footer-link footer__main_content-segment03--about---link' href="/contacts">{t('about-us-link02')}</Link>
                    </div>
                    <div className="footer__main_content-segment03--partners">
                        <h4 className="footer-title footer__main_content-segment03--partners---title">{t('our-partners')}</h4>
                        <Link className='footer-link footer__main_content-segment03--partners---link' href="https://www.junopharm.ca/" target="_blank">{t('our-partners-link01')}</Link>
                        <Link className='footer-link footer__main_content-segment03--partners---link' href="https://www.hsallergy.com/" target="_blank">{t('our-partners-link02')}</Link>
                    </div>
                    <div className="footer__main_content-segment03--contact">
                        <Image src={Logo_Full_White} alt="Viva Allergy logo with icon" unoptimized={true} className="footer__main_content-segment03--contact---logo" />
                        <p className="text-primary footer__main_content-segment03--contact---text">
                        {t('address-span01')}<br/>
                        {t('address-span02')}<br/>
                        {t('address-span03')}<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__copyrightbox">
            <h5 className="footer__copyrightbox_text">©{currentYear} <span className="footer__copyrightbox_text-span">VIVA ALLERGY</span> | {t('copyright-text')}</h5>
        </div>
    </footer>
    )
}