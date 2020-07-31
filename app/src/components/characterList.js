import React, { useEffect } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import getData from "../actions/action";

const characterList = (props) => {
  console.log("characterList: ", props);
  props.getData();

  return (
    <>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.results.map((card) => <div>{card.name}</div>)
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(characterList);
=======
import { fetchCharacter } from "../actions/action";
import characterCard from './characterCard';

const characterList = props => {
  const fetchChars = e => {
    e.preventDefault();
    props.fetchCharacter();
  };
  return (
    <>
      {props.isFetching && <p>Fetching Characters</p>}
      <div className="CharacterList">
        {props.characters.map(character => (
          <characterCard character={character} />
        ))}
      </div>
      {props.error && <p className='errer'>{props.error}</p>}
      <button onClick={fetchChars}>Fetch Characters!</button>
    </>
  )
}

const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching
})

export default connect(mapStateToProps, { fetchCharacter })(characterList)
>>>>>>> 13fd7a384bf09847a1a9e0b7b227b6675f777692
