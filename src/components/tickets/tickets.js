/* eslint-disable react/prop-types */
import React from 'react';
import style from './tickets.module.scss';


const Tickets = ({price,dateStart,dateBack, airportStart, airportBack, 
    duration, durationBack,stopsStart, stopsBack,carrier}) => {

    const timeStart = dateStart.slice(11,16);
    const timeEnd = dateBack.slice(11,16);
    const getTimeFromMins = (mins) => {
        const hours = Math.trunc(mins/60);
        const minutes = mins % 60;
        return `${hours  }ч:${  minutes}м`;
    };
    const stopsElements = (direction) =>direction.join(', ');
    const logo = `//pics.avs.io/99/36/${carrier}.png`;

    const TrueGrammatic = (way) => {
        switch (way.length) {
            case 0 :
                return 'Без пересадок'
            case 1 :
                return '1 пересадка'
            case 2 :
                return `2 пересадки`
            case 3:
                return `3 пересадки`
            default:
                 return `${way.length} пересадка`
        }
    }

  
    return(
            <div className={style.tickets}>
                <div className={style.tickets__header}> 
                    <span className={style.price}>{price} P </span> 
                    <span className={style.airlines}>
                        <img src={logo} alt='S7'/></span>
                </div>
                <div className={style.tickets__content}>
                    <div className={style.ticket__info}>
                        <div className={style.ticket__section}>
                            <span className={style.info__header}>{airportStart}-{airportBack}</span>
                            <span className={style.info__content}>{timeStart} - {timeEnd}</span>
                        </div>
                        <div className={style.ticket__sectionTwo}>
                            <span className={style.info__header}>В пути</span>
                            <span className={style.info__content}>{getTimeFromMins(duration)}</span>
                        </div>
                        <div className={style.ticket__sectionThree}>
                            <span className={style.info__header}>{TrueGrammatic(stopsStart)}</span>
                            <span className={style.info__content}>{stopsElements(stopsStart)}</span>
                        </div>
                    </div>
                    <div className={style.ticket__info}>
                        <div className={style.ticket__section}>
                            <span className={style.info__header}>{airportBack}-{airportStart}</span>
                            <span className={style.info__content}>10:30 - 12:45</span>
                        </div>
                        <div className={style.ticket__sectionTwo}>
                            <span className={style.info__header}>В пути</span>
                            <span className={style.info__content}>{getTimeFromMins(durationBack)}</span>
                        </div>
                        <div className={style.ticket__sectionThree}>
                            <span className={style.info__header}>{TrueGrammatic(stopsBack)}</span>
                            <span className={style.info__content}>{stopsElements(stopsBack)}</span>
                        </div>
                    </div>
                </div>
            </div> 
        )
}


export default Tickets;