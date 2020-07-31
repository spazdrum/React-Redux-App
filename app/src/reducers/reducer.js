import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR,
} from "../actions/action";

const initialState = {
  data: [],
  isFetchingData: false,
  error: "",
};

export const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        isFetchingData: true,
        error: null
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetchingData: false,
        error: null
      };
    case FETCH_CHARACTER_ERROR:
      return {
        ...state,
        characters: [],
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
