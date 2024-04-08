import React from 'react';
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import ButtonPrimary from "@/components/ButtonPrimary";

const ProductCataloguePage = () => {
  return (
    <main className='pos-relative'>

      <div className="product-catalogue">

        <h1 className="header-primary page-margins-small product-catalogue__header">Product Catalogue</h1>

        <div className='product-catalogue__catalogue-container'>
          <iframe
            className='product-catalogue__catalogue-container_catalogue'
            style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 }}
            src="https://online.fliphtml5.com/phqel/uwwe/"
            seamless={true}
            scrolling="no"
            frameBorder="0"
            allowTransparency={true}
            allowFullScreen
          ></iframe>
        </div>

        <div className="product-catalogue__button-container">
          <ButtonPrimary href="/#" label="Download" />
        </div>
      </div>



      {/* FOOTER */}
      <Footer showRequestQuote={true} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
  );
};

export default ProductCataloguePage;
