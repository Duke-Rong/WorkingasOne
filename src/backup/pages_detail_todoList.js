// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button, Card, Icon, List, Modal } from 'antd';

// class todoList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             deleteConfirm: false,
//             moveConfirm: false,
//             item: undefined
//         };
//     }
    
//     render() {
//         const todoList = this.props.todoList;
//         return ( 
//             <div>
//                 <Card title={this.props.message} extra={<Icon type="plus"/>} style={{ margin: '80px 0 0 10%', width: '80%' }}>
//                 <List
//                 itemLayout="horizontal"
//                 dataSource={todoList}
//                 renderItem={item => (
//                     <List.Item>
//                         <List.Item.Meta
//                         title={item.toJS().briefDescription}
//                         description={item.toJS().duedate}
//                         />
//                         <Button shape="circle" icon="edit" style={{ marginRight: '20px' }}/>
//                         <Button shape="circle" icon={ this.props.message === "Todo List" ? "check" : "redo"} onClick={this.showMoveModal.bind(this,item)} style={{ marginRight: '20px' }} />
//                         <Button shape="circle" icon="delete" style={{ marginRight: '20px' }} onClick={this.showDeleteModal.bind(this,item)}/>
//                     </List.Item>
//                 )}
//                 />
//                 </Card>

//                 <Modal
//                     title="Warning!"
//                     visible={this.state.deleteConfirm}
//                     onOk={this.handleDeleteOk.bind(this)}
//                     onCancel={this.handleDeleteCancel.bind(this)}
//                     okText="Yes"
//                     cancelText="No"
//                     okButtonProps={{ type:"danger" }}
//                     cancelButtonProps={{ type:"primary" }}
//                     >
//                     Are you sure you want to delete this task?
//                 </Modal>

//                 <Modal
//                     title={this.props.message === "Todo List" ? "Finish The Task" : "Redo The Task"} 
//                     visible={this.state.moveConfirm}
//                     onOk={this.handleMoveOk.bind(this)}
//                     onCancel={this.handleMoveCancel.bind(this)}
//                     okText="Yes"
//                     cancelText="No"
//                     >
//                     Do you want to move this task to {this.props.message === "Todo List?" ? "Done List" : "Todo List?"}
//                 </Modal>

//             </div>
//         )
//     }

//     // Delete Task

//     handleDelete(){
//         this.props.handleDeleteTask(this.props.message,this.props.todoList.toArray().indexOf(this.state.item))
//     }

//     showDeleteModal(item) {
//         this.setState({
//             deleteConfirm: true,
//             item: item
//         });
//     };
    
//     handleDeleteOk() {
//         this.setState({
//             deleteConfirm: false,
//         });
//         this.handleDelete()
//     };

//     handleDeleteCancel() {
//         this.setState({
//             deleteConfirm: false,
//         });
//     };

//     // Move Task

//     handleMoveTask(){
//         this.props.handleMoveTask(this.props.message,this.props.todoList.toArray().indexOf(this.state.item),this.state.item)
//     }

//     showMoveModal(item) {
//         this.setState({
//             moveConfirm: true,
//             item: item
//         });
//     };
    
//     handleMoveOk() {
//         this.setState({
//             moveConfirm: false,
//         });
//         this.handleMoveTask()
//     };

//     handleMoveCancel() {
//         this.setState({
//             moveConfirm: false,
//         });
//     };
// }

// const mapStateToProps = (state) => {
//     return {
//         // initial: state.get('detail').get('initial'),
//         // userList: state.get('detail').get('userList')
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//     //    getInitialTodoList() {
//     //        dispatch(actionCreators.getTodoList());
//     //    }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(todoList);