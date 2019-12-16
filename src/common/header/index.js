import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, ThemeWrapper, ThemeSelector, ThemeChoice, NavSearch, SearchWrapper, Addition, Button } from './style.js';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            themeFocused: false
        };
        this.handleThemeFocus = this.handleThemeFocus.bind(this);
        this.handleThemeUnFocus = this.handleThemeUnFocus.bind(this);

    }

    themeChoices() {
        const { themeList } = this.props;
        if (this.state.themeFocused) {
            return (
                <div>
                    <ThemeChoice onClick={this.changeTheme.bind(this,themeList,0)}></ThemeChoice>
                    <ThemeChoice onClick={this.changeTheme.bind(this,themeList,1)}></ThemeChoice>
                    <ThemeChoice onClick={this.changeTheme.bind(this,themeList,2)}></ThemeChoice>
                    <ThemeChoice onClick={this.changeTheme.bind(this,themeList,3)}></ThemeChoice>
                    <ThemeChoice onClick={this.changeTheme.bind(this,themeList,4)}></ThemeChoice>
                </div>
            )
        }
    }

    render() {
        const { focused, handleFocus, handleUnFocus } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'><Logo /></Link>
                <Nav>
                <Link to='/'><NavItem className="left backToMainPage">Main page</NavItem></Link>
                <ThemeWrapper className={this.state.themeFocused ? 'themeFocused' : 'themeUnfocused'} onMouseEnter={this.handleThemeFocus} onMouseLeave={this.handleThemeUnFocus}>
                    <ThemeSelector className={this.state.themeFocused ? 'themeFocused' : 'themeUnfocused'}>
                        <p className={this.state.themeFocused ? 'themeFocused' : 'themeUnfocused'}>Theme</p>
                        {this.themeChoices()}
                    </ThemeSelector>
                </ThemeWrapper>
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

    componentDidMount() {
        this.props.setTheme();
    }

    changeTheme(themeList,themeSelected) {
        document.body.style.backgroundImage = themeList.getIn([themeSelected,'pic']);
    }

    handleThemeFocus() {
        this.setState({
            themeFocused: true
        })
    }

    handleThemeUnFocus() {
        this.setState({
            themeFocused: false
        })
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        themeList: state.get('header').get('themeList'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.focus_on);
        },
        handleUnFocus() {
            dispatch(actionCreators.focus_off);
        },
        setTheme() {
            dispatch(actionCreators.generateTheme());
            document.body.style.backgroundImage = 'url("https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1920x1080.jpg")';
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);