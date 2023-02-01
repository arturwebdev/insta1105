import { useSelector } from 'react-redux'
import ExploreItem from '../ExploreItem/ExploreItem'
import './Explore.css'

function Explore() {
	const image = useSelector(state => state.users)
	console.log(image)
  return (
	 <div className='container Explore'>
		<div className='gallery'>
			{
				image.map(el => <ExploreItem key={el.id} img={el.avatar} likes={el.likes} commentsCount={el.commentsCount} />)
			}
		</div>
	 </div>
  )
}

export default Explore
