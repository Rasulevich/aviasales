export const getTickets = (state) => state.ticketsReducer.tickets;

export const getPreloadTickets = (state) => state.ticketsReducer.preload;

export const getSorting  = (state, items) => {

    const sorted = state.filtersReducer.sorting;
    
    const numbersOfStops = [state.filtersReducer.noStopsCheck,state.filtersReducer.oneStopCheck,state.filtersReducer.twoStopsCheck,state.filtersReducer.threeStopsCheck];
    
    for (let i = 0; i <= 3; i++) {
        // eslint-disable-next-line no-unused-expressions
        numbersOfStops[i] ? numbersOfStops[i] = i : false
    }

    if (sorted === 'cheap') { items.sort((itemA,itemB) => itemA.price - itemB.price)};
    
    if (sorted === 'fast') {items.sort((itemA, itemB) => itemA.segments[0].duration - itemB.segments[0].duration)};

    const newItems = items.filter(item =>
                      numbersOfStops.includes(item.segments[0].stops.length) || !numbersOfStops.some(el => typeof el === 'number') )

    return newItems
}

export const getSortingPreloadTickets  = (state) => { 
    const items = getPreloadTickets(state)
    return getSorting(state,items)
}

export const getSortingTickets  = (state) => { 
    const items = getTickets(state)
    return getSorting(state,items)
}