import './Notifications.css'
import IMAGES from '../../images'
import { useSelector } from 'react-redux'
import NotificationItem from '../NotificationItem/NotificationItem'
function Notifications() {
	const users = useSelector(state => state.users)
  return (
	 <div className='Notification'>
		<div className='Notification-body'>
			<h1>Notification</h1>
			<div className='Notic-this'>
				<h2>This Week</h2>
				{
					users.map(el => <NotificationItem key={el.id} img={IMAGES.cover1} name={el.name}/>)
				}
			</div>
			<div className='Notic-this'>
				<h2>This Month</h2>
				{
					users.map(el => <NotificationItem key={el.id} img={IMAGES.cover1} name={el.name}/>)
				}
			</div>
			<div className='Notic-this'>
				<h2>Earlier</h2>
				{
					users.map(el => <NotificationItem key={el.id} img={IMAGES.cover1} name={el.name}/>)
				}
			</div>
		</div>
	 </div>
  )
}

export default Notifications
