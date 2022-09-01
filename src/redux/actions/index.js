import axios from "axios";
import {
  GET_ALL_CHARACTERS,
  GET_ALL_DETAILS,
  SET_DETAIL_CHARACTER,
  GET_ALL_PLANETS,
  GET_PLANETS_DETAIL,
  SET_PLANETS_DETAIL,
  GET_ALL_VEHICLES,
  GET_VEHICLES_DETAIL,
  SET_VEHICLES_DETAIL,
  GET_ALL_SPECIES,
  GET_SPECIES_DETAIL,
  SET_SPECIES_DETAIL,
  GET_ALL_STARSHIPS,
  GET_STARSHIPS_DETAIL,
  SET_STARSHIPS_DETAIL,
  GET_ALL_FILMS,
  GET_FILMS_DETAIL,
  SET_FILMS_DETAIL,
  GET_FILMS_TITLE,
} from "./actionTypes";


//<---------------------------------------------CHARACTERS---------------------------------------->
export const getAllCharacters = (page) => {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/characters?page=${page}`);
      return dispatch({
        type: GET_ALL_CHARACTERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllDetails = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/characters/${id}`);
      return dispatch({
        type: GET_ALL_DETAILS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function setDetail() {
  return async function (dispatch) {
    return dispatch({
      type: SET_DETAIL_CHARACTER,
    });
  };
}

//<---------------------------------------------PLANETS---------------------------------------->
export const getAllPlanets = (page) => {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/planets?page=${page}`);
      return dispatch({
        type: GET_ALL_PLANETS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllPlanetsDetails = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/planets/${id}`);
      return dispatch({
        type: GET_PLANETS_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function setDetailPlanets() {
  return async function (dispatch) {
    return dispatch({
      type: SET_PLANETS_DETAIL,
    });
  };
}

//<---------------------------------------------VEHICLES---------------------------------------->
export const getAllVehicles = (page) => {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/vehicles?page=${page}`);
      return dispatch({
        type: GET_ALL_VEHICLES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllVehiclesDetails = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/vehicles/${id}`);
      return dispatch({
        type: GET_VEHICLES_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function setDetailVehicles() {
  return async function (dispatch) {
    return dispatch({
      type: SET_VEHICLES_DETAIL,
    });
  };
}

//<---------------------------------------------SPECIES---------------------------------------->
export const getAllSpecies = (page) => {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/species?page=${page}`);
      return dispatch({
        type: GET_ALL_SPECIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllSpeciesDetails = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/species/${id}`);
      return dispatch({
        type: GET_SPECIES_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function setDetailSpecies() {
  return async function (dispatch) {
    return dispatch({
      type: SET_SPECIES_DETAIL,
    });
  };
}

//<---------------------------------------------STARSHIPS---------------------------------------->
export const getAllStarships = (page) => {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/starships?page=${page}`);
      return dispatch({
        type: GET_ALL_STARSHIPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllStarshipsDetails = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/starships/${id}`);
      return dispatch({
        type: GET_STARSHIPS_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function setDetailStarships() {
  return async function (dispatch) {
    return dispatch({
      type: SET_STARSHIPS_DETAIL,
    });
  };
}

//<---------------------------------------------FILMS---------------------------------------->
export const getAllFilms = () => {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/films/`);
      return dispatch({
        type: GET_ALL_FILMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllFilmsTitle = () => {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/films/title`);
      return dispatch({
        type: GET_FILMS_TITLE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllFilmsDetails = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/films/${id}`);
      return dispatch({
        type: GET_FILMS_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function setDetailFilms() {
  return async function (dispatch) {
    return dispatch({
      type: SET_FILMS_DETAIL,
    });
  };
}