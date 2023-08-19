export default function Character({data}){

    const status = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        unknown: 'bg-gray-300'
    }

    return(
        <div className="flex flex-row rounded-lg shadow-lg hover:shadow-xl cursor-pointer text-slate-800 bg-white">
            <img src={data?.image} alt={data?.name} className="w-52 h-52 rounded-l-lg"/>
            <div className="flex flex-col gap-4 px-4 py-2 rounded-r-lg">
                <div>
                    <p className="text-2xl font-bold hover:text-orange-500">{data?.name}</p>
                    <div className="flex flex-row items-center gap-2 font-medium">
                        <div className={`w-2 h-2 rounded-full ${status[data?.status]}`}></div>
                        <p>{data?.status} - {data?.species}</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-500">Last known location:</p>
                    <a href={data?.location?.url} className="hover:text-orange-500">{data?.location?.name}</a>
                </div>
                <div>
                    <p className="text-gray-500">First seen in:</p>
                    <a href={data?.origin?.url}  className="hover:text-orange-500">{data?.origin?.name}</a>
                </div>
            </div>
        </div>
        )
    
}