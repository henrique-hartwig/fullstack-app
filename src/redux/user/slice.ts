import { createSlice } from '@reduxjs/toolkit'

interface IUser {
    id: number | null,
    name: string,
    email: string
}

const initialState: { user : IUser } = {
    user: {
        id: null,
        name: '',
        email: ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            console.log('state:', state)
            console.log('action:', action)

            return {
                ...state,
                name: action.payload.name
         }
        }

    }
})

export const { createUser } = userSlice.actions;
export default userSlice.reducer;

