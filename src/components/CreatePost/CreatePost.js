import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addPost as addPostPosts } from '../../store/slices/posts/postsSlice';
import { addPost as addPostUser, selectUser } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formRef = useRef(null)
    const { currentUser } = useSelector(selectUser)

    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const {img: {value: img}, desc: {value: desc}} = formRef.current
        const payload = { 
            id: new Date().getTime() + 'U', 
            name: currentUser.username, 
            postText: desc, 
            img, 
        }
        dispatch(addPostUser(payload))
        dispatch(addPostPosts(payload))

        navigate('/')

        formRef.current.reset()
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form style={{marginTop: '50px'}} ref={formRef} onSubmit={handleSubmit} >
                <input type="text" name='img' placeholder='img' /> <br/><br/>
                <input type="text" name='desc' placeholder='desc' /> <br/><br/>
                <label class="input-file">
                    <input type="submit" style={{display: 'none'}} name="file"/>		
                    <span>Выберите файл</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;
