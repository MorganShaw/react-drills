import React from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      books: ["Persuasion", "Northanger Abbey", "Getting to Yes", "Aimless Love"]
    }
  }

  render(){
    let booksToDisplay = this.state.books.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return(
      <div className="App">{booksToDisplay}
      </div>
    )
  }
}

export default App;
