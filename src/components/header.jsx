import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../assets/index.js'
import { HashLink } from 'react-router-hash-link'

const activeClass = 'text-xl text-slate-400'

function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-[220px_1fr_220px] border-slate-100 shadow-lg'>
        <Link className='flex justify-center bg-slate-50  hover:bg-slate-200 ease-in-out duration-75' to='/'>
            <img src={Logo} alt="Histeria" width={120} className='my-1'/>
        </Link>
        <Link to='/contact' className='md:col-start-3 flex gap-2 items-center justify-center text-lg text-slate-200 bg-slate-900  hover:bg-slate-200 hover:text-xl hover:text-slate-900 ease-in-out duration-200'>
            <h2>Let's talk!</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
        </Link>
        <nav className='col-span-2 bg-slate-50 md:row-start-1 md:col-start-2 md:col-end-3 flex items-center justify-center'>
            <ul className='flex gap-10 max-w-sm overflow-hidden snap-always text-lg'>
                <li className='hover:text-xl ease-in-out duration-150'>
                    <NavLink to='/'
                        className={({ isActive }) => 
                        isActive ? activeClass : undefined
                    }>
                        HOME
                    </NavLink>
                </li>
                <li className='hover:text-xl ease-in-out duration-150'>
                    <NavLink to='about'
                        className={({ isActive }) => 
                        isActive ? activeClass : undefined
                    }>
                        ABOUT
                    </NavLink>
                </li>
                <li className='hover:text-xl ease-in-out duration-150'>
                    <HashLink to='#projects'
                        className={({ isActive }) => 
                        isActive ? activeClass : undefined
                    }>
                        PROJECTS
                    </HashLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header