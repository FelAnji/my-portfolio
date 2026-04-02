import React from 'react'
import aboutImg from '../asssets/aboutImg.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'> 
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am ONIYELE ANJOLA EMMANUEL, a Web Developer and Cybersecurity graduate (2:1) from the Federal University of Technology, Akure. My approach to development is "Secure-by-Design," combining a mastery of React and Tailwind CSS with the technical principles needed to protect digital assets from modern threats.
                    <br></br>
                    Beyond the interface, I specialize in building custom WordPress environments, developing bespoke databases and API endpoints. I am a hands-on problem solver comfortable in Linux environments, managing everything from cPanel optimization and SSL integration to fine-tuning server limits for peak performance.
                    <br></br>
                    I have a proven track record of using technical optimization to drive business results, including helping a project scale to ₦10M in revenue. By blending SEO best practices with secure, full-stack development, I build digital solutions that are visible, high-performing, and resilient.</p>
                </div>
            </div>

            <img src={aboutImg} alt="" className='mx-auto rounded-3xl py-8 md:py-0 sm:rounded-2xl' width={300} height={400}/>
        </div>
        
    </div>
  )
}

export default About