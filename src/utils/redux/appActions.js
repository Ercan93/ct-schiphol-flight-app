export const setFlights = (flights) => ({
  type: 'SET_FLIGHTS',
  flights
});

export const setFlightDirection = (flightDirection) => ({
  type: 'FLIGHT_DIRECTION',
  flightDirection
});

export const setSearch = (search) => ({
  type: 'SET_SEARCH',
  search
});

export const setSelectedDate = (selectedDate) => ({
  type: 'SET_SELECTED_DATE',
  selectedDate
});

export const setFirstLoad = (firstLoad) => ({
  type: 'SET_FIRST_LOAD',
  firstLoad
});