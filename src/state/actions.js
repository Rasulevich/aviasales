import GetTickets from '../service/service';

const tickets = new GetTickets();

export const all = () => ({type:'ALL'});
export const oneStop = () => ({type:'ONESTOP'})
export const twoStops = () => ({type:'TWOSTOPS'});
export const threeStops = () => ({type:'THREESTOPS'});
export const noStops = () => ({type:'NOSTOPS'});
export const cheap = () => ({type:'CHEAP'});
export const fast = () => ({type:'FAST'});
export const allOff = () => ({type: 'ALLOFF'});

export const preloadTickets = () => (dispatch) => {
    tickets.getTickets()
    .then(res => dispatch({type: 'PRELOAD_TICKETS',payload:res.tickets.slice(0,10)}))
    .catch(err => dispatch({type: 'ERROR' , payload:err.message}))
}

export const ticketsLoaded =  () => (dispatch) => {

    const ticketsAll = [];

    const response = async() => {

        tickets.getTickets().then((res) => {
            if(!res.stop) {
                ticketsAll.push(...res.tickets);
                dispatch({type: 'NOT_ERROR'})
                response()
            }
            if(res.stop) {
                dispatch({type: 'TICKETS_LOADED',payload:ticketsAll})
            }
        })
        .catch((err) => {
            dispatch({type: 'ERROR' , payload:err.message})
            response()
        })        
    } 
    response()
}



