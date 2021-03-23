import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ClipLoader from "react-spinners/ClipLoader";
import {Alert } from 'antd';
import Tickets from '../tickets/tickets';
import {getSortingTickets, getSortingPreloadTickets} from '../selectors/selectors';
import style from './ticketsList.module.scss';

const TicketsList = ({tickets, preload, status}) => {

    const elements = tickets.slice(0, 5).map((item) => (
                                            <div key={item.id}>
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

    const preloadElements = preload.slice(0, 5).map((item) => (
                                            <div key={item.id}>
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

    if (status.loading) {
        return (
            <div className={style.loader}><ClipLoader  size={25} color='blue'/>
                {preloadElements}
            </div>
        )
    }

    if (status.error) {
    return <Alert className={style.error} message="Something go wrong" type="success"/>
    }
    
    return (
        <div>
           {elements}
        </div>
    )
}

const mapStateToProps = (state) => ({
        tickets:getSortingTickets(state),
        preload:getSortingPreloadTickets(state),
        status:state.ticketsReducer     
    })

TicketsList.propTypes = {
    tickets:PropTypes.arrayOf(PropTypes.any),
    preload:PropTypes.arrayOf(PropTypes.any),
    status:PropTypes.objectOf(PropTypes.any)

}

TicketsList.defaultProps = {
    tickets:[],
    preload:[],
    status:{}
}

export default connect(mapStateToProps)(TicketsList);