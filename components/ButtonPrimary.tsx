import React from 'react'
import Link from 'next/link'

interface ButtonPrimaryProps {
  href: string;
  label: string;
  target: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ href, label, target }) => {
  return (
    <Link href={href} target={target} className='btn-black'>
      <span className="btn-black__dot"></span>
      <span className="btn-black__text">{label}</span>
    </Link>
  )
}

export default ButtonPrimary
