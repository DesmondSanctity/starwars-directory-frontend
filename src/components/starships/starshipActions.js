import * as types from '../constants';

export const getStarships = () => {
  return {
    type: types.GET_STARSHIPS
  }
}

export const getStarshipsSuccess = (payload) => {
  return {
    type: types.GET_STARSHIPS_SUCCESS,
    payload
  }
}

export const getStarshipsFailure = (payload) => {
  return {
    type: types.GET_STARSHIPS_FAILURE,
    payload
  }
}

export const getStarship = () => {
  return {
    type: types.GET_STARSHIP
  }
}

export const getStarshipSuccess = (payload) => {
  return {
    type: types.GET_STARSHIP_SUCCESS,
    payload
  }
}

export const getStarshipFailure = (payload) => {
  return {
    type: types.GET_STARSHIP_FAILURE,
    payload
  }
}
