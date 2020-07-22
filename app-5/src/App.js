import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i.pinimg.com/originals/36/45/68/3645685eb57fb5fe67f95f1f2494aa4e.jpg"}/>
      </div>
    );
  }  
}

export default App;
