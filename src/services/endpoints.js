const baseUrl = "https://swapi.dev/api";

export default {
  // People endpoints
  getPeople: (page) => {
    return {
      url: `${baseUrl}/people/?page=${page}`,
      method: "GET",
    };
  },
  getPerson: (id) => {
    return {
      url: `${baseUrl}/people/${id}`,
      method: "GET",
    };
  },
  // Planet endpoints
  getPlanets: (page) => {
    return {
      url: `${baseUrl}/planets/?page=${page}`,
      method: "GET",
    };
  },
  getPlanet: (id) => {
    return {
      url: `${baseUrl}/planets/${id}`,
      method: "GET",
    };
  },
  // Starships endpoints
  getStarships: (page) => {
    return {
      url: `${baseUrl}/starships/?page=${page}`,
      method: "GET",
    };
  },
  getStarship: (id) => {
    return {
      url: `${baseUrl}/starships/${id}`,
      method: "GET",
    };
  },
  getPage: (url) => {
    return {
      url: `${url}`,
      method: "GET",
    };
  },
};
