import './ExploreItem.css'

function ExploreItem({img,likes,commentsCount}) {
  return (
	 <div className='gallery-item'>
		<img style={{width: '297px', height:'292px'}} src={img} alt=''/>
		<div className="gallery-item-info">
					<ul>
						<li className="gallery-item-likes"><span >Likes</span> {likes}</li>
						<li className="gallery-item-comments"><span >Comments</span> {commentsCount}</li>
					</ul>
		</div>
	 </div>
  )
}

export default ExploreItem
