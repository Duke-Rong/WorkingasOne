import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    pageNow: 1,
    lastArticle: false,
    articleList: [],
    recommendList: []
});

const generate_initial_data = (state, action) => {
    var newArticleList = action.articleList;
    var newRecommendList = action.recommendList;
    return state.merge({
        articleList: fromJS(newArticleList),
        recommendList: fromJS(newRecommendList)
    })
}

const more_page = (state) => {
    var page = state.toJS()
    if (page.pageNow < Math.ceil(page.articleList.length / 3)) { 
        page.pageNow++;
        return state.set('pageNow',page.pageNow);
    } else {
        return state.set('pageNow',page.pageNow).set('lastArticle',true);   
    }
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case (actionTypes.GENERATE_INITIAL_DATA):
            return generate_initial_data(state,action);
        case (actionTypes.MORE_PAGE):
            return more_page(state);
        default: return state;
    }
}