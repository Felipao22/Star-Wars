import {
  GET_ALL_CHARACTERS,
  GET_ALL_DETAILS,
  GET_ALL_PLANETS,
  GET_ALL_VEHICLES,
  GET_PLANETS_DETAIL,
  GET_VEHICLES_DETAIL,
  SET_DETAIL_CHARACTER,
  SET_PLANETS_DETAIL,
  SET_VEHICLES_DETAIL,
} from "../actions/actionTypes";

const initialState = {
  characters: [],
  characterDetails: {},
  planets: [],
  planetsDetails: {},
  vehicles: [],
  vehiclesDetails: {}
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
    case GET_ALL_VEHICLES:
      return{
        ...state,
        vehicles: action.payload
      }
    case GET_VEHICLES_DETAIL:
      return{
        ...state,
        vehiclesDetails: action.payload
      }
    case SET_VEHICLES_DETAIL:
      return{
        ...state,
        vehiclesDetails: {}
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
