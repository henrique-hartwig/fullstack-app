import { createSlice } from '@reduxjs/toolkit'

interface IUser {
    id: number | null,
    name: string,
    email: string
}

type InitialStateProps = {
    user: IUser,
    outro: number
}

const initialState: InitialStateProps = {
    user: {
        id: null,
        name: '',
        email: ''
    },
    outro: 123
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            console.log('state:', state)
            console.log('action:', action)
            return { ...state }
        }

    }
})

export default userSlice.reducer;

