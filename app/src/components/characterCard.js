import React from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import getData from "../actions/action";

const characterCard = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };
=======
>>>>>>> 13fd7a384bf09847a1a9e0b7b227b6675f777692

const characterCard = props => {
  return (
<<<<<<< HEAD
    <div>
      {props.isFetchingData ? (
        <div>Fetching Data...</div>
      ) : (
        <button onClick={handleGetData}>Get Characters!</button>
      )}
    </div>
  );
};
=======
    <div className='character'>
      <h2>Name: {props.character.name}</h2>
      <h3>Location: {props.character.location.name}</h3>
      <h3>Species: {props.character.species}</h3>
    </div>
  )
}
>>>>>>> 13fd7a384bf09847a1a9e0b7b227b6675f777692

export default characterCard;

<<<<<<< HEAD
export default connect(mapStateToProps, { getData })(characterCard);
=======
>>>>>>> 13fd7a384bf09847a1a9e0b7b227b6675f777692
