import Actions from './actions.config'; 


const initialState = {
    flights: []
  }

  export default function root(state = initialState, action: any) {

    switch (action.type) {
      case Actions.SET_FLIGHTS: {      
        const {flights} = action.payload
        return {
          ...state, flights
        }
      }
      
      case Actions.DELETE_FLIGHT: {
        const {flightId} = action.payload;
        const {flights} = state;
        const updatedArray = flights.filter((flight: any) => flight.id !== flightId )
        return {...state, flights: updatedArray }
      }
      default:
          return state;
        }
      }
