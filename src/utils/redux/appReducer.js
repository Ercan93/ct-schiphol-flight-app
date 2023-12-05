const initialState = {
  flights: [],
  flightsLoading: false,
  flightsError: false,
  flightsSuccess: false,
  flightDetail: {},
  flightDetailLoading: false,
  flightDetailError: false,
  flightDetailSuccess: false,
  flightDirection: 'D',
  search: '',
  selectedDate: '',
  firstLoad: true
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FLIGHTS':
      return {
        ...state,
        flights: action.flights
      }
    case 'SET_FLIGHTS_LOADING':
      return {
        ...state,
        flightsLoading: action.flightsLoading
      }
    case 'SET_FLIGHTS_ERROR':
      return {
        ...state,
        flightsError: action.flightsError
      }
    case 'SET_FLIGHTS_SUCCESS':
      return {
        ...state,
        flightsSuccess: action.flightsSuccess
      }
    case 'SET_FLIGHT_DETAIL':
      return {
        ...state,
        flightDetail: action.flightDetail
      }
    case 'SET_FLIGHT_DETAIL_LOADING':
      return {
        ...state,
        flightDetailLoading: action.flightDetailLoading
      }
    case 'SET_FLIGHT_DETAIL_ERROR':
      return {
        ...state,
        flightDetailError: action.flightDetailError
      }
    case 'SET_FLIGHT_DETAIL_SUCCESS':
      return {
        ...state,
        flightDetailSuccess: action.flightDetailSuccess
      }
    case 'FLIGHT_DIRECTION':
      return {
        ...state,
        flightDirection: action.flightDirection
      }
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.search
      }
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.selectedDate
      }
    case 'SET_FIRST_LOAD':
      return {
        ...state,
        firstLoad: action.firstLoad
      }
    default:
      return state
  }
}

export default appReducer;