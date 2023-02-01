import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withLessMore } from '../../hoc/withLessMore'
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/postsSlice'
import { selectUser } from '../../store/slices/users/usersSlice'

function Post({id, img, name, likesCount, postText, timeAgo, comments, isShow, setIsShow}) {
    const dispatch = useDispatch()
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectUser)
    const handleSubmit = (e) => {
        e.preventDefault()

        const body = formRef.current[0].value
        // console.log(body);
        dispatch(addComment({
            id, body, 
            username: currentUser.username
        }))

        formRef.current.reset()

    }
    return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                  <div className="profile-pic"><img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InFaw-s3BdZv-JHoG46zMupANy1MRureTmK5Ti6XIw&s`} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {postText && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>

            
            {
                !!comments.length && (isShow ?
                comments.map(comment => (
                    <p className="description" key={comment.id}><span>{comment.username} </span> {comment.body}</p>
                ))
                : <h2 onClick={() => setIsShow(true)}>Show All Comments</h2>)
            }
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input type="text" onFocus={() => setIsShow(true)} className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
            </div>
        </form>
    </div>
  )
}

export default withLessMore(Post)