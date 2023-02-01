import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function() {
        const { data: postsData } = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const { data: commentsData } = await axios.get('https://jsonplaceholder.typicode.com/comments')
    //     {
    //         id: '1',
    //         img: IMAGES.cover1,
    //         name: 'user1',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'

    //     },
        const data = postsData.map(post => ({
            id: post.id.toString(),
            name: post.title.slice(0, post.title.indexOf(' ')),
            postText: post.title.slice(post.title.indexOf(' ') + 1),
            likesCount: Math.round(Math.random() * 300 + 300),
            timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
            img: post.url,
            comments: [
                ...commentsData.filter(comment => comment.postId === post.id)
                                .map(comment => ({
                                    id: comment.id.toString(),
                                    username: comment.name.slice(0, comment.name.indexOf(' ')),
                                    body: comment.body
                                }))
            ]
        }))

        // console.log(data);
        return data
    }
)