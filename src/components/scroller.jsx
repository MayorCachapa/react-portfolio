import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Scroller({ link }) {
  return (
    <section>
        <Link to={link}>
            <Marquee gradient={false} className='bg-emerald-800 py-2 font-bold text-5xl text-slate-50'>
              <div className='flex place-items-baseline gap-40 mx-16'>
                <i className="devicon-python-plain"></i>
                <i className="devicon-django-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-redux-original"></i>
                <i className="devicon-nextjs-original"></i>
                <i className="devicon-tailwindcss-plain"></i>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-rails-plain"></i>
                <i className="devicon-postgresql-plain"></i>
              </div>
            </Marquee>
        </Link>
    </section>
  )
}

export default Scroller