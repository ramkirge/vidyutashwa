import React from 'react'
import video from '../assets/video.mp4'

function Hero() {
  return (
    <div className='h-screen items-center justify-center flex relative'>
        <div className='h-screen w-screen absolute z-20 overflow-hidden inset-0'>
          <video src={video} className=' lg:h-screen w-screen object-cover' muted autoPlay loop playsInline></video>

        </div>
        
    </div>
  )
}

export default Hero