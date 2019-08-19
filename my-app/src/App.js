import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './About';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <About />
    </BrowserRouter>
    )
  }
}

export default App;