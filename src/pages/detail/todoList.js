import React, { PureComponent } from 'react';
import * as actionCreators from './store/actionCreators'
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
                    <p onClick={this.consoleLogID.bind(this,item)}>haha</p>
                </List.Item>
            )}
            />
            </Card>
        )
    }

    consoleLogID(item){
        this.props.handleDeleteTask(this.props.message,this.props.todoList.toArray().indexOf(item))
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