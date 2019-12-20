import * as actionTypes from './actionTypes'
import axios from 'axios'

// ---------------------------- private -----------------------

const getDetailAction = (res) => ({
    type: actionTypes.GET_DETAIL,
    list: res.data.data.List
})


// ---------------------------- public ------------------------

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detailData.json').then((res) => {
            dispatch(getDetailAction(res))
        }).catch(() => {
            console.log('error')
        })
    }
}