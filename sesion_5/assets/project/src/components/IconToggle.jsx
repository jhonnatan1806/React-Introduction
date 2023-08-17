import { useState } from 'react'

import { FaHeart, FaRegHeart } from 'react-icons/fa'

export default function IconToggle() {
	const [isLike, setIsLike] = useState(false)

	const handlerToggle = () => {
		setIsLike((prev) => !prev)
	}

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
