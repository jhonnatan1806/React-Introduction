export default function User({ user }) {
	return (
		<div className="flex flex-row items-center gap-2">
			<img
				src={user.image?.url}
				alt={user.image?.alt}
				className="rounded-full w-8 h-8"
			/>
			<p className="text-sm font-medium">{user.username}</p>
			{user.verified ? (
				<img
					src="/icons/verified.svg"
					alt="verified"
					className="w-4 h-4"
				/>
			) : (
				<></>
			)}
		</div>
	)
}
