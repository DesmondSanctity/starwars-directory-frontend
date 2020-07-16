import * as actions from './starshipActions';
import * as request from './starshipRequest';

export const getStarships = (page=1) => {
  return dispatch => {
    dispatch(actions.getStarships());
    request.getStarships(page).then((response) => {
      if(response.status === 200)
        dispatch(actions.getStarshipsSuccess(response.data));
    }).catch((error) => {
      dispatch(actions.getStarshipsFailure(error))
    })
  }
}
export const getPage = (url) => {
  return dispatch => {
    dispatch(actions.getStarships());
    request.getPage(url).then((response) => {
      if(response.status === 200 )
        dispatch(actions.getStarshipsSuccess(response.data));
    }).catch((error) => {
      dispatch(actions.getStarshipsFailure(error))
    })
  }
}

export const getStarship = (id) => {
  return dispatch => {
    dispatch(actions.getStarship());
    request.getStarship().then((response) => {
      if(response.status === 200)
      dispatch(actions.getStarshipSuccess(response));
    }).catch((error) => {
      dispatch(actions.getStarshipFailure(error))
    })
  }
}
