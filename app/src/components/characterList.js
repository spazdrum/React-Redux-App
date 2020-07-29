import React from "react";
import { connect } from "react-redux";
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