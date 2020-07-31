import React, { useEffect } from "react";
import { connect } from "react-redux";
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
