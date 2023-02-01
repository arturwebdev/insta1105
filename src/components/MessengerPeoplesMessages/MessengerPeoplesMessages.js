import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'

function MessengerPeoplesMessages() {
	const message = [
		{
			 id: '1',
			img: `https://cdn-icons-png.flaticon.com/512/4712/4712139.png`,
			 name: 'Bot',
			 active: 'Active 30m ago'
		}
	]
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
