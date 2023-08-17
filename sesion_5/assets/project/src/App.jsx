import { useState, useEffect, useRef } from 'react'
import * as profileService from './services/fetchProfile'
import * as accountService from './services/fetchAccount'
import User from './components/User'
import Comment from './components/Comment'
import IconToggle from './components/IconToggle'
import { FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa'

function App() {
	const [currentUser, setCurrentUser] = useState({})
	const [posts, setPosts] = useState([])
	const [postOwenerUser, setPostOwnerUser] = useState({})

	//usamos useRef inmutable atraves de re-renders
	const counterLike = useRef(null)

	// component mount
	useEffect(() => {
		const fetchCurrentUser = async () => {
			const res = await accountService.getUser('_valentina_medini')
			setCurrentUser(res)
		}

		const fetchPosts = async () => {
			const res = await profileService.getPosts('design')
			setPosts(res)
			counterLike.current = res[0].metadata?.likes || 0
		}

		const fetchPostOwnerUser = async () => {
			const res = await profileService.getUser('design')
			setPostOwnerUser(res)
		}

		fetchCurrentUser()
		fetchPosts()
		fetchPostOwnerUser()
	}, [])

	return (
		<main className="flex items-center justify-center h-screen w-screen bg-black text-white">
			<div className="flex flex-row w-fit border border-white/25">
				<picture>
					<img
						src={posts[0]?.image?.url}
						alt={posts[0]?.image?.alt}
						className="max-w-[480px] max-h-[600px]"
					/>
				</picture>
				<section className="w-[335px] h-[600px]">
					<div
						id="header"
						className="flex flex-row items-center gap-2 p-2 w-full h-[60px] border border-white/25">
						<User user={postOwenerUser} />
						<p className="text-sm font-medium"> • </p>
						<p className="text-sm font-medium text-sky-500">
							Follow
						</p>
					</div>
					<div
						id="messages"
						className="flex flex-col gap-2 w-full h-[365px] overflow-y-scroll">
						{posts[0]?.comments.map((comment, index) => (
							<Comment key={index} comment={comment} />
						))}
					</div>
					<div
						id="footer"
						className="flex flex-col gap-4 w-full h-[175px] p-4 border border-white/25">
						<div
							id="icons"
							className="flex flex-col justify-center gap-1 h-[100px]">
							<div className="flex flex-row gap-2">
								<IconToggle />
								<FaRegComment className="w-6 h-6" />
								<FaRegPaperPlane className="w-6 h-6" />
								<div className="flex justify-end grow">
									<FaRegBookmark className="w-6 h-6" />
								</div>
							</div>
							<p>{counterLike.current} likes</p>
							<p className="text-sm text-white/50">
								{new Date().toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric'
								})}
							</p>
						</div>
						<form
							id="form"
							className="flex flex-row items-center gap-4">
							<img
								src={currentUser?.image?.url}
								alt={currentUser?.image?.alt}
								className="rounded-full w-8 h-8"
							/>
							<input
								type="text"
								placeholder="Add a comment ..."
								className="w-full border-none outline-none bg-transparent"
							/>
						</form>
					</div>
				</section>
			</div>
		</main>
	)
}

export default App
