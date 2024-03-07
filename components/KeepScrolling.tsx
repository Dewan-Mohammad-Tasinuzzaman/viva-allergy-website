import React from 'react'
import Image from 'next/image';
import Plus_Icon from '@/public/assets/svgs/plus_icon.svg';

const KeepScrolling = () => {
  return (
    <>
        <div className="keepScrolling">
            <Image src={Plus_Icon} alt="Logo" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_1" />
            <p className="keepScrolling__text">Keep Scrolling</p>
            <Image src={Plus_Icon} alt="Logo" unoptimized={true} className="keepScrolling__icons keepScrolling__icons_2" />
        </div>
    </>
  )
}

export default KeepScrolling