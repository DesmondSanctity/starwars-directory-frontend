import request from '../../services/request';
import endpoints from '../../services/endpoints';

export const getPlanets = (page) => {
  let options = {
    ...endpoints.getPlanets(page)
  };
  return request.make(options)
}

export const getPlanet = (id) => {
  let options = {
    ...endpoints.getPlanet(id)
  };
  return request.make(options)
}

export const getPage = (url) => {
  let options = {
    ...endpoints.getPage(url)
  };
  return request.make(options)
}
