/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../state/actions';
import style from './filters.module.scss';

const Filters = ({check, all, oneStop, twoStops, threeStops, noStops, 
                allOff, ticketsLoaded, preloadTickets}) => {
   
    const {noStopsCheck,oneStopCheck,twoStopsCheck,threeStopsCheck} = check;
    const allChecked = () => {
        if (noStopsCheck && oneStopCheck && twoStopsCheck && threeStopsCheck ) {
            return true
        }
        return false
    }

    useEffect(() => {
        preloadTickets()
        ticketsLoaded()
    },[preloadTickets, ticketsLoaded ])
    return  (
        <div className={style.filters}>
            <div className={style.filter__header}>Количество пересадок</div>
            <div className={style.filter__content}>
                <div className={style.filter__controls}>
                    <div className={style.checkboxes__list}>
                        <div className={style.checkboxes__list__item}>
                            <label className={style.checkbox__other}>
                                <input 
                                onChange={check.filters === 'off' ? all : allOff}
                                checked={check.checkbox === 'all' || allChecked() ? 'checked' : false}                                
                                type="checkbox"
                                />
                                <span className={style.label}>Все</span> 
                            </label>
                        </div> 
                        <div className={style.checkboxes__list__item}>
                            <label className={style.checkbox__other}>
                                <input 
                                onChange={check.checkbox === 'all' ? allOff : noStops }
                                checked={check.checkbox === 'all' ? 'checked' : check.noStopsCheck }                                
                                type="checkbox"/>
                                <span className={style.label}>Без пересадок</span> 
                            </label>
                        </div> 
                        <div className={style.checkboxes__list__item}>
                            <label className={style.checkbox__other}>
                                <input
                                checked={check.checkbox === 'all' ? 'checked' : check.oneStopCheck}                              
                                onChange={check.checkbox === 'all' ? allOff : oneStop}                                
                                type="checkbox"/>                     
                                <span className={style.label}>1 пересадка</span> 
                            </label>
                        </div> 
                        <div className={style.checkboxes__list__item}>
                            <label className={style.checkbox__other}>
                                <input 
                                checked={check.checkbox === 'all' ? 'checked' : check.twoStopsCheck}                                
                                onChange={check.checkbox === 'all' ? allOff : twoStops}
                                type="checkbox"/>
                                <span className={style.label}>2 пересадки</span> 
                            </label>
                        </div> 
                        <div className={style.checkboxes__list__item}>
                           <label className={style.checkbox__other}>
	                            <input 
                                checked={check.checkbox === 'all' ? 'checked' : check.threeStopsCheck}                                
                                onChange={check.checkbox === 'all' ? allOff : threeStops}
                                type="checkbox"/>
	                            <span className={style.label}>3 пересадки</span>
                          </label>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
        check:state,
    })


const mapDispatchToProps = (dispatch) => {
    
    const { all, oneStop, twoStops, threeStops, noStops, allOff, ticketsLoaded, preloadTickets} = bindActionCreators(actions, dispatch);

    return {
        all,
        oneStop,
        twoStops,
        threeStops,
        noStops,
        allOff,
        ticketsLoaded,
        preloadTickets
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);