import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
    position: absolute;
    width: 80px;
    height: 56px;
    top: 0;
    left: 0;
    display: block;
    background: url(${logoPic});
    background-size: contain;
    background-repeat: no-repeat;
`

export const Nav = styled.div`
    width: 1060px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px; 
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;

    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.backToMainPage{
        color: #ea6f5a
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
    &.slide-enter {
        transition: all .35s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .35s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        color: #999;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #fff;
        background: #ec6149;
    }
`