import React from "react";
import { connect } from "react-redux";
import { fetchCharacter } from "../actions/action";
import CharacterCard from './characterCard';

const CharacterList = props => {
  const fetchChars = e => {
    e.preventDefault();
    props.fetchCharacter();
  };
  return (
    <>
    <p>Random</p>
      {props.isFetching && <p>Fetching Characters</p>}
      <div className="CharacterList">
        {props.characters.map(character => (
          <CharacterCard character={character} />
        ))}
      </div>
      {props.error && <p className='error'>{props.error}</p>}
      <button onClick={fetchChars}>Fetch Characters!</button>
    </>
  )
}

const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching
})

export default connect(mapStateToProps, { fetchCharacter })(CharacterList)