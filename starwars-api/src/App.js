import React from 'react';
import Seach from './Search';
import './App.css';

class App extends React.Component {

  state = {
    API_URL : "https://swapi-thinkful.herokuapp.com/api/people/?search=",
    characters : []
  }
  // setup handleSubmit function to fetch API
  handleSubmit = (event) => {
    // setup preventDefault
    event.preventDefault();
    // create variable for characterName value
    const character = event.target.characterName.value;
    // setup fetch to grab the starwars API
    fetch(this.state.API_URL + character)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      })
      .then(responseJson => {
        this.setState({
          characters : responseJson.results
        });
      });

  }

  render() {
    return (
      <div className="App">
        {/*Attach handleSubmit to search component*/}
        <Search handleSubmit={this.handleSubmit}/>

        {this.state.characters.map((character, index) => {
          return (
            <div>
              <h2>{character.name}</h2>
            </div>
          )
        })}
      </div>
    );
  }
}  

export default App;
