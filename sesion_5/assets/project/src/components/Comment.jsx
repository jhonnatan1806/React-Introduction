export default function Comment({ comment }) {
	return (
		<div className="flex flex-row items-start px-4 gap-2 ">
			<img
				src={comment.user?.image?.url}
				alt={comment.user?.image?.alt}
				className="w-8 h-8 rounded-full"
			/>
			<div>
				<div className="flex flex-row items-center gap-2">
					<h1>{comment.user?.username}</h1>
					{comment.user?.verified ? (
						<img
							src="/icons/verified.svg"
							alt="verified"
							className="w-4 h-4"
						/>
					) : (
						<></>
					)}
					<p className="text-sm text-white/50">3w</p>
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-sm">{comment.content}</p>
					<div className="flex flex-row gap-2 text-sm text-white/50">
						<a href="#">{comment.metadata?.likes} Likes</a>
						<a href="#">Reply</a>
					</div>
				</div>
			</div>
		</div>
	)
}
