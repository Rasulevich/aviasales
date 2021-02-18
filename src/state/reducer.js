const initialState = {
    filters:'off',
    noStopsCheck:false,
    oneStopCheck:false,
    twoStopsCheck:false,
    threeStopsCheck:false,
    sorting:'off',
    checkbox:'off',
    tickets:[],
    preload:[],
    loading:true,
    error:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TICKETS_LOADED':
            return {
                ...state,
                tickets:action.payload,
                loading:false
            }
        case 'PRELOAD_TICKETS':
            return {
                ...state,
                preload:action.payload,
                loading:true
            }
        case 'ERROR':
            return {
                ...state,
                error:true,
                loading:false,
            }
        case 'all':
            return {
                ...state,
                filters: 'on',
                checkbox: 'all',
                noStopsCheck:true,
                oneStopCheck:true,
                twoStopsCheck:true,
                threeStopsCheck:true
            }
        case 'allOff':
            return {
                ...state,
                filters:'off',
                checkbox : 'allOff',
                noStopsCheck:false,
                oneStopCheck:false,
                twoStopsCheck:false,
                threeStopsCheck:false,
            }   
        case 'noStops':
            return {
                ...state,
                filters: 'off',
                checkbox: 'off',
                noStopsCheck:!state.noStopsCheck
            }
        case 'oneStop':
            return {
                ...state,
                filters: 'off',
                checkbox: 'off',
                oneStopCheck:!state.oneStopCheck
            }
        case 'twoStops':
            return {
                ...state,
                filters:'off',
                checkbox: 'off',
                twoStopsCheck :!state.twoStopsCheck
            }
        case 'threeStops':
            return {
                ...state,
                filters:'off',
                checkbox: 'off',
                threeStopsCheck :!state.threeStopsCheck
            }
        case 'cheap':
            return {
                ...state,
                sorting : 'cheap'
            }
        case 'fast':
            return {
                ...state,
                sorting : 'fast'
            }
        default:
            return state;
    }
}

export default reducer;

