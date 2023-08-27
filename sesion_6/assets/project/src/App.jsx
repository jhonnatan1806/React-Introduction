import { useState, useEffect } from 'react'
import { getCharacters } from './services/fecthCharacters'
import Character from './components/Character'

function App() {

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const characters = await getCharacters(8)
            setCharacters(characters.results)
        }
        fetchData()
    }, [])


	return (
        <main className='bg-fixed bg-gradient-to-b from-sky-200 to-indigo-200'>
            <div className='grid grid-cols-2 gap-8 max-w-screen-xl mx-auto py-8'>
                {
                    characters.map((character, index)=>{
                        return <Character data={character} key={index} />
                    })
                }
            </div>
        </main>
    )
}

export default App
