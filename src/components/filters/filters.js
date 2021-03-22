import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../../state/actions';
import style from './filters.module.scss';

const Filters = ({check, all, oneStop, twoStops, threeStops, noStops, 
                allOff, ticketsLoaded, preloadTickets}) => {
                    
    const numbersOfStops = [check.noStopsCheck,check.oneStopCheck,check.twoStopsCheck,check.threeStopsCheck];

    const allChecked = () => {
        // eslint-disable-next-line no-unused-expressions
        !numbersOfStops.includes(false)
    }

    useEffect(() => {
        preloadTickets()
        ticketsLoaded()
    },[preloadTickets, ticketsLoaded ]);

    let stops; 
    const action = (index) => {
        switch (index) {
            case 0:
                stops = 'Без пересадок'
                return noStops;
            case 1 :
                stops = '1 пересадка'
                return oneStop;
            case 2 :
                stops = '2 пересадки'
                return twoStops;
            case 3 :
                stops = '3 пересадки'
                return threeStops;
            case 'alloff' :
                return allOff
            default :
                return false
        }
    }

    return  (
        <div className={style.filters}>
            <div className={style.filter__header}>Количество пересадок</div>
            <div className={style.filter__content}>
                <div className={style.filter__controls}>
                    <div className={style.checkboxes__list}>             
                        <div className={style.checkboxes__list__item}>
                            <label className={style.checkbox__other}>
                                <input 
                                    checked={check.checkbox === 'all' || allChecked() ? 'checked' : false}      
                                    onChange={check.filters === 'off' ? all : allOff}                          
                                    type="checkbox"
                                    />
                                <span className={style.label}>Все</span> 
                            </label>
                        </div> 

                        {numbersOfStops.map((item,index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <div className={style.checkboxes__list__item} key={index}>
                                    <label className={style.checkbox__other}>
                                        <input 
                                            checked={check.checkbox === 'all' ? 'checked' : item }  
                                            onChange={check.checkbox === 'all' ? (action(index), allOff) : action(index) }                              
                                            type="checkbox"/>
                                        <span className={style.label}>{stops}</span> 
                                    </label>
                                </div> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
        check:state.filtersReducer,
    })


const mapDispatchToProps = (dispatch) => {
    
    const { all, oneStop, twoStops, threeStops, noStops, allOff, ticketsLoaded, preloadTickets} = bindActionCreators(actions, dispatch);

    return {all,oneStop,twoStops,threeStops,noStops,allOff,ticketsLoaded,preloadTickets};

}

Filters.propTypes = {
    check:PropTypes.objectOf(PropTypes.any),
    all:PropTypes.func,
    oneStop:PropTypes.func,
    twoStops:PropTypes.func,
    threeStops:PropTypes.func,
    noStops:PropTypes.func,
    allOff:PropTypes.func,
    ticketsLoaded:PropTypes.func,
    preloadTickets:PropTypes.func,
}

Filters.defaultProps = {
    check:{},
    all:(() =>{}),
    oneStop:(() =>{}),
    twoStops:(() =>{}),
    threeStops:(() =>{}),
    noStops:(() =>{}),
    allOff:(() =>{}),
    ticketsLoaded:(() =>{}),
    preloadTickets:(() =>{}),
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);