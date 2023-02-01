import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../store/slices/users/usersSlice'

function MessengerChatForm() {
	const formRef = useRef(null)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const {message: {value: message}} = formRef.current

		if (message) {
			dispatch(addMessage(message))
		}else{
			dispatch(addMessage('❤'))
		}

		formRef.current.reset()
	}
  return (
	<form ref={formRef} onSubmit={handleSubmit} >
		<div className='Chat-input'>
			  <input name='message' type='text' placeholder='Message...'/>
			<label>
				<input type="submit" style={{display: 'none'}} />
				<img src={IMAGES.like} alt=''/>
			</label>
		</div>
	</form>
  )
}

export default MessengerChatForm
