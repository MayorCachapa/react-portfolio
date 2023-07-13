import React from 'react'
import { Link } from 'react-router-dom'
import { Services1 } from '../assets'

function Services() {
  return (
    <section className='px-4 py-6'>
        <div className='container mx-auto'>
          <div className='text-slate-700 text-center py-6'>
            <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold mb-6 uppercase'>
              Services
            </h1>
            <p className='max-w-xl mx-auto text-lg'>
              As a Finance Professional, I developed a strong skill-set in analysis, problem-solving, team work and management. Now I translate these skills into creative and efficient solutions in Software and Web development.             
            </p>
          </div>

          <div className='text-slate-800 py-8 grid lg:grid-cols-4 items-center mx-3'>
              <div>
                <h3 className='text-2xl font-bold mb-4'>Web Development</h3>
                <p className='mb-4 text-lg'>From simple landing pages to feature-rich applications, I specialize in fullstack development using <span className='font-bold'>Django</span>, <span className='font-bold'>Next.js</span> or <span className='font-bold'>Ruby-on-Rails</span></p>
                <Link to='/contact' className='flex justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <hr className='py-3 text-slate-800'/>
                <h3 className='text-2xl font-bold mb-4'>Project Administration</h3>
                <p className='mb-4 text-lg'>Four years of experience working with Fortune 500 companies grants us the expertise to make your project go from 0% to 100% in the most efficient and profitable way possible</p>
                <Link to='/contact' className='flex justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className='flex justify-center mb-12 md:mb-0 col-span-2'>
                <img src={Services1} alt="Snippet of code on black background" className='w-3/5 rounded-xl overflow-hidden'/>
              </div>
              <div>
              <h3 className='text-2xl font-bold mb-4'>Product Management</h3>
                <p className='mb-4 text-lg'>Leading a team of developers can be challenging without the technical knowledge. I can help you by using technologies such as <span className='font-bold'>Jira</span> and <span className='font-bold'>Confluence</span></p>
                <Link to='/contact' className='flex justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <hr className='py-3 text-slate-800'/>
                <h3 className='text-2xl font-bold mb-4'>Project Administration</h3>
                <p className='mb-4 text-lg'>Four years of experience working with Fortune 500 companies grants us the expertise to make your project go from 0% to 100% in the most efficient and profitable way possible</p>
                <Link to='/contact' className='flex justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
          </div>
        </div>
      </section>
  )
}

export default Services