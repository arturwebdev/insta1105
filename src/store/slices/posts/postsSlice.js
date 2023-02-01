import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";


const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addComment(state, {payload}){
            const idx = state.findIndex(post => post.id === payload.id)

            state[idx].comments.push({
                id: new Date().getTime().toString(),
                body: payload.body,
                username: payload.username
            })
        },
        addPost(state, { payload: { id, img, name, postText } }) {
            const newPost = {
                id, name, postText, img,
                likesCount: Math.round(Math.random() * 300 + 300),
                timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
                comments: []
            }
            state.unshift(newPost)
        },
        delPost(state, {payload}){
            return [
                ...state.filter(post => post.id !== payload)
            ]
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return [...payload]
        }
    }
})

export const selectPosts = state => state.posts

export const { addComment, addPost, delPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer