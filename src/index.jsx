import React from 'react'
import reactDOM from 'react-dom';
import MainHero from './components/MainHero';
import './app.css'
import MainAbout from './components/AboutMe.jsx/MainAbout';
import MainSkills from './components/Skills/skills';
import Project from './components/Projects/Project';
import Snippets from './components/UiSnippets/Snippets';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div className='App'>
      <MainHero/>
      <MainAbout/>
      <MainSkills/>
      <Project/>
      <Snippets/>
      <Contact/>
      <Footer/>
    </div>
  )
}

reactDOM.render(<App/>, document.getElementById('root'));