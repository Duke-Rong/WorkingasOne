import React, { PureComponent } from 'react';
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux';
import { Card, Icon, List } from 'antd';

class todoList extends PureComponent {
    
    render() {
        const newUserList = this.props.userList.toJS();
        const TodoList = newUserList['todoList'];
        return ( 
            <Card title="Todo List" extra={<Icon type="plus" />} style={{ margin: '80px 0 0 10%', width: '80%' }}>
            <List
            itemLayout="horizontal"
            dataSource={newUserList}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={item}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            </List.Item>
            )}
            />
            </Card>
        )
    }

    componentDidMount() {
        if (this.props.initial) {
            this.props.getInitialTodoList();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        initial: state.get('detail').get('initial'),
        userList: state.get('detail').get('userList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       getInitialTodoList() {
           dispatch(actionCreators.getTodoList());
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(todoList);