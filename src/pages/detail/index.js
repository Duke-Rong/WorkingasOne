import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux';
import TodoList from './todoList';

class Detail extends PureComponent {
    
    render() {
        const newList = this.props.list;
        const id = this.props.match.params.id;
        const newTodoList = this.props.userList.getIn([id-1,'todoList']);
        // if(newTodoList!==undefined){
        //     console.log(newTodoList.getIn([0]).toArray());
        // }
        const newDoneList = this.props.userList.getIn([id-1,'doneList']);
        return ( 
            <DetailWrapper>
                <Header>{newList.getIn([id-1,'title'])}</Header>
                <Content>
                    <div className='pic-div'>
                        <img src={newList.getIn([id-1,'pic'])} alt=''/>
                    </div>
                    <p>{newList.getIn([id-1,'description'])}</p>
                </Content>
                <TodoList id={id} todoList={newTodoList} message="Todo List"/>
                <TodoList id={id} todoList={newDoneList} message="Done List"/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        if (this.props.initial) {
            this.props.getData();
            this.props.getInitialTodoList();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('detail').get('list'),
        initial: state.get('detail').get('initial'),
        userList: state.get('detail').get('userList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       getData() {
           dispatch(actionCreators.getDetail());
       },
       getInitialTodoList() {
           dispatch(actionCreators.getTodoList());
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);