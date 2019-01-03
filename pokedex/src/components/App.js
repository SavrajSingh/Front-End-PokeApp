import React, {Component} from 'react';
import './styles/App.css';
import Pokelist from './Pokelist';

class App extends Component{

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div className='App'>
        <Pokelist/>
      </div>
    );
  }
}

export default App;