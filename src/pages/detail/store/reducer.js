import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    initial: true,
    list: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case (actionTypes.GET_DETAIL):
            return state.set('list', fromJS(action.list))
        default: return state;
    }
}