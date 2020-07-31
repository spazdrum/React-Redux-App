import React from "react";
import { connect } from "react-redux";
import getData from "../actions/action";

const characterCard = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      {props.isFetchingData ? (
        <div>Fetching Data...</div>
      ) : (
        <button onClick={handleGetData}>Get Characters!</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(characterCard);
