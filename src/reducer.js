import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILURE } from './components/constants';
import { GET_PLANETS, GET_PLANETS_SUCCESS, GET_PLANETS_FAILURE } from './components/constants';
import { GET_STARSHIPS, GET_STARSHIPS_SUCCESS, GET_STARSHIPS_FAILURE } from './components/constants';

const initialState = {
  people: [],
  planets:[],
  starships: [],
  person: {},
  planet:{},
  starship:{},
  error: '',
  loading: false
}

 export default (state=initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return (
        Object.assign({}, state, {
          loading: true
        })
      )
    case GET_PEOPLE_SUCCESS:
        return (
          Object.assign({}, state, {
            loading: false,
            people: action.payload
          })
        )
    case GET_PEOPLE_FAILURE:
          return (
            Object.assign({}, state, {
              loading: false,
              error: action.error
            })
          )
          case GET_PLANETS:
            return (
              Object.assign({}, state, {
                loading: true
              })
            )
          case GET_PLANETS_SUCCESS:
              return (
                Object.assign({}, state, {
                  loading: false,
                  planets: action.payload
                })
              )
          case GET_PLANETS_FAILURE:
                return (
                  Object.assign({}, state, {
                    loading: false,
                    error: action.error
                  })
                )
                case GET_STARSHIPS:
                  return (
                    Object.assign({}, state, {
                      loading: true
                    })
                  )
                case GET_STARSHIPS_SUCCESS:
                    return (
                      Object.assign({}, state, {
                        loading: false,
                        starships: action.payload
                      })
                    )
                case GET_STARSHIPS_FAILURE:
                      return (
                        Object.assign({}, state, {
                          loading: false,
                          error: action.error
                        })
                      )
    default:
      return state
  }
}
