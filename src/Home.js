import React from 'react';
import Navbar from './Navbar-Section/header/Header';
import CafesList from './CafesDados/cafeList';
import Section from './Navbar-Section/Section/sectionList';
import '../src/Styles/index.css';
import '../src/Styles/stylesCafes.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Link to="/">
          <Navbar />
          <Section />
          <h2 id='h2-NossosCafes'>Nossos Cafés</h2>
          <CafesList />
    </Link >
  )
}

export default Home;