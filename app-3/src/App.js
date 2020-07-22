import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      authors: ["Austen", "Dickens", "Bronte", "Gaskell"]
    }
  }

  handleChange(filter){
    this.setState({
      filterString: filter
    })
  }

  render(){
    let authorsToDisplay = this.state.authors.filter((element, index) => {
      return element.includes(this.state.filterString)
      }).map((element, index) => {
        return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)}/>{authorsToDisplay}
      </div>
    )
  }
}

export default App;

//Notes: You can chain array or string methods. Filter before others, usually. Watch the spacing between the .(method) though. If it's out of place, it doesn't chain correctly.