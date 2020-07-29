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
        data: [],
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: action.payload,
      };
    case FETCH_CHARACTER_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
