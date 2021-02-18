/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as actions from '../../state/actions';
import style from './sorting.module.scss';

const Sorting = ({cheap , fast}) => (
        <div className={style.sorting}>
            <ul className={style.sorting__list}>
                <button className={style.sorting__listItem}
                    onClick={cheap}
                    type='button'>Самый дешевый</button>
                <button className={style.sorting__listItem}
                    onClick={fast}
                    type='button'>Самый быстрый</button>
            </ul>
        </div>
    )

const mapStateToProps = (state) => ({
        check:state
    })  

const mapDispatchToProps = (dispatch) => {
    const {cheap,fast, optimal} = bindActionCreators(actions, dispatch);
    return {
        cheap,
        fast,
        optimal
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Sorting);