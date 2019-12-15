import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    page: 1,
    totalPage: -1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case (actionTypes.FOCUS_ON): 
            // 此处，state并非被修改，而是系统创建了一个新的state，
            // 因此必须使用return
            return state.set('focused',true);
        case (actionTypes.FOCUS_OFF): 
            return state.set('focused',false);
        default: return state;
    }
}