import React from 'react'
import Header from './components/Header'
import './index.css'
import bg from "./assets/bg.png";
import Hero from './components/Hero';
import CardList from './components/CardList';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';
import ClaimSample from './components/ClaimSample';


function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'contain', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <CardList/>
      <ClaimSample />
      <Footer />
    </div>
  )
}

export default App