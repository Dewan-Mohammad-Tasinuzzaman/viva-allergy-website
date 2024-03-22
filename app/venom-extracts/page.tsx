import LoadingAnimation from '@/components/LoadingAnimation'
import React from 'react'

const VenomPage = () => {
  return (
    <main>
      VenomPage
      <iframe src='https://www.bullseyelocations.com/pages/Main_BeeAware?f=1'
        style={{
          marginTop: '200px',
          width: '100vw',
          height: '100vh',
          border: 'none',
        }}
      />
      <LoadingAnimation customClassName="venom-loader" />
    </main>
  )
}

export default VenomPage