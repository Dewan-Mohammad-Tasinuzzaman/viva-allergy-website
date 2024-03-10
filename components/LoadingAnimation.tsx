import React from 'react';
import Logo_White from '@/public/assets/svgs/logo_icon-white.svg';
import Image from 'next/image';

const LoadingAnimation = ({ customClassName }: { customClassName: string }) => {
  return (
    <div className={`loadingAnimationBox ${customClassName}`}>
      <div className='loadingAnimationBox__logoBox'>
        <Image src={Logo_White} alt="Logo" unoptimized={true} className="loadingAnimationBox__logoBox_logo" />
      </div>
    </div>
  )
}

export default LoadingAnimation