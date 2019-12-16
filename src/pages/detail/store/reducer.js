import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    initial: true,
    list: [],
    userList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case (actionTypes.GET_DETAIL):
            return state.set('list', fromJS(action.list))
        case (actionTypes.GET_INITIAL_TODOLIST):
            return state.set('userList', fromJS(action.userList)).set('initial', false)
        default: return state;
    }
}