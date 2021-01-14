import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    API_URL : "https://swapi-thinkful.herokuapp.com/api/people/?search=",
    characters : []
  }

  render() {
    return (
      <div className="App">
        <h2>Name</h2>
      </div>
    )
  }
}

export default App;
