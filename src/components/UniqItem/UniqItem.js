import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './UniqItem.css'

function UniqItem() {
    const {id} = useParams()
    const users = useSelector(state => state.users)
    
  return (
    <>
    <header>
        <div className="container">
            <div className="profile">
                <div className="profile-image">
                    <img src={users.find(el => el.id === id).avatar} alt=""/>
                </div>
                <div className="profile-user-settings">
                    <h1 className="profile-user-name">{users.find(el => el.id === id).name}</h1>
                </div>
                <div className="profile-stats">
                    <ul>
                        <li><span className="profile-stat-count">{users.find(el => el.id === id).postsCount}</span> posts</li>
                        <li><span className="profile-stat-count">{users.find(el => el.id === id).followers}</span> followers</li>
                        <li><span className="profile-stat-count">{users.find(el => el.id === id).following}</span> following</li>
                    </ul>
                </div>
                <div className="profile-bio">
                    <p>{users.find(el => el.id === id).bio}</p>
                    <button className='followBtn'>follow</button>
                </div>
            </div>
        </div>
    </header>

    <div className="container">
        <div className="gallery">
    {
        users.find(el => el.id === id).images.map(el => (
            <div key={el.postId} className="gallery-item">
				<img src={el.img} className="gallery-image" alt=""/>
				<div className="gallery-item-info">
					<ul>
						<li className="gallery-item-likes"><span >Likes</span> {el.likes}</li>
						<li className="gallery-item-comments"><span >Comments</span> {el.commentsCount}</li>
					</ul>
				</div>
			</div>
        ))
    }
    </div>
    </div>

    </>
  )
}

export default UniqItem