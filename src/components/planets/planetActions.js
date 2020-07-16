import * as types from '../constants';

export const getPlanets = () => {  
  return {
    type: types.GET_PLANETS
  }
}

export const getPlanetsSuccess = (payload) => {
  return {
    type: types.GET_PLANETS_SUCCESS,
    payload
  }
}

export const getPlanetsFailure = (error) => {
  return {
    type: types.GET_PLANETS_FAILURE,
    error
  }
}

export const getPlanet = () => {
  return {
    type: types.GET_PLANET
  }
}

export const getPlanetSuccess = (payload) => {
  return {
    type: types.GET_PLANET_SUCCESS,
    payload
  }
}

export const getPlanetFailure = (error) => {
  return {
    type: types.GET_PLANET_FAILURE,
    error
  }
}
