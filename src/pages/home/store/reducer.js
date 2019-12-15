import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
import list_pic_1 from '../../../statics/list-pic-1.jpeg';
import recommend_list_1 from '../../../statics/recommend-list-1.png';
import recommend_list_2 from '../../../statics/recommend-list-2.png';
import recommend_list_3 from '../../../statics/recommend-list-3.png';
import recommend_list_4 from '../../../statics/recommend-list-4.png';

const defaultState = fromJS({
    pageNow: 1,
    lastArticle: false,
    articleList: [],
    recommendList: [],
    // backToTopShown: false
});

const generate_initial_data = (state, action) => {
    var newArticleList = action.articleList;
    newArticleList.map((item)=>{
        item.pic = list_pic_1;
        return item;
    })
    var newRecommendList = action.recommendList;
    newRecommendList[0].pic = recommend_list_1;
    newRecommendList[1].pic = recommend_list_2;
    newRecommendList[2].pic = recommend_list_3;
    newRecommendList[3].pic = recommend_list_4;
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
        // case (actionTypes.SCROLLTOPSHOWN):
        //     return state.set('backToTopShown',action.value);
        default: return state;
    }
}