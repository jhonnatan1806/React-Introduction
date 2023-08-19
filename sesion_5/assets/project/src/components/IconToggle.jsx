import { FaHeart, FaRegHeart } from 'react-icons/fa'

export default function IconToggle({isLike, handlerToggle}) {
	
	return (
		<>
			<button onClick={handlerToggle}>
				{!isLike ? (
					<FaRegHeart className="text-white w-6 h-6" />
				) : (
					<FaHeart className="text-red-500 w-6 h-6" />
				)}
			</button>
		</>
	)
}
