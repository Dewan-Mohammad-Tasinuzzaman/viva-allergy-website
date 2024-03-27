import React from 'react'
import Link from 'next/link'

interface ButtonSecondaryProps {
  href: string;
  label: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ href, label }) => {
  return (
    <Link href={href} className='btn-white'>
      <span className="btn-white__dot"></span>
      <span className="btn-white__text">{label}</span>
    </Link>
  )
}

export default ButtonSecondary
