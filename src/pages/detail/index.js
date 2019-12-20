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
            userList: {}
        }
    }
    
    render() {
        const newList = this.props.list;
        const id = this.props.match.params.id;
        const theUserList = this.state.userList
        if (theUserList!=={}) {
            const todoList = theUserList.todoList;
            const doneList = theUserList.doneList;
            return ( 
                <DetailWrapper>
                    <Header>{newList.getIn([id-1,'title'])}</Header>
                    <Content>
                        <div className='pic-div'>
                            <img src={newList.getIn([id-1,'pic'])} alt=''/>
                        </div>
                        <p>{newList.getIn([id-1,'description'])}</p>
                    </Content>
                    <TodoList handleDeleteTask={this.handleDeleteTask.bind(this)} handleMoveTask={this.handleMoveTask.bind(this)} handleModifyTask={this.handleModifyTask.bind(this)} todoList={todoList} message="Todo List"/>
                    <TodoList handleDeleteTask={this.handleDeleteTask.bind(this)} handleMoveTask={this.handleMoveTask.bind(this)} handleModifyTask={this.handleModifyTask.bind(this)} todoList={doneList} message="Done List"/>
                </DetailWrapper>
            )
        } else {
            return (
                <DetailWrapper></DetailWrapper>
            );
        }
    }

    // Combine firebase with local state
    componentWillMount() {
        const location = '/userList/'.concat(this.props.match.params.id-1);
        this.todoListRef = base.syncState(location,{
            context: this,
            state: 'userList'
        })
    }

    componentDidMount() {
        if (this.props.initial) {
            this.props.getData();
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.todoListRef);
    }

    handleDeleteTask(whichList, whichTask){
        var updatedUserList = this.state.userList;
        if (whichList === "Todo List") {
            updatedUserList.todoList.splice(whichTask,1);
        } else {
            updatedUserList.doneList.splice(whichTask,1);
        }
        this.setState({
            userList: updatedUserList
        })
    }

    handleMoveTask(whichList, whichTask, Task){
        var updatedUserList = this.state.userList;
        if (whichList === "Todo List") {
            updatedUserList.todoList.splice(whichTask,1);
            updatedUserList.doneList.push(Task);
        } else {
            updatedUserList.doneList.splice(whichTask,1);
            updatedUserList.todoList.push(Task);
        }
        this.setState({
            userList: updatedUserList
        })
    }

    handleModifyTask(whichList, whichTask, Task){
        var updatedUserList = this.state.userList;
        if (whichTask === -1) { // new task
            updatedUserList.todoList.push(Task)
        } else { // modify
            if (whichList === "Todo List") {
                updatedUserList.todoList[whichTask] = Task
            } else {
                updatedUserList.doneList[whichTask] = Task
            }
        }
        this.setState({
            userList: updatedUserList
        })
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('detail').get('list'),
        initial: state.get('detail').get('initial'),
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