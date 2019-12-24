import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Icon, Collapse } from 'antd';
import { LocalModal } from './components/Modal'
import { AddTaskPanel } from './components/AddTaskPanel'

const { Panel } = Collapse;

class todoList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            deleteConfirm: false,
            moveConfirm: false,
            detailConfirm: false,
            item: undefined,
            id: undefined,
            whichListToAddNewTask: undefined,
            newItem: {
                duedate: 'No Date Selected',
                title: '',
                briefDescription: ''
            },
            originalTask: {}
        };
        this.titleOnChange = this.titleOnChange.bind(this);
        this.briefDescriptionOnChange = this.briefDescriptionOnChange.bind(this);
        this.dueDateOnChange = this.dueDateOnChange.bind(this);
    }
    
    render() {
        const todoList = this.props.todoList ? this.props.todoList : [];
        const item = this.state.item ? this.state.item : this.state.newItem;

        const customPanelStyle = {
            borderRadius: 4,
            marginBottom: 10,
            paddingBottom: 10,
            overflow: 'hidden'
        };

        const genExtra = (item) => (
            <div>
            <Button shape="circle" icon="edit" style={{ marginRight: '20px' }} onClick={this.showDetailModal.bind(this,item)} />
            <Button shape="circle" icon={ this.props.message === "Todo List" ? "check" : "redo"} onClick={this.showMoveModal.bind(this,item)} style={{ marginRight: '20px' }} />
            <Button shape="circle" icon="delete" style={{ marginRight: '20px' }} onClick={this.showDeleteModal.bind(this,item)}/>
            </div>
        );

        return ( 
            <div>
                <Card title={this.props.message} extra={<Icon type="plus" onClick={this.handleAddTask.bind(this)}/>} style={{ margin: '80px 0 0 10%', width: '80%' }}>
                    <Collapse
                        bordered={false}
                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                    >
                    {todoList.map((item, index) => {
                        return (<Panel header={item.title} key={index} style={customPanelStyle} extra={genExtra(item)}>
                        <br />
                        <p style ={{ textIndent: '2em' }}>{item.briefDescription}</p>
                        <p style ={{ textIndent: '2em', color: 'OrangeRed' }}>Due Date: {item.duedate}</p>
                        </Panel>)
                    })}
                    </Collapse>
                </Card>

                {/* Delete Task Modal */}
                {LocalModal({},"Warning!", this.state.deleteConfirm, this.handleDeleteOk.bind(this), this.handleDeleteCancel.bind(this), "Yes", "No", { type:"danger" }, { type:"primary" }, "Are you sure you want to delete this task?")}

                {/* Move Task Modal */}
                {LocalModal({},this.props.message === "Todo List" ? "Finish The Task" : "Redo The Task", this.state.moveConfirm, this.handleMoveOk.bind(this), this.handleMoveCancel.bind(this), "Yes", "No", {}, {}, "Do you want to move this task to ".concat(this.props.message === "Todo List" ? "Done List?" : "Todo List?"))}

                {/* New Task Modal */}
                {LocalModal({ width: '100%' }, 'Description', this.state.detailConfirm, this.handleDetailOk.bind(this), this.handleDetailCancel.bind(this), "Submit", "Discard", {}, {}, AddTaskPanel(item, this.titleOnChange, this.briefDescriptionOnChange, this.dueDateOnChange))}
            </div>
        )
    }

    // Delete Task

    handleDelete(){
        this.props.handleDeleteTask(this.props.message,this.state.id)
    }

    showDeleteModal(item,e) {
        e.stopPropagation();
        this.setState({
            deleteConfirm: true,
            item: item,
            id: this.props.todoList.indexOf(item)
        });
    };
    
    handleDeleteOk() {
        this.setState({
            deleteConfirm: false,
        });
        this.handleDelete();
    };

    handleDeleteCancel() {
        this.setState({
            deleteConfirm: false,
        });
    };

    // Move Task

    handleMoveTask(){
        this.props.handleMoveTask(this.props.message,this.state.id,this.state.item)
    }

    showMoveModal(item,e) {
        e.stopPropagation();
        this.setState({
            moveConfirm: true,
            item: item,
            id: this.props.todoList.indexOf(item)
        });
    };
    
    handleMoveOk() {
        this.setState({
            moveConfirm: false,
        });
        this.handleMoveTask();
    };

    handleMoveCancel() {
        this.setState({
            moveConfirm: false,
        });
    };

    // Edit Task

    dueDateOnChange(date, dateString) {
        var copyItem = JSON.parse(JSON.stringify(this.state.item));
        copyItem.duedate = dateString;
        this.setState({
            item: copyItem
        });
    }

    briefDescriptionOnChange({ target: { value } }){
        var copyItem = JSON.parse(JSON.stringify(this.state.item));
        copyItem.briefDescription = value;
        this.setState({
            item: copyItem
        });
    }

    titleOnChange({ target: { value } }){
        var copyItem = JSON.parse(JSON.stringify(this.state.item));
        copyItem.title = value;
        this.setState({
            item: copyItem
        });
    }

    // New Task

    // When user need to add a new task,
    // Deep copy 'newItem' to current item 
    handleAddTask(){
        const newItem = JSON.parse(JSON.stringify(this.state.newItem));
        this.setState({
            detailConfirm: true,
            item: newItem,
            id: -1,
            whichListToAddNewTask: this.props.message
        })
    }


    // Edit & show detail task

    handleDetailTask(){
        this.props.handleModifyTask(this.props.message,this.state.id,this.state.item,this.state.whichListToAddNewTask)
    }

    // When the detail modal is shown, 
    // copy the current item to 'originalTask' as well
    // so if the user click 'discard' the change could be discarded
    // simply by copy 'originalTask' to 'item'
    // Don't forget to use deep copy
    showDetailModal(item,e) {
        e.stopPropagation();
        const originalTask = JSON.parse(JSON.stringify(item));
        this.setState({
            detailConfirm: true,
            item: item,
            originalTask: originalTask,
            id: this.props.todoList.indexOf(item)
        });
    };
    
    handleDetailOk() {
        this.setState({
            detailConfirm: false
        });
        this.handleDetailTask();
    };

    // When user clicks 'discard', 
    // copy 'originalTask' to 'item' to discard the change
    // Don't forget to use deep copy
    handleDetailCancel() {
        const originalTask = JSON.parse(JSON.stringify(this.state.originalTask))
        this.setState({
            detailConfirm: false,
            item: originalTask
        });
    };
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(todoList);