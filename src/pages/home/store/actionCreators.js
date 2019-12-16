import axios from 'axios';
import * as actionTypes from './actionTypes';


// ------------------------  private ------------------------

const changeHomeData = (result) => ({
    type: actionTypes.GENERATE_INITIAL_DATA,
    articleList: result.data.data.articleList,
    recommendList: result.data.data.recommendList
})


// ------------------------  public ------------------------

export const generateList = () => {
    return (dispatch) => {
        axios.get('/api/homeData.json').then((res) => {
            dispatch(changeHomeData(res))
        }).catch(() => {
            console.log('error')
        })
    }
}

export const morePage = {
    type: actionTypes.MORE_PAGE
}