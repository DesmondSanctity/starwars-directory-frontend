import request from '../../services/request';
import endpoints from '../../services/endpoints';

export const getStarships = (page) => {
  let options = {
    ...endpoints.getStarships(page)
  };
  return request.make(options)
}

export const getStarship = (id) => {
  let options = {
    ...endpoints.getStarship(id)
  };
  return request.make(options)
}

export const getPage = (url) => {
  let options = {
    ...endpoints.getPage(url)
  };
  return request.make(options)
}
