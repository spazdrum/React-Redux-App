import React from "react";
import { connect } from "react-redux";
import { fetchCharacter } from "../actions/action";

const characterCard = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.fetchCharacter();
  };

  return (
    <>
      <div>
        {props.isFetchingData ? (
          <div>Fetching Characters...</div>
        ) : (
          <button onClick={handleGetData}>Get Characters</button>
        )}
      </div>

      <div className="character">
        <img src={props.character.image} alt="character" />
        <div className="character-content">
          <h3>Name: {props.character.name}</h3>
          <h3>Species: {props.character.species}</h3>
          <h3>Location: {props.character.location.name}</h3>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { fetchCharacter })(characterCard);
