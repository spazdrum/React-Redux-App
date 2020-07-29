import React from "react";
import { connect } from "react-redux";

const characterCard = props => {
  return (
    <div className='character'>
      <h2>Name: {props.character.name}</h2>
      <h3>Location: {props.character.location.name}</h3>
      <h3>Species: {props.character.species}</h3>
    </div>
  )
}

export default characterCard;

