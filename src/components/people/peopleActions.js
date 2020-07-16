import * as types from '../constants';



export const getPeople = () => {
  return {
    type: types.GET_PEOPLE
  }
}

export const getPeopleSuccess = (payload) => {
  return {
    type: types.GET_PEOPLE_SUCCESS,
    payload
  }
}

export const getPeopleFailure = (error) => {
  return {
    type: types.GET_PEOPLE_FAILURE,
    error
  }
}

export const getPerson = () => {
  return {
    type: types.GET_PERSON
  }
}

export const getPersonSuccess = (payload) => {
  return {
    type: types.GET_PERSON_SUCCESS,
    payload
  }
}

export const getPersonFailure = (error) => {
  return {
    type: types.GET_PERSON_FAILURE,
    error
  }
}
