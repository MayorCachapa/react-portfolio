import React from 'react'
import { Link } from 'react-router-dom'
import { PatternImg } from '../assets'
import { portfolioData } from '../data'

function Content() {
  return (
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
  )
}

export default Content