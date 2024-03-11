import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import BeeIllustration from '@/public/assets/svgs/bee-illustration-footer.svg';
import Logo_White from '@/public/assets/svgs/logo_icon-white.svg';
import Logo_Cream01 from '@/public/assets/svgs/big_viva_icon-gradient-cream-01.svg';
import Logo_Cream02 from '@/public/assets/svgs/big_viva_icon-gradient-cream-02.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

const Footer = () => {

    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
    <footer className="footer">
        <div className="footer__request-quote">
            <Image src={BeeIllustration} alt="Bee Illustration" unoptimized={true} className="footer__request-quote_illustration" />
            <div className="footer__request-quote_content page-margins-big">
                <h3 className="header-primary footer__request-quote_content-header">Request a Quote</h3>
                <p className="text-primary footer__request-quote_content-text">
                    <span className="marg-left-small"></span>Our knowledgeable customer service representatives are available to take your order<br/>or answer any questions you have about our products.
                </p>
                <Link className='btn-primary footer__request-quote_content-button' href="/get-started">Get Started</Link>
            </div>
        </div>

        <div className="footer__main">
            <Image src={Logo_Cream01} alt="logo background" unoptimized={true} className="footer__main_logo" />
            <div className="page-span-small footer__main_content">
                <div className="footer__main_content-segment footer__main_content-segment01">
                    <h4 className="footer-title footer__main_content-segment01--about-title">About Viva Allergy</h4>
                    <p className="footer-text footer__main_content-segment01--text">We&apos;re dedicated to bringing vitality back to your life by redefining the way you conquer allergies. At Viva Allergy, we offer a unique and personalized approach to allergy relief. Our allergen extracts are carefully crafted to target your specific sensitivities, providing not just relief from symptoms but a pathway to building resilience against them. Discovering your allergies has never been easier, thanks to our innovative tools that bring clarity to your sensitivities.</p>
                    <div className="footer__main_content-segment01--followbox">
                        <h4 className="footer__main_content-segment01--followbox---follow-title">Follow Us:</h4>
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
                        <h4 className="footer-title footer__main_content-segment02--extracts---title">Allergy Extracts</h4>
                        <Link className='footer-link footer__main_content-segment02--extracts---link' href="/venom-extracts">Venom Extracts</Link>
                        <Link className='footer-link footer__main_content-segment02--extracts---link' href="/product-catalogue">Product Catlogue - <span className='footer__main_content-segment02--extracts---link----span'>View</span></Link>
                        <Link className='footer-link footer__main_content-segment02--extracts---link' href="/scratch-form">Order Form - <span className='footer__main_content-segment02--extracts---link----span'>Download</span></Link>
                    </div>
                    <div className="footer__main_content-segment02--skintests">
                        <h4 className="footer-title footer__main_content-segment02--skintests---title">Skin-Test Devices</h4>
                        <Link className='footer-link footer__main_content-segment02--skintests---link' href="/skin-test-devices">Comforten® Multiple Skin Test Device </Link>
                        <Link className='footer-link footer__main_content-segment02--skintests---link' href="/skin-test-devices">Quintip® Skin Test Device</Link>
                    </div>
                </div>

                <div className="footer__main_content-segment footer__main_content-segment03">CONTENT</div>
            </div>
        </div>
        <div className="footer__copyrightbox">
            <h5 className="footer__copyrightbox_text">©{currentYear} <span className="footer__copyrightbox_text-span">VIVA ALLERGY</span> | All Rights Reserved</h5>
        </div>
    </footer>
    )
}

export default Footer