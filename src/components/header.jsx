import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../assets/index.js'

function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-slate-100'>
        <Link className='flex justify-center bg-slate-50  hover:bg-slate-200 ease-in-out duration-75' to='/'>
            <img src={Logo} alt="Histeria" width={150}/>
        </Link>
        <Link to='/contact' className='md:col-start-3 flex gap-2 items-center justify-center text-lg
        bg-slate-50 hover:bg-slate-200 ease-in-out duration-75'>
            <h2>Let's talk!</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
        </Link>
        <nav className='col-span-2 bg-emerald-800 md:row-start-1 md:col-start-2 md:col-end-3'>
            <ul>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='About'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='Projects'>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header