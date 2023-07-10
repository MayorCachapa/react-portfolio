import React from 'react';
import { Banner } from '../../assets'

function Home() {
  return (
    <div>
      <section className='py-10 lg:py-28 xl:py-36'>
        <div className='container mx-auto gap-8 px-4 flex flex-col md:flex-row'>
          <div className='md:flex-1 md:order-2'>
            <picture className='flex drop-shadow-[10px_-10px_0_#475569] border-black rounded-tl-[150px] rounded-br-[150px] rounded-xl overflow-hidden'>
              <source srcSet={Banner} width={363} height={222} media='(max-width: 400px)' type='image/jpg'/>
              <source srcSet={Banner} width={608} height={372} media='(max-width: 680px)' type='image/jpg'/>
              <img src={Banner} alt="Banner with a globe showing Venezuela" width={870} height={532} media='(max-width: 400px)' type='image/jpg' />
            </picture>
          </div>

          <div className='md:flex-1'>
            Text
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home;