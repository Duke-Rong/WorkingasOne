import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Dashboard from './components/Dashboard';
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
                    <Dashboard />
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

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        generateList() {
            dispatch(actionCreators.generateList());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);