import React from 'react';
import Header from "./components/header";
import Sider from "./components/sider";
import Welcome from "./components/welcome";
import HowItWorks from "./components/howitworks";
import './App.css';
import AboutUs from './components/about-us';
import Events from './components/events';
import Start from './components/start';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Sider/>
      <Header/>
      <Welcome/>
      <HowItWorks/>
      <AboutUs/>
      <Events/>
      <Start/>
      <Footer/>
    </div>
  );
}

export default App;
