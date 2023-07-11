import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Banner, PatternImg } from '../../assets'
import Scroller from '../../components/scroller'
import { portfolioData } from '../../data'

function Home() {
  return (
    <div>
      <section className='py-10 lg:py-28 xl:py-36'>
        <div className='container mx-auto gap-8 px-4 flex flex-col md:flex-row'>
          <div className='md:flex-1 md:order-2'>
            <picture className='flex drop-shadow-[10px_-10px_0_hsla(217,33%,17%,0.79)] border-black rounded-tl-[150px] rounded-br-[150px] rounded-xl overflow-hidden'>
              <source srcSet={Banner} width={363} height={222} media='(max-width: 400px)' type='image/jpg'/>
              <source srcSet={Banner} width={608} height={372} media='(max-width: 680px)' type='image/jpg'/>
              <img src={Banner} alt="Banner with a globe showing Venezuela" width={870} height={532} media='(max-width: 400px)' type='image/jpg' />
            </picture>
          </div>

          <div className='md:flex-1'>
            <h2 className='text-lg md:text-xl font-bold italic'>Hello there! 👋 I'm Alejandro Rodríguez Hernández</h2>
            <br />
            <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold mb-6 uppercase text-slate-700'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Loving Father',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Fullstack Developer',
                  1000,
                  'Finance Professional',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className='text-lg max-w-xl py-2'>
                I founded Histeria Labs to pursue the highest quality in digital products and services,
                helping brands of all sizes, and entrepreneurs of all backgrounds, to get the most out of their websites and applications.                
            </p>
            <div className='flex items-baseline gap-2 py-3 mt-2'>
              <HashLink to='#projects' className='px-4 py-2 rounded-md font-bold bg-emerald-800 text-slate-100 uppercase hover:bg-emerald-700 ease-in-out duration-175'>
                Projects
              </HashLink>

              <Link to='https://www.linkedin.com/in/alejandro-rodr%C3%ADguez-hern%C3%A1ndez-771260156' target='_blank' className='flex gap-2 px-4 py-2 rounded-md font-bold text-slate-800 uppercase'>
                Let's connect!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className='px-4 pb-4 bg-slate-700 bg-fixed' style={{ backgroundImage: "url(" + PatternImg + ")"}}>
        <div className='container mx-auto'>
          <div className='text-slate-50 text-center py-12'>
            <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold mb-6 uppercase'>
              Selected Projects
            </h1>
            <p className='max-w-xl mx-auto text-lg'>
              As a Finance Professional, I developed a strong skill-set in analysis, problem-solving and team work/management. Now I translate these skills into creative and efficient solutions in Software and Web development.             
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mb-28'>
              {portfolioData.map((item, index) => {
                return (<Link to={item.link} key={index} className='md:even:pt-12 ease-in-out duration-150 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]'>
                  <div className='rounded-xl overflow-hidden shadow-md border-1 border-slate-950'>
                    <img src={item.thumbnail} alt={item.alt} loading='lazy'/>
                  </div>
                  <div className='bg-slate-50 rounded-b-xl mx-4 p-1 text-slate-800 border-slate-950 border-1 text-lg flex justify-between gap-4 item-center'>
                    <div>                      
                      <span className='font-bold'>{ item.title }</span>
                      <span className='mx-3'>~</span>
                      <span className='text-slate-700 text-[14px]'>{ item.category }</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </Link>)
              })}
          </div>
        </div>
      </section>
      <Scroller link="/contact" />

      <section className='px-4 py-12'>
        <div className='container mx-auto'>
          <div className='text-slate-700 text-center py-12'>
            <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold mb-6 uppercase'>
              Services
            </h1>
            <p className='max-w-xl mx-auto text-lg'>
              As a Finance Professional, I developed a strong skill-set in analysis, problem-solving and team work/management. Now I translate these skills into creative and efficient solutions in Software and Web development.             
            </p>
          </div>

          <div className='text-slate-800 py-12 grid lg:grid-cols-4 items-center'>
              <div>
                <h3 className='text-2xl font-bold mb-4'>Web Development</h3>
                <p className='mb-4 text-lg'>From simple landing pages to feature-rich applications, Histeria Labs specializes in Fullstack development using <span className='font-bold'>Django</span>, <span className='font-bold'>Next.js</span> or <span className='font-bold'>Ruby-on-Rails</span></p>
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
              <div className='flex justify-center mb-12 md:mb-0 col-span-2'>Image</div>
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
    </div>
  )
}

export default Home;