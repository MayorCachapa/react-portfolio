import React from 'react'
import { Link } from 'react-router-dom'
import { Logo2 } from '../assets/index.js'

function Footer() {
  return (
    <footer className='bg-emerald-800 grid grid-cols-2 md:grid-cols-[220px_1fr_220px] border-slate-100 shadow-lg'>
        <div className='flex justify-center' >
            <img src={Logo2} alt="Histeria" width={120} className='my-1'/>
        </div>
        <div className='col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 flex items-center justify-center'>
          <h6 className='text-xl text-slate-50 word-spacing'>&copy; 2023 Histeria Labs • Built with React.js</h6>  
        </div>
        <div className='flex items-center justify-center text-slate-50 text-4xl gap-8'>
            <Link className='hover:text-3xl ease-in-out duration-150' to='https://www.linkedin.com/in/alejandro-rodr%C3%ADguez-hern%C3%A1ndez-771260156' target='_blank'>
                <i className="devicon-linkedin-plain"></i>
            </Link>
            <Link className='hover:text-3xl ease-in-out duration-150' to='https://github.com/MayorCachapa' target='_blank'>
                <i className="devicon-github-original"></i>
            </Link>
        </div>
    </footer>
  )
}

export default Footer