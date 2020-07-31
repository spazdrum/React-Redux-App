import axios from "axios";

export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_ERROR = "FETCH_CHARACTER_ERROR";

<<<<<<< HEAD
const getData = (dispatch) => {
=======
export const fetchCharacter = (dispatch) => {
  dispatch({ FETCH_CHARACTER_START });
>>>>>>> 13fd7a384bf09847a1a9e0b7b227b6675f777692
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((res) => {
      dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CHARACTER_ERROR,
        payload: err
      });
    });
};

export default getData;
