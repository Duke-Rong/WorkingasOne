import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class Home extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            backToTopShown: false
        };
        this.changeScrollShow = this.changeScrollShow.bind(this);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.state.backToTopShown ? <BackTop onClick={this.backToTop}>个</BackTop> : ''}
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.generateList();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeScrollShow)
    }

    bindEvents(){
        window.addEventListener('scroll', this.changeScrollShow)
    }

    backToTop(){
        window.scrollTo(0,0);
    }

    changeScrollShow() {
        if(document.documentElement.scrollTop > 300) {
            this.setState({
                backToTopShown : true
            });
        } else {
            this.setState({
                backToTopShown : false
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        // backToTopShown: state.get('home').get('backToTopShown')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        generateList() {
            dispatch(actionCreators.generateList());
        }
        // changeScrollShow() {
        //     if(document.documentElement.scrollTop > 300) {
        //         dispatch(actionCreators.scrollTopShow);
        //     } else {
        //         dispatch(actionCreators.scrollTopUnshow);
        //     }
        // }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);