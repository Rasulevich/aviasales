import React from 'react';
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
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
        check:state.filtersReducer
    })  

const mapDispatchToProps = (dispatch) => {
    const {cheap,fast} = bindActionCreators(actions, dispatch);
    return {cheap,fast}
}

Sorting.propTypes = {
    cheap:PropTypes.func,
    fast:PropTypes.func
}

Sorting.defaultProps = {
    cheap:(() => {}),
    fast:(() => {})
}

export default connect(mapStateToProps, mapDispatchToProps )(Sorting);