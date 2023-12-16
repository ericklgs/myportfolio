import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import AboutPage from './components/About';
import ProjectsPage from './components/Projects';
import ContactPage from './components/Contact';





export default class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
          <Homepage />
          <AboutPage />
          <ProjectsPage />
          <ContactPage />
      </div>
    );
  }
}
