import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import CharacterList from './components/CharacterList';
import Loader from 'react-loader-spinner';

import getCharacterData from './actions/characterActions';



function App(props) {

  useEffect(() => {
    props.getCharacterData()
  }, [])


  console.log(props)
  return (
    <div className="App">
      <div>
        <h1>{props.greeting}</h1>
        {props.isFetching && 
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
        />}
        {/* <button onClick={()=> props.getCharacterData()} >click me</button> */}
        {props.characters &&  <CharacterList characters={props.characters} />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // ...state
    greeting: state.greeting,
    isFetching: state.isFetching,
    error: state.error,
    characters: state.characters
  };
};

export default connect(mapStateToProps, {getCharacterData})(App);


