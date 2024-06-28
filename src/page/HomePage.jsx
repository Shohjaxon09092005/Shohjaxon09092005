import React from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Blog from '../components/Blog'
import Accardion from '../components/Accardion'
import Banner from '../components/Banner'
import Swi1 from '../components/Swi'

function HomePage() {
  return (
    <div>
      <main>
        <Hero />
        <Project />
        <Swi1/>
        <Blog />
        <Accardion />
        <Banner />
      </main>
    </div>
  )
}

export default HomePage
