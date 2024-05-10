import React from 'react'
import aboutImg from '../asssets/aboutImg.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'> 
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>My name is ONIYELE ANJOLA EMMANUEL, a front end web developer and a cybersecurity student of the Federal University of Technology Akure <br /> As a frontend developer, I have strong background and practical knowledge of front end technologies like HTML, CSS, JavaScript and React JS. <br /> Pursuing a degree in cybersecurity has also taught me the priinciples of security and techniques for protecting digital assets from cyber threats. <br /> My expertise extends to the realm of wordpress, giving me deeper knowledge of CMS (Content Management Systems) and how they work. <br /> Adittionally, I have basic knowledge of SEO (Search Engine Optimiation) which is a valuable asset in increasing sites online visibility, and driving organic traffic to websites.</p>
                </div>
            </div>

            <img src={aboutImg} alt="" className='mx-auto rounded-3xl py-8 md:py-0 sm:rounded-2xl' width={300} height={400}/>
        </div>
        
    </div>
  )
}

export default About