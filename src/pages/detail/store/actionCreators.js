import * as actionTypes from './actionTypes'
import axios from 'axios'

// ---------------------------- private -----------------------

const getDetailAction = (res) => ({
    type: actionTypes.GET_DETAIL,
    list: res.data.data.List
})

const getInitialTodolist = (res) => ({
    type: actionTypes.GET_INITIAL_TODOLIST,
    userList: res.data.data.userList
})

const deleteTaskAction = (whichUser, whichList, whichTask) => ({
    type: actionTypes.DELETE_TASK,
    whichUser: whichUser,
    whichList: whichList,
    whichTask: whichTask
})

// ---------------------------- public ------------------------
export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detailData.json').then((res) => {
            dispatch(getDetailAction(res))
        }).catch(() => {
            console.log('error')
        })
    }
}

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todoListData.json').then((res) => {
            dispatch(getInitialTodolist(res))
        }).catch(() => {
            console.log('error')
        })
    }
}

export const deleteTask = (whichUser, whichList, whichTask) => {
    return (dispatch) => {
        if(whichList === 'Todo List') {
            whichList = 'todoList'
        } else {
            whichList = 'doneList'
        }
        dispatch(deleteTaskAction(whichUser, whichList, whichTask))
    }
}

