import GetTickets from '../service/service';

const tickets = new GetTickets();

export const all = () => ({type:'all'});
export const oneStop = () => ({type:'oneStop'})
export const twoStops = () => ({type:'twoStops'});
export const threeStops = () => ({type:'threeStops'});
export const noStops = () => ({type:'noStops'});
export const cheap = () => ({type:'cheap'});
export const fast = () => ({type:'fast'});
export const optimal = () => ({type:'optimal'});
export const allOff = () => ({type: 'allOff'});
export const ticketsLoaded = () =>  (dispatch) => {
        tickets.getTickets()
        .then(res => dispatch({type: 'TICKETS_LOADED',payload:res.tickets}))
        .catch(err => dispatch({type: 'ERROR' , payload:err.message}))
    } 
export const preloadTickets = () => (dispatch) => {
    tickets.getTickets()
    .then(res => dispatch({type: 'PRELOAD_TICKETS',payload:res.tickets.slice(0,10)}))
}