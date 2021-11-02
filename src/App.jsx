import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import AxolotlsSlider from './components/AxolotlsSlider';
import AxolotlsClasses from './components/AxolotlsClasses';
import Roadmap from './components/Roadmap';
import JoinOurCommunity from './components/JoinOurCommunity';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <main>

        <Main />
        <AxolotlsSlider />
        {/* <AxolotlsClasses /> */}
        <Roadmap />
        <JoinOurCommunity />
        <Faq />

      </main>
      <Footer />
    </div>
  )
}

export default App
