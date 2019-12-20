// ---------------------------- private -----------------------

// const getInitialTodolist = (res) => ({
//     type: actionTypes.GET_INITIAL_TODOLIST,
//     userList: res.data.data.userList
// })

// const deleteTaskAction = (whichUser, whichList, whichTask) => ({
//     type: actionTypes.DELETE_TASK,
//     whichUser: whichUser,
//     whichList: whichList,
//     whichTask: whichTask
// })

// const moveTaskAction = (whichUser, whichList, whichTask, Task) => ({
//     type: actionTypes.MOVE_TASK,
//     whichUser: whichUser,
//     whichList: whichList,
//     whichTask: whichTask,
//     Task: Task
// })

// ---------------------------- public ------------------------

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/api/todoListData.json').then((res) => {
//             dispatch(getInitialTodolist(res))
//         }).catch(() => {
//             console.log('error')
//         })
//     }
// }

// export const deleteTask = (whichUser, whichList, whichTask) => {
//     return (dispatch) => {
//         if(whichList === 'Todo List') {
//             whichList = 'todoList'
//         } else {
//             whichList = 'doneList'
//         }
//         dispatch(deleteTaskAction(whichUser, whichList, whichTask))
//     }
// }

// export const moveTask = (whichUser, whichList, whichTask, Task) => {
//     return (dispatch) => {
//         if(whichList === 'Todo List') {
//             whichList = 'todoList'
//         } else {
//             whichList = 'doneList'
//         }
//         dispatch(moveTaskAction(whichUser, whichList, whichTask, Task))
//     }
// }

