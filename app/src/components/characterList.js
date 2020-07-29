import React from "react";
import { connect } from "react-redux";
import { fetchCharacter } from "../actions/action";

const characterList = (props) => {
  const fetchCharacters = (e) => {
    e.preventDefault();
    props.fetchCharacter();
  };

  return (
    <div>
      <h1>Rick and Morty</h1>
      <div>
        {props.character.map((characters) => (
          <h4 key={characters.id}>{characters.name}</h4>
        ))}
      </div>
      {props.error && <p>{props.error}</p>}
      <button onClick={(e) => fetchCharacters(e)}>Fetch Characters!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchCharacter })(characterList);
