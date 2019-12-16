import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux';
import TodoList from './todoList';

class Detail extends PureComponent {
    
    render() {
        const newList = this.props.list;
        const id = this.props.match.params.id;
        return ( 
            <DetailWrapper>
                <Header>{newList.getIn([id-1,'title'])}</Header>
                <Content>
                    <div className='pic-div'>
                        <img src={newList.getIn([id-1,'pic'])} alt=''/>
                    </div>
                    <p>{newList.getIn([id-1,'description'])}</p>
                </Content>
                <TodoList id={id}/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getData();
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('detail').get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       getData() {
           dispatch(actionCreators.getDetail());
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);