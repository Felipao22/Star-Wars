import {
  GET_ALL_CHARACTERS,
  GET_ALL_DETAILS,
  GET_ALL_FILMS,
  GET_ALL_PLANETS,
  GET_ALL_SPECIES,
  GET_ALL_STARSHIPS,
  GET_ALL_VEHICLES,
  GET_FILMS_DETAIL,
  GET_PLANETS_DETAIL,
  GET_SPECIES_DETAIL,
  GET_STARSHIPS_DETAIL,
  GET_VEHICLES_DETAIL,
  SET_DETAIL_CHARACTER,
  SET_FILMS_DETAIL,
  SET_PLANETS_DETAIL,
  SET_SPECIES_DETAIL,
  SET_STARSHIPS_DETAIL,
  SET_VEHICLES_DETAIL,
} from "../actions/actionTypes";

const initialState = {
  characters: [],
  characterDetails: {},
  planets: [],
  planetsDetails: {},
  vehicles: [],
  vehiclesDetails: {},
  species: [],
  speciesDetails: {},
  starships: [],
  starshipsDetails: {},
  films: [],
  filmsDetails: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //<---------------------------------------------CHARACTERS---------------------------------------->
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
    //<---------------------------------------------PLANETS---------------------------------------->
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
    //<---------------------------------------------VEHICLES---------------------------------------->
    case GET_ALL_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };
    case GET_VEHICLES_DETAIL:
      return {
        ...state,
        vehiclesDetails: action.payload,
      };
    case SET_VEHICLES_DETAIL:
      return {
        ...state,
        vehiclesDetails: {},
      };
    //<---------------------------------------------SPECIES---------------------------------------->
    case GET_ALL_SPECIES:
      return {
        ...state,
        species: action.payload,
      };
    case GET_SPECIES_DETAIL:
      return {
        ...state,
        speciesDetails: action.payload,
      };
    case SET_SPECIES_DETAIL:
      return {
        ...state,
        speciesDetails: {},
      };
    //<---------------------------------------------STARSHIPS---------------------------------------->
    case GET_ALL_STARSHIPS:
      return {
        ...state,
        starships: action.payload,
      };
    case GET_STARSHIPS_DETAIL:
      return {
        ...state,
        starshipsDetails: action.payload,
      };
    case SET_STARSHIPS_DETAIL:
      return {
        ...state,
        starshipsDetails: {},
      };
    //<---------------------------------------------FILMS---------------------------------------->
    case GET_ALL_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    case GET_FILMS_DETAIL:
      return {
        ...state,
        filmsDetails: action.payload,
      };
    case SET_FILMS_DETAIL:
      return {
        ...state,
        filmsDetails: {},
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
