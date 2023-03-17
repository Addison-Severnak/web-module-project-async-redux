import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import JokeList from './components/JokeList';

function App(props) {
  const { loading, error } = props;


  return (
    <div className="App">
      <h1>The Jokes</h1>

      {
        (error !== '') && <h3 className='error'>{error}</h3>
      }

      {
        loading ? <h3 className='loading'>Jokes are loading</h3> : <JokeList/>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);