import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Groceries from './components/Groceries'
import Banner from './components/Banner'
import Cities from './components/cities'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Categories/>
      <Groceries/>
      <Banner />
      <Cities/>
      <Footer/>
    </div>
  )
}

export default App  