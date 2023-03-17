import React from 'react';
import './App.css';

import JokeList from './components/JokeList';

import data from './data/jokes';

function App() {
  const jokes = data;
  const loading = false;
  const error = '';

  return (
    <div className="App">
      <h1>The Jokes</h1>

      {
        loading ? <h3>Jokes are loading</h3> : <JokeList jokes={jokes}/>
      }

    </div>
  );
}

export default App;