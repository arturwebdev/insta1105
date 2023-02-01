import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const { data: usersData } = await axios.get('https://jsonplaceholder.typicode.com/users')
        const { data: postsData } = await axios.get('https://jsonplaceholder.typicode.com/photos?limit=500')

        const data = usersData.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            bio: user.company.catchPhrase,
            followers: Math.round(Math.random() * 300 + 200),
            following: Math.round(Math.random() * 200 + 300),
            messages: [],
            posts: [
                ...postsData.filter(post => post.albumId === user.id)
                                .map(post => ({
                                    id: post.id + 'U',
                                    name: user.username.toLowerCase(),
                                    postText: post.title.slice(post.title.indexOf(' ') + 1),
                                    likesCount: Math.round(Math.random() * 300 + 300),
                                    timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
                                    img: post.url,
                                    comments: []
                                }))
            ]
        }))
        return data
    }
)