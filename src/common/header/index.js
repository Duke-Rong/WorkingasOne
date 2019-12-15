import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button } from './style.js';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends PureComponent {

    render() {
        const { focused, handleFocus, handleUnFocus } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'><Logo /></Link>
                <Nav>
                <Link to='/'><NavItem className="left backToMainPage">Main page</NavItem></Link>
                    <NavItem className="right">Theme</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={350} classNames="slide">
                            <NavSearch className={focused ? 'focused' : ''} onFocus={handleFocus} onBlur={handleUnFocus}></NavSearch>
                        </CSSTransition>
                            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">My account</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.focus_on);
        },
        handleUnFocus() {
            dispatch(actionCreators.focus_off);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);