import User from './User'

export default function Comment({ comment }) {
	return (
		<div className="flex flex-col gap-0 px-4 text-white">
			<div className="flex flex-row items-center gap-2">
				<User user={comment?.user} />
				<p className="text-sm font-medium text-white/50">3w</p>
			</div>
			<h2 className="ml-10 text-md">{comment?.content}</h2>
			<div className="ml-10 text-sm flex flex-row gap-2 text-white/50">
				<p>{comment?.metadata?.likes} likes</p>
				<p>Reply</p>
			</div>
		</div>
	)
}
