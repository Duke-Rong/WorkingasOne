import { combineReducers } from 'redux-immutable';
import headReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import detailReducer from '../pages/detail/store/reducer';

export default combineReducers({
    header: headReducer,
    home: homeReducer,
    detail: detailReducer
})