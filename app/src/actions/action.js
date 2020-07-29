import axios from "axios";

export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_ERROR = "FETCH_CHARACTER_ERROR";

export const fetchCharacter = (dispatch) => {
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((res) => {
      dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      console.error("Error fetching from api: ", err.message);
      dispatch({
        type: FETCH_CHARACTER_ERROR,
        payload: "Error fetching from api",
      });
    });
};
