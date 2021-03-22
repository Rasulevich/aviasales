const ALL = 'ALL';
const ALLOFF = 'ALLOFF';
const NOSTOPS ='NOSTOPS';
const ONESTOP ='ONESTOP';
const TWOSTOPS ='TWOSTOPS';
const THREESTOPS ='THREESTOPS';
const CHEAP ='CHEAP';
const FAST ='FAST';

const initialState = {
    filters:'off',
    noStopsCheck:false,
    oneStopCheck:false,
    twoStopsCheck:false,
    threeStopsCheck:false,
    sorting:'off',
    checkbox:'off',
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL:
            return {
                ...state,
                filters: 'on',
                checkbox: 'all',
                noStopsCheck:true,
                oneStopCheck:true,
                twoStopsCheck:true,
                threeStopsCheck:true
            }
        case ALLOFF:
            return {
                ...state,
                filters:'off',
                checkbox : 'allOff',
                noStopsCheck:false,
                oneStopCheck:false,
                twoStopsCheck:false,
                threeStopsCheck:false,
            }   
        case NOSTOPS:
            return {
                ...state,
                filters: 'off',
                checkbox: 'off',
                noStopsCheck:!state.noStopsCheck
            }
        case ONESTOP:
            return {
                ...state,
                filters: 'off',
                checkbox: 'off',
                oneStopCheck:!state.oneStopCheck,
            }
        case TWOSTOPS:
            return {
                ...state,
                filters:'off',
                checkbox: 'off',
                twoStopsCheck :!state.twoStopsCheck
            }
        case THREESTOPS:
            return {
                ...state,
                filters:'off',
                checkbox: 'off',
                threeStopsCheck :!state.threeStopsCheck
            }
        case CHEAP:
            return {
                ...state,
                sorting : 'cheap'
            }
        case FAST:
            return {
                ...state,
                sorting : 'fast'
            }
        default:
            return state;
    }
}

export default filtersReducer;