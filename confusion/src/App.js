import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {
    

  render() {
    console.log("aloading2");
    return (   
      <div className="App">   
          <Main /> 
      </div>     
    );
  }
}

export default App;
