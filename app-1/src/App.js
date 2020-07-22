import React from 'react';
import lol from "./logo.svg";
import "./App.css";

// import Display from './components/Display' I did this when I left the App.js file as a function. When I changed it to match the solution in the drill, I didn't need to import anything, and I changed this to a parent class component.

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }


  }

  changeMessage(value) {
    this.setState({
      message: value
    })
  }


  render() {
    return(
      <div className="App">
        <input
          type="text"
          onChange={(e) => this.changeMessage(e.target.value) }
          />
        <p>{this.state.message}</p>  
      </div>
    )
  }
}

export default App








//The first way I tried, with a separate Display file imported in:
// function App() {
//   return (
//     <div className="App">
//       <Display/>
//     </div>
//   );
// }

// export default App;
