import React from 'react'
import ecommerce from '../asssets/ecommerce.png'
import emperora from '../asssets/emperora.png'
import useQuickTest from '../asssets/useQuickTest.png'
import Dashboard from '../asssets/Dashboard.png'
import Weather from '../asssets/weather.png'
import ssAgroLtd from '../asssets/ssAgroLtd.png'

const Work = () => {
  return (
    <div className='max=w=[1200px] mx-auto p-5 container' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent works</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={emperora} alt="" layout='fill' objectFit='cover' />
                <div className='opacity-0 group-hover:opacity-90 bg-gray-100 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>Emperor A</span>
                    <div className='pt-8 text-center'>
                        <a target='_blank' rel="noreferrer" href="https://emperora.com">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>

                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={ecommerce} alt="" layout='fill' objectFit='cover' />
                <div className='opacity-0 group-hover:opacity-90 bg-gray-100 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>Ecommerce Site</span>
                    <div className='pt-8 text-center'>
                        <a target='_blank' rel="noreferrer" href="https://shop.emperora.com">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>

                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={useQuickTest} alt="" layout='fill' objectFit='cover' />
                <div className='opacity-0 group-hover:opacity-90 bg-gray-100 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>UseQuickTest</span>
                    <div className='pt-8 text-center'>
                        <a target='_blank' rel="noreferrer" href="https://usequicktest.com/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>

                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={Dashboard} alt="" layout='fill' objectFit='cover' />
                <div className='opacity-0 group-hover:opacity-90 bg-gray-100 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>React Dashboard</span>
                    <div className='pt-8 text-center'>
                        <a target='_blank' rel="noopener" href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>

                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={Weather} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray-100 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>React Weather App</span>
                    <div className='pt-8 text-center'>
                        <a target='_blank' rel="noopener" href="https://aiqweather.netlify.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>

                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={ssAgroLtd} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray-100 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>SS Agro LTD</span>
                    <div className='pt-8 text-center'>
                        <a target='_blank' rel="noopener" href="https://emperora.com">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>

                    </div>
                </div>
            </div>

            

        </div>
    </div>
  )
}

export default Work
