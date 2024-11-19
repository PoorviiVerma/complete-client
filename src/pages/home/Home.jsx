import React from 'react'
import Hero from '../../components/Hero'
import Categories from './Categories';
import SpecialDishes from './SpecialDishes';
import Testimonials from './Testimonials';
import Services from './Services';


const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Services />
      
    </div>
  )
}

export default Home;