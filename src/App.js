// import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      pokemonCount: 1
    }
  }

  render() {
    return(
    <div>
      <h1>Pokemon page</h1>
    </div> 
    )
  }
}


export default App;
