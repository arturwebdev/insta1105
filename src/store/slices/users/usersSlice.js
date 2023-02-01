import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        currentUser: null
    },
    reducers: {
        toggleCurrentUser(state, {payload}){
            const user = state.data.find(user => (user.email === payload.login || user.username === payload.login ) && user.password === payload.password)
        
            state.currentUser = user ? user : null
        },
        logOut(state){
            state.currentUser = null
        },
        addMessage(state, {payload}){
            const answers = {
                'barev': 'Barev',
                'vonc es?': 'Lav du vonc es?',
                '❤': '❤'
            }
            const idx = state.data.findIndex(user => user.id === state.currentUser.id)
            // console.log(idx);
            const messages = [
                {
                    id: new Date().getTime() + 'U',
                    txt: payload
                },
                {
                    id: new Date().getTime() + 'B',
                    txt: answers[payload] || 'es qez chem haskanum'
                }
            ]

            state.data[idx].messages.push(...messages)
            state.currentUser.messages.push(...messages)
        },
        addPost(state, { payload: { id, img, name, postText}}){
            const idx = state.data.findIndex(user => user.id === state.currentUser.id)
            const newPost = {
                id,name,postText,img,
                likesCount: Math.round(Math.random() * 300 + 300),
                timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
                comments: []
            }
            state.currentUser.posts.unshift(newPost)
            state.data[idx].posts.unshift(newPost)
        },
        delPost(state, {payload}){
            const idx = state.data.findIndex(user => user.id === state.currentUser.id)
            state.data[idx].posts = [
                ...state.data[idx].posts.filter(post => post.id !== payload)
            ]
            state.currentUser.posts = [
                ...state.data[idx].posts.filter(post => post.id !== payload)
            ]
        }
    },

    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                data: [...payload]
            }
        }
    }
})

export const selectUser = state => state.users

export const { toggleCurrentUser, logOut, addMessage, addPost, delPost } = usersSlice.actions

export const usersReducer = usersSlice.reducer