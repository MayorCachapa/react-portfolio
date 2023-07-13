import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets'

function Contact() {
  return (
    <section className='px-4 bg-slate-800 text-slate-50 hover:bg-slate-200 hover:text-slate-800 ease-in-out duration-200'>
      <Link to='/contact'>
        <div className='container flex justify-between mx-auto md:flex gap-8 py-8'>
          <div className='flex-col items-center'>            
            <h2 className='text-4xl'>
              Want to build something?
            </h2>
            <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold'>
              Let's get to work!
            </h1>
          </div>
          <div>
            <img className='w-[380px]' src={Logo} alt=""/>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default Contact