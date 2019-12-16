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
        case (actionTypes.DELETE_TASK):
            return state.updateIn(['userList', action.whichUser, action.whichList], list => list.delete(action.whichTask));
        case (actionTypes.MOVE_TASK):
            if (action.whichList === "todoList"){
                return state.updateIn(['userList', action.whichUser, action.whichList], list => list.delete(action.whichTask)).updateIn(['userList', action.whichUser, 'doneList'], list => list.push(action.Task));
            }
            return state.updateIn(['userList', action.whichUser, action.whichList], list => list.delete(action.whichTask)).updateIn(['userList', action.whichUser, 'todoList'], list => list.push(action.Task));
        default: return state;
    }
}