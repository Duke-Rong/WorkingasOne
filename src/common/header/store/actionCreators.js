import axios from 'axios';
import * as actionTypes from './actionTypes'

// ------------------------  private ------------------------

const changeTheme = (result) => ({
    type: actionTypes.GENERATE_THEME,
    themeList: result.data.data.Theme
})

// -------------------------- public ---------------------------

export const focus_on =  {
    type: actionTypes.FOCUS_ON
};

export const focus_off =  {
    type: actionTypes.FOCUS_OFF
};

export const generateTheme = () => {
    return (dispatch) => {
        axios.get('/api/themeData.json').then((res) => {
            dispatch(changeTheme(res))
        }).catch(() => {
            console.log('error')
        })
    }
}