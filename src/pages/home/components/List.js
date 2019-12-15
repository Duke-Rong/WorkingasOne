import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'

class List extends PureComponent {

    listItem(item, index) {
        return (
            <Link key={index} to={'/detail/' + item.get('id')}>
            <ListItem key={item.get('id')} imgurl={item.get('pic')}>
                <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
                <div className="list-pic"/>
            </ListItem>
            </Link>
        )
    }

    render() {
        const newArticleList = this.props.articleList.slice(0, this.props.pageNow * 3);
        return (
            <div>
                {newArticleList.map((item, index) => {
                    return this.listItem(item, index);
                })}
                <div style={{  paddingLeft: "25%" }}>
                    <LoadMore onClick={this.props.getMoreList}> {this.props.lastArticle ? 'Already the last page' : 'More Projects'}</LoadMore>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.get('home').get('articleList'),
        pageNow: state.get('home').get('pageNow'),
        lastArticle: state.get('home').get('lastArticle')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList() {
            dispatch(actionCreators.morePage)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);