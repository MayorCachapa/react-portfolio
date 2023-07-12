import React from 'react';
import Banner from '../../components/banner';
import Scroller from '../../components/scroller'
import Contact from '../../components/contact'
import Content from '../../components/content'
import Services from '../../components/services'

function Home() {
  return (
    <div>
      <Banner />
      <Content />
      <Scroller />
      <Services />
      <Contact />
    </div>
  )
}

export default Home;