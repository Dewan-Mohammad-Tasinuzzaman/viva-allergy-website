'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScroll({ children }) {

  return <ReactLenis root options={{
    lerp: 0.08,
    duration: 10,
  }}>{children}</ReactLenis>;

}


export default SmoothScroll;