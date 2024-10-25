import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JewelrySlider from './components/JewelrySlider';
import JewelryServices from './components/JewelryServices';
import CompanyServices from './components/CompanyServices';
import CollectionShowcase from './components/CollectionShowcase';
import MensCollectionShowcase from './components/MensCollectionShowcase';
import TrendingShowcase from './components/TrendingShowcase';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <JewelrySlider />
      <Gallery />
      <JewelryServices />
      <About />
      <CompanyServices />
      <CollectionShowcase />
      <MensCollectionShowcase />
      <TrendingShowcase />
      {/* <Expertise /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
