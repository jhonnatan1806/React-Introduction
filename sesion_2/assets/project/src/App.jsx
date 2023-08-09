import { VscGlobe } from 'react-icons/vsc'
import { FaCaretDown, FaChevronRight } from 'react-icons/fa'

import './App.css'

function App() {
    return (
        <main className="relative flex flex-col h-screen w-screen">
            <div className="absolute z-0 inset-0 bg-center background"></div>
            <div className="absolute inset-0 z-0 overlay"></div>
            <header className="relative z-10 flex flex-row w-full justify-between select-none p-6 max-w-screen-xl mx-auto">
                    <a href="#">
                        <img src="/icons/netflix.svg" width={148} />
                    </a>
                    <div className="flex flex-row items-center gap-4">
                        <div className="relative flex flex-row items-center gap-4">
                            <VscGlobe size={20} fill="white" className='absolute z-10 left-2'/>
                            <FaCaretDown size={14} fill="white" className='absolute z-10 right-2' />
                            <select className='relative w-36 px-9 py-1 appearance-none rounded border text-white border-white border-opacity-25 bg-black bg-opacity-75'>
                                <option>English</option>
                                <option>Español</option>
                            </select>
                            
                        </div>
                        <a
                            href="#"
                            className="px-4 py-1 rounded-md select-none bg-red text-white">
                            <p>Sign In</p>
                        </a>
                    </div>
                </header>
                <section className="relative z-10 flex flex-col justify-center items-center gap-6 my-auto text-white">
                    <h1 className="text-5xl font-bold">
                        Unlimited movies, TV shows, and more
                    </h1>
                    <h2 className="text-2xl">Watch anywhere. Cancel anytime.</h2>
                    <h3 className="text-xl">
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </h3>
                    <form className="flex flex-row gap-2">
                        <input
                            type="text"
                            className="flex flex-row min-w-[375px] w-fit px-4 py-3 rounded border border-white border-opacity-25 bg-black bg-opacity-75 text-white"
                            placeholder="Email address"
                        />
                        <button
                            className="flex flex-row items-center gap-4 px-8 py-3 rounded-md select-none bg-red text-white">
                            <p className="font-medium text-2xl">Get Started</p>
                            <FaChevronRight />
                        </button>
                    </form>
                </section>
        </main>
    )
}

export default App
