import { FaHeart, FaRegHeart } from 'react-icons/fa'

function IconToggle({ className, state, onClick }) {


	return (
		<div>
			<button onClick={onClick}>
				{state ? (
					<FaHeart
						className={['text-red-500', className].join(' ')}
					/>
				) : (
					<FaRegHeart
						className={['text-white', className].join(' ')}
					/>
				)}
			</button>
		</div>
	)
}

export default IconToggle
