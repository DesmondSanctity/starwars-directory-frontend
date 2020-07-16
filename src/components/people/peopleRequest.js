import request from '../../services/request';
import endpoints from '../../services/endpoints';

export const getPeople = (page) => {
  let options = {
    ...endpoints.getPeople(page)
  };
  return request.make(options)
}

export const getPerson = (id) => {
  let options = {
    ...endpoints.getPerson(id)
  };
  return request.make(options)
}

export const getPage = (url) => {
  let options = {
    ...endpoints.getPage(url)
  };
  return request.make(options)
}
