import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux';
import TodoList from './todoList';
import { base } from '../../service/firebase.conf'

class Detail extends Component {

    constructor(props){
        super(props);
        this.state = {
            todoList: {}
        }
    }
    
    render() {
        const newList = this.props.list;
        const id = this.props.match.params.id;
        const newTodoList = this.props.userList.getIn([id-1,'todoList']);
        const newDoneList = this.props.userList.getIn([id-1,'doneList']);
        console.log(this.state.todoList);
        return ( 
            <DetailWrapper>
                <Header>{newList.getIn([id-1,'title'])}</Header>
                <Content>
                    <div className='pic-div'>
                        <img src={newList.getIn([id-1,'pic'])} alt=''/>
                    </div>
                    <p>{newList.getIn([id-1,'description'])}</p>
                </Content>
                <TodoList handleDeleteTask={this.handleDeleteTask.bind(this)} handleMoveTask={this.handleMoveTask.bind(this)} todoList={newTodoList} message="Todo List"/>
                <TodoList handleDeleteTask={this.handleDeleteTask.bind(this)} handleMoveTask={this.handleMoveTask.bind(this)} todoList={newDoneList} message="Done List"/>
            </DetailWrapper>
        )
    }

    // Combine firebase with local state
    componentWillMount() {
        this.todoListRef = base.syncState('/haha/hoho',{
            context: this,
            state: 'todoList'
        })
    }

    componentDidMount() {
        if (this.props.initial) {
            this.props.getData();
            this.props.getInitialTodoList();
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.todoListRef);
    }

    handleDeleteTask(whichList, whichTask){
        this.props.deleteTask(this.props.match.params.id, whichList, whichTask);
    }

    handleMoveTask(whichList, whichTask, Task){
        this.props.moveTask(this.props.match.params.id, whichList, whichTask, Task);
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
       },
       deleteTask(whichUser, whichList, whichTask){
            dispatch(actionCreators.deleteTask(whichUser-1, whichList, whichTask));
       },
       moveTask(whichUser, whichList, whichTask, Task){
            dispatch(actionCreators.moveTask(whichUser-1, whichList, whichTask, Task));
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);