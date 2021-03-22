const TICKETS_LOADED = 'TICKETS_LOADED';
const PRELOAD_TICKETS = 'PRELOAD_TICKETS';
const ERROR = 'ERROR';
const NOT_ERROR = 'NOT_ERROR';


const initialState = {
    tickets:[],
    preload:[],
    loading:false,
    error:false,
}

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TICKETS_LOADED:
            return {
                ...state,
                tickets:action.payload,
                error:false,
                loading:false
            }
        case PRELOAD_TICKETS:
            return {
                ...state,
                preload:action.payload,
                loading:true
            }
        case ERROR:
            return {
                ...state,
                error:true,
                loading:false,
                message:action.payload
            }
        case NOT_ERROR:
            return {
                ...state,
                error:false,
                loading:true
            }
        default:
            return state;
    }
}

export default ticketsReducer;

