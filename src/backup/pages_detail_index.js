// import React, { Component } from 'react';
// import { DetailWrapper, Header, Content } from './style';
// import * as actionCreators from './store/actionCreators'
// import { connect } from 'react-redux';
// import TodoList from './todoList';
// import { base } from '../../service/firebase.conf'

// class Detail extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             userList: {}
//         }
//     }
    
//     render() {
//         const newList = this.props.list;
//         const id = this.props.match.params.id;
// 
//           // const uL = this.props.userList.toJS();
//            // this.setState({
//           //     userList: uL
//            // })
//  
//         const newTodoList = this.props.userList.getIn([id-1,'todoList']);
//         const newDoneList = this.props.userList.getIn([id-1,'doneList']);
        
//         const todoL = this.state.userList.todoList;
//         if (todoL) {
//             console.log(todoL)
//         }

//         return ( 
//             <DetailWrapper>
//                 <Header>{newList.getIn([id-1,'title'])}</Header>
//                 <Content>
//                     <div className='pic-div'>
//                         <img src={newList.getIn([id-1,'pic'])} alt=''/>
//                     </div>
//                     <p>{newList.getIn([id-1,'description'])}</p>
//                 </Content>
//                 <TodoList handleDeleteTask={this.handleDeleteTask.bind(this)} handleMoveTask={this.handleMoveTask.bind(this)} todoList={newTodoList} message="Todo List"/>
//                 <TodoList handleDeleteTask={this.handleDeleteTask.bind(this)} handleMoveTask={this.handleMoveTask.bind(this)} todoList={newDoneList} message="Done List"/>
//             </DetailWrapper>
//         )
//     }

//     // Combine firebase with local state
//     componentWillMount() {
//         const location = '/userList/'.concat(this.props.match.params.id-1);
//         this.todoListRef = base.syncState(location,{
//             context: this,
//             state: 'userList'
//         })
//     }

//     componentDidMount() {
//         if (this.props.initial) {
//             this.props.getData();
//             this.props.getInitialTodoList();
//         }
//     }

//     componentWillUnmount() {
//         base.removeBinding(this.todoListRef);
//     }

//     handleDeleteTask(whichList, whichTask){
//         this.props.deleteTask(this.props.match.params.id, whichList, whichTask);
//     }

//     handleMoveTask(whichList, whichTask, Task){
//         this.props.moveTask(this.props.match.params.id, whichList, whichTask, Task);
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         list: state.get('detail').get('list'),
//         initial: state.get('detail').get('initial'),
//         userList: state.get('detail').get('userList')
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//        getData() {
//            dispatch(actionCreators.getDetail());
//        },
//        getInitialTodoList() {
//            dispatch(actionCreators.getTodoList());
//        },
//        deleteTask(whichUser, whichList, whichTask){
//             dispatch(actionCreators.deleteTask(whichUser-1, whichList, whichTask));
//        },
//        moveTask(whichUser, whichList, whichTask, Task){
//             dispatch(actionCreators.moveTask(whichUser-1, whichList, whichTask, Task));
//        }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Detail);