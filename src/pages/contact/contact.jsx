import React from 'react'
import { socials } from '../../data'
import ContactForm from '../../components/contactForm'
import { default as ContactButton } from '../../components/contact'

function Contact() {
  return (
    <div>
    <section className='pt-12 pb-24 mx-2'>
      <div className='container mx-auto grid gap-8 px-4 lg:grid-cols-2'>
        <div>
          <h1 className='text-slate-700 tracking-wider text-6xl font-extrabold lg:text-7xl xl:text:8xl mb-4 md-flex-1'>
            Contact
          </h1>
          <p className='mb-2 text-xl'>
            Want to build something together? Let's get in touch!
          </p>
          <p className='mb-4 text-lg'>
            If you are looking for help with your business, have a burning question, or simply want to chat, I am always reachable at my email below or you can fill this form.
          </p>
          <h4 className='mb-4 text-xl font-bold text-slate-700 tracking-wide'>alejarod@histeria-labs.com</h4>
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
            <ContactForm />
        </div>
      </div>
    </section>
        <ContactButton />
    </div>
  )
}

export default Contact