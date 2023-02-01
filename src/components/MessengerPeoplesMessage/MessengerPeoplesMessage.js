import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({name,active,img}) {
  return (
	 <div className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
			<p>{active}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
