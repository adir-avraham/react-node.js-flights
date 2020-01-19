import Actions from './actions.config'; 




export const setFlights = (flights: any) => {

  return {
    
    type: Actions.SET_FLIGHTS,
    payload: { flights }
  }
  
} 

export const deleteFlight = (flightId: any) => {

  return {
    type: Actions.DELETE_FLIGHT,
    payload: { flightId }
  }
}
