/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import {Alert } from 'antd/lib/alert/ErrorBoundary';
import Tickets from '../tickets/tickets';
import style from './ticketsList.module.scss';

const TicketsList = ({check, items,preload}) => {

    const numbersOfStops = [check.noStopsCheck,check.oneStopCheck,check.twoStopsCheck,check.threeStopsCheck];
    for (let i = 0; i <= 3; i++) {
        // eslint-disable-next-line no-unused-expressions
        numbersOfStops[i] ? numbersOfStops[i] = i : false
    }
    if (check.sorting === 'cheap') {
        
         items.sort((itemA,itemB) => itemA.price - itemB.price)
     }
    
    if (check.sorting === 'fast') {
        items.sort((itemA, itemB) => itemA.segments[0].duration - itemB.segments[0].duration)
    }

    const elements = items.filter(item => numbersOfStops.includes(item.segments[0].stops.length) || !numbersOfStops.some(el => typeof el === 'number') )
                            .map((item) => (
                                            <div key={item.price*item.segments[0].duration}>
                                                <Tickets
                                                price={item.price}
                                                dateStart={item.segments[0].date}
                                                dateBack={item.segments[1].date}
                                                airportStart={item.segments[0].origin}
                                                airportBack={item.segments[0].destination}
                                                duration={item.segments[0].duration}
                                                durationBack={item.segments[1].duration}
                                                stopsStart={item.segments[0].stops}
                                                stopsBack={item.segments[1].stops}
                                                carrier={item.carrier}
                                                />
                                            </div>
                                        ))
    const preloadElements = preload.map((item) => (
                                            <div key={item.price*item.segments[0].duration}>
                                                <Tickets
                                                price={item.price}
                                                dateStart={item.segments[0].date}
                                                dateBack={item.segments[1].date}
                                                airportStart={item.segments[0].origin}
                                                airportBack={item.segments[0].destination}
                                                duration={item.segments[0].duration}
                                                durationBack={item.segments[1].duration}
                                                stopsStart={item.segments[0].stops}
                                                stopsBack={item.segments[1].stops}
                                                carrier={item.carrier}
                                                />
                                            </div>
    ))
    if (check.loading) {
        return (
            <div className={style.loader}><ClipLoader  size={25} color='blue'/>
                {preloadElements}
            </div>
        )
    }
    if (check.error) {
        return (
            <Alert className={style.error} message="Something go wrong" type="success"/>
        )
    }
    return (
        <div>
           {elements}
        </div>
    )
}

const mapStateToProps = (state) => ({
        check:state,
        items:state.tickets,
        preload:state.preload
    })
export default connect(mapStateToProps)(TicketsList);