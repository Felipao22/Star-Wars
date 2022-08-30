import axios from "axios";
import {
  GET_ALL_CHARACTERS,
  GET_ALL_DETAILS,
  SET_DETAIL_CHARACTER,
  GET_ALL_PLANETS,
  GET_PLANETS_DETAIL,
  SET_PLANETS_DETAIL,
} from "./actionTypes";

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
