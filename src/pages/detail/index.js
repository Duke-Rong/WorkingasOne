import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux';

class Detail extends PureComponent {
    render() {
        const newList = this.props.list;
        const id = this.props.match.params.id;
        return ( 
            <DetailWrapper>
                <Header>{newList.getIn([id-1,'title'])}</Header>
                <Content>
                    <div class='pic-div'>
                        <img src={newList.getIn([id-1,'pic'])} alt=''/>
                    </div>
                    <p>{newList.getIn([id-1,'description'])}</p>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getData(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('detail').get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       getData(id) {
           dispatch(actionCreators.getDetail(id));
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);