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
                <button onClick={console.log(this.props.haha)}>haha</button>
                <HomeRight>
                    <Recommend />
                    <Dashboard />
                </HomeRight>
                {this.state.backToTopShown ? <BackTop onClick={this.backToTop}>个</BackTop> : ''}
            </HomeWrapper>
        );
    }

    componentWillMount() {
        // this.hahaRef = base.syncState('haha',{
        //     context: this,
        //     state: 'haha'
        // })
    }

    componentDidMount() {
        this.props.generateList();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeScrollShow)
        // base.removeBinding(this.hahaRef);
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