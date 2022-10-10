import React from 'react'
import Anouncement from '../../components/Anouncement/Anouncement';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import Slideshow from '../../components/Slideshow/Slideshow';
import Blog from './../../components/Blog/Blog';

const Home = () => {
  return (
    <div>
      <Anouncement></Anouncement>
        <Navbar></Navbar>
        <Slideshow></Slideshow>
      <Categories></Categories>
      <Products></Products>
      <Blog></Blog>
      <Footer></Footer>

    </div>
  )
}

export default Home;
