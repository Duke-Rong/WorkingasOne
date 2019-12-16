import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, List } from 'antd';

class todoList extends PureComponent {
    
    render() {
        const todoList = this.props.todoList;
        return ( 
            <Card title={this.props.message} extra={<Icon type="plus" />} style={{ margin: '80px 0 0 10%', width: '80%' }}>
            <List
            itemLayout="horizontal"
            dataSource={todoList}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={item.toJS().briefDescription}
                    description={item.toJS().duedate}
                    />
                    <Icon type={ this.props.message === "Todo List" ? "check" : "to-top"} onClick={this.handleMoveTask.bind(this,item)} style={{ marginRight: '20px' }}/>
                    <Icon type="delete" style={{ marginRight: '20px' }} onClick={this.handleDelete.bind(this,item)}/>
                </List.Item>
            )}
            />
            </Card>
        )
    }

    handleDelete(item){
        this.props.handleDeleteTask(this.props.message,this.props.todoList.toArray().indexOf(item))
    }

    handleMoveTask(item){
        this.props.handleMoveTask(this.props.message,this.props.todoList.toArray().indexOf(item),item)
    }
}

const mapStateToProps = (state) => {
    return {
        // initial: state.get('detail').get('initial'),
        // userList: state.get('detail').get('userList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    //    getInitialTodoList() {
    //        dispatch(actionCreators.getTodoList());
    //    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(todoList);