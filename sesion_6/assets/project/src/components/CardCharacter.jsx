export default function CardCharacter({ data }) {
	const status = {
		Alive: 'bg-green-500',
		Dead: 'bg-red-500',
		unknown: 'bg-gray-300'
	}

	return (
		<div className="flex flex-row  rounded-lg shadow-lg hover:shadow-2xl cursor-pointer text-slate-800 bg-white">
			<div>
				<img
					src={data?.image}
					alt={data?.name}
					className="w-52 h-52 rounded-l-lg"
				/>
			</div>
			<div className="flex flex-col gap-4 px-4 py-2 rounded-r-lg">
				<div className="flex flex-col">
					<h2 className="text-2xl font-bold line-clamp-1">
						{data?.name}
					</h2>
					<div className="flex flex-row items-center gap-2 font-medium">
						<div
							className={`w-2 h-2 rounded-full ${
								status[data?.status]
							}`}>
                        </div>
						<p className="line-clamp-1">
							{data?.status} - {data?.species}
						</p>
					</div>
				</div>
				<div>
					<p className="text-slate-500">Last known location:</p>
					<a href={data?.location?.url} className="line-clamp-1">
						{data?.location?.name}
					</a>
				</div>
				<div>
					<p className="text-slate-500">First seen in:</p>
					<a href={data?.origin?.url} className="line-clamp-1">
						{data?.origin?.name}
					</a>
				</div>
			</div>
		</div>
	)
}
