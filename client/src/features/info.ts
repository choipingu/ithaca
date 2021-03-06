import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface infoState {
    userid: string
    login: boolean
    oauth: boolean
    admin: boolean
    nickname: string
}

const initialState = {
    userid: '',
    login: false,
    oauth: false,
    admin: false,
    nickname: ''
} as infoState

export const info = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setParent: (state, action: PayloadAction<any>) => {
            state.userid = action.payload
        },
        setLogin: (state, action: PayloadAction<any>) => {
            state.login = action.payload
        },
        setOauth: (state, action: PayloadAction<any>) => {
            state.oauth = action.payload
        },
        setNickname: (state, action: PayloadAction<any>) => {
            state.nickname = action.payload
        },
        setAdmin: (state, action: PayloadAction<any>) => {
            state.admin = action.payload
        }
    },
})

export const { setParent, setLogin, setOauth, setNickname, setAdmin } = info.actions

export default info.reducer