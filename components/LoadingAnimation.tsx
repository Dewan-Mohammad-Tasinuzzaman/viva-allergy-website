import React from 'react'
import Logo_White from '@/public/assets/svgs/logo_icon-white.svg';
import Image from 'next/image';

const LoadingAnimation = () => {

  return (
    <div className='loadingAnimationBox'>
        <div className='loadingAnimationBox__logoBox' >
            <Image src={Logo_White} alt="Logo" unoptimized={true} className="loadingAnimationBox__logoBox_logo" />
        </div>
    </div>
  )
}

export default LoadingAnimation