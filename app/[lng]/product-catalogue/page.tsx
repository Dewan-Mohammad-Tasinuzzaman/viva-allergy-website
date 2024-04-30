
import React from 'react';
import LoadingAnimation from "@/components/LoadingAnimation";
import Footer from "@/components/Footer";
import ButtonPrimary from "@/components/ButtonPrimary";
import { useTranslation } from '../../i18n';
import CustomCursor from '@/components/CustomCursor';



type ProductCatalogueProps = {
  params: {
    lng: string;
  };
};


export default async function ProductCatalogue({ params: { lng } }: ProductCatalogueProps) {

  // Language
  const { t } = await useTranslation(lng, 'product-catalogue-page')


  return (
    <main className='pos-relative'>

      <div className="product-catalogue">

        <h1 className="header-primary page-margins-small product-catalogue__header">{t('title')}</h1>

        <div className='product-catalogue__catalogue-container'>
          <iframe
            className='product-catalogue__catalogue-container_catalogue'
            style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 }}
            src="https://online.fliphtml5.com/phqel/uwwe/"
            seamless={true}
            allowTransparency={true}
            allowFullScreen
          ></iframe>
        </div>

        <div className="product-catalogue__button-container">
          <ButtonPrimary href="/assets/files/Viva_Allergy_Product_Catalouge.pdf" target='blank' label={t('download')} />
        </div>
      </div>




      {/* CUSTOM CURSOR */}
      <CustomCursor />

      {/* FOOTER */}
      <Footer params={{ lng }} showRequestQuote={true} />
      
      {/* LOADING ANIMATION */}
      <LoadingAnimation customClassName="" />
    </main>
  );
};