import { createSlice } from '@reduxjs/toolkit'


interface ITask {
    id: number | null,
    title: string,
    dueDate: string,
    status: string
}

const initialState: {task: ITask} = {
    task: {
        id: null,
        title: '',
        dueDate: '',
        status: ''
    }
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        createTask: (state, action) => {
            console.log('state:', state)
            console.log('action:', action)
            return { ...state }
        },
        selectedTask: (state) => { 
            return { ...state }
        }
    }
})

export const { createTask, selectedTask } = taskSlice.actions
export default taskSlice.reducer;

