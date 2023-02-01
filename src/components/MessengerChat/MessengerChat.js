import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/slices/users/usersSlice'

import './MessengerChat.css'

function MessengerChat() {
  const { currentUser } = useSelector(selectUser)
  const messRef = useRef(null)
  useEffect(() => {
    messRef.current.scrollTop = messRef.current.scrollHeight - messRef.current.clientHeight;
  }, [currentUser?.messages])
  return (
	 <div ref={messRef} className='MessengerChat'>
    {
      currentUser?.messages.map(message => (
        <h2 key={message.id}>{message.txt}</h2>
      ))
    }
	 </div>
  )
}

export default MessengerChat
