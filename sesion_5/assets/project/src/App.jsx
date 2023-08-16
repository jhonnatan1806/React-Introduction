import { useState, useEffect } from 'react'
import { FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa'
import User from './User'
import Comment from './Comment'

import * as accountService from './services/fetchAccount'
import * as profileService from './services/fetchProfile'
import IconToggle from './IconToogle'

function App() {
	const [currentUser, setCurrentUser] = useState({})
	const [posts, setPosts] = useState([])
	const [postOwnerUser, setPostOwnerUser] = useState({})
	const [isLiked, setIsLiked] = useState(false)
	const [counterLikes, setCounterLikes] = useState(0)

	useEffect(() => {
		const fecthCurrentUser = async () => {
			const res = await accountService.getUser('_valentina_medini')
			setCurrentUser(res)
		}

		const fecthPost = async () => {
			const res = await profileService.getPosts('desgin')
			setPosts(res)
			setCounterLikes(res[0]?.metadata?.likes || 0)
		}

		const fecthPostOwnerUser = async () => {
			const res = await profileService.getUser('desgin')
			setPostOwnerUser(res)
		}

		fecthCurrentUser()
		fecthPost()
		fecthPostOwnerUser()
	}, [])

    const handleToggle = () => {
		setIsLiked(!isLiked)
		setCounterLikes((prev) => (!isLiked ? prev + 1 : prev - 1))
	}

	return (
		<main className="flex flex-col items-center justify-center h-screen w-screen bg-black">
			<div className="flex flex-row w-fit border border-white/25">
				<picture>
					<img
						src={posts[0]?.image?.url}
						alt={posts[0]?.image?.alt}
						className="max-w-[480px] max-h-[600px]"
					/>
				</picture>
				<div className="w-[335px] h-[600px]">
					<div
						id="user"
						className="flex flex-row items-center gap-2 w-full h-[60px] p-2 border border-white/25">
						{postOwnerUser ? (
							<>
								<User user={postOwnerUser} />
								<p className="text-sm font-medium text-white">
									•
								</p>
								<p className="text-sm font-medium text-sky-500 cursor-pointer">
									Follow
								</p>
							</>
						) : null}
					</div>
					<div
						id="comments"
						className="flex flex-col gap-2 h-[365px] overflow-y-scroll">
						{posts[0]?.comments.map((comment) => (
							<div key={comment.id}>
								<Comment comment={comment} />
							</div>
						))}
					</div>
					<div className="h-[175px] p-4 border border-white/25">
						<div id="buttons" className="flex flex-col h-[100px]">
							<div className="flex flex-row w-full gap-4">
								<IconToggle
									className="w-6 h-6"
									state={isLiked}
									onClick={handleToggle}
								/>
								<FaRegComment className="w-6 h-6 text-white" />
								<FaRegPaperPlane className="w-6 h-6 text-white" />
								<div className="flex flex-row justify-end grow">
									<FaRegBookmark className="w-6 h-6 text-white" />
								</div>
							</div>
							<div className="text-white">
								{counterLikes} likes
							</div>
							<div className="text-white/50 text-sm">
								{new Date().toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric',
								})}
							</div>
						</div>
						<form
							id="comment-form"
							className="flex flex-row items-center gap-4 h-[45px]">
							<img
								src={currentUser?.image?.url}
								alt={currentUser?.image?.alt}
								className="rounded-full w-8 h-8"
							/>
							<input
								type="text"
								placeholder="Add a comment..."
								className="w-full text-white bg-transparent border-none outline-none"
							/>
						</form>
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
