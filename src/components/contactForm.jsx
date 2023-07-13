import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const SERVICE_ID = "service_fay40bc";
const TEMPLATE_ID = "template_j2dsgzl";
const USER_ID = "q1fjM2elzzJMfsZpC";

function ContactForm() {
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };


  return (
    <form className='space-y-8' ref={form} onSubmit={handleOnSubmit}>
      <div>          
        <label className='block mb-2 text-sm font-medium text-slate-700' htmlFor='name'>Full Name</label>
        <input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' type="text" name="Name" id='name' placeholder='John Doe' required />
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-slate-700' htmlFor='email'>Email</label>
        <input className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500' type="email" id='email' name="user_email" placeholder='johndoe@example.com' required />
      </div>
      <div className='sm:col-span-2'>        
        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='message'>Message</label>
        <textarea className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500' rows='6' name="message" id='message' placeholder="I have a great idea and..." />
      </div>
      <input className='py-3 px-5 text-sm font-bold tracking-wide text-center text-slate-50 rounded-xl bg-slate-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300' type="submit" value="Send" />
    </form>
  )
}

export default ContactForm