import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';

class Detail extends PureComponent {
    render() {
        return ( 
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" />
                    <Input placeholder="密码" />
                    <Button>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }

    componentDidMount() {
        
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);