import React from 'react'
import { socials } from '../../data'
import { BannerImg } from '../../assets'
import Contact from '../../components/contact'

function About() {
  return (
    <main>
      <section className='py-12 mx-2'>
        <div className='container mx-auto grid gap-8 px-4 lg:grid-cols-2'>
          <div>
            <h1 className='text-slate-700 tracking-wider text-6xl lg:text-7xl xl:text:8xl font-bold mb-4 md-flex-1'>
              About me
            </h1>
            <p className='mb-2 text-lg'>
              Hello, I'm Alejandro Rodriguez Hernandez, originally from Caracas, Venezuela. I have over 5 years of experience in Finance roles, and recently in 2022 decided to start programming. I am currently based in the Netherlands. I speak Spanish, English and French.
            </p>
            <p className='mb-4 text-lg'>
              I love spending time with my family, I'm a passionate F1 fan, and really look forward to work as a Fullstack Developer.
            </p>
            <br /><br />
            <h4 className='text-lg font-bold'>
              Find me on:
            </h4>
            
            <div className='mb-8'>
              <ul className='flex gap-6'>
                {socials.map((item, index) => (
                  <li key={index}>
                    <a className='py-2 flex flex-col md:flex-row gap-2 items-center justify-center' target='_blank' rel='noopener noreferrer' href={item.url}>
                    {item.name}
                    {item.name === 'Discord' ? (<img src={item.icon} alt={item.alt} width={27}/>) : (<span className='text-lg'><i className={item.icon}></i></span>)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className='md:flex-1 md:order-2'>
            <picture className='flex drop-shadow-[10px_-10px_0_hsla(217,33%,17%,0.79)] rounded-xl overflow-hidden'>
              <source srcSet={BannerImg} width={363} height={222} media='(max-width: 400px)' type='image/jpg'/>
              <source srcSet={BannerImg} width={520} height={372} media='(max-width: 680px)' type='image/jpg'/>
              <img src={BannerImg} alt="Banner with a globe showing Venezuela" width={680} height={532} media='(max-width: 400px)' type='image/jpg' />
            </picture>
          </div>
        </div>
      </section>
        <Contact />
    </main>
  )
}

export default About