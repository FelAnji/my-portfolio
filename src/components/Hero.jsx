import React from 'react'
import profilepic from '../asssets/profilepic.png'
import { TypeAnimation } from 'react-type-animation'
import AnjiCV from '../asssets/anji_cv.pdf'

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-col-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

      <div className='my-auto mx-auto w-[300px] col-span-1 h-auto lg:w-[400px]'>
        <img src= {profilepic} alt='hero-pic' />
      </div>

      <div className='col-span-2 px-5 my-auto'>

        <h1 className='z-10 text-white text-4xl sm-text:5xl lg:text-7xl font-extrabold'>
          <span className='primary-color'>
            I'm a
          </span> <br />
          <TypeAnimation 
            sequence={[
              "Frontend Dev.", 1000,
              "Web Designer", 1000,
              "Wordpress Expert.", 1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl'>
            My name is Oniyele Anjola and I have 3 years experience in Web Development.
        </p>

        <div className='my-8'>
            <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-400 to-slate-300 text-white font-bold' download={AnjiCV}>
              Download CV
            </a>
            <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-blue-400 to-slate-300 text-white hover:border-none'>
              Contact
            </a>
        </div>
      </div>

    </div>
  )
}

export default Hero