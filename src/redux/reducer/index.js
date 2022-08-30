import {
  GET_ALL_CHARACTERS,
  GET_ALL_DETAILS,
  GET_ALL_PLANETS,
  GET_PLANETS_DETAIL,
  SET_DETAIL_CHARACTER,
  SET_PLANETS_DETAIL,
} from "../actions/actionTypes";

const initialState = {
  characters: [],
  characterDetails: {},
  planets: [],
  planetsDetails: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_ALL_DETAILS:
      return {
        ...state,
        characterDetails: action.payload,
      };
    case SET_DETAIL_CHARACTER:
      return {
        ...state,
        characterDetails: {},
      };
    case GET_ALL_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    case GET_PLANETS_DETAIL:
      return {
        ...state,
        planetsDetails: action.payload,
      };
    case SET_PLANETS_DETAIL:
      return {
        ...state,
        planetsDetails: {},
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
