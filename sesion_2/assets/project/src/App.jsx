import { VscGlobe } from 'react-icons/vsc'
import { FaCaretDown, FaChevronRight } from 'react-icons/fa'

import './App.css'

function App() {
    return (
        <main className="h-screen w-screen">
            <div className="bg-center absolute inset-0 background"></div>
            <div className="absolute inset-0 overlay"></div>
            <div className="relative flex flex-col w-full h-full">
                <header className="flex flex-row w-full justify-between select-none p-6 max-w-screen-xl mx-auto">
                    <a href="#">
                        <img src="/icons/netflix.svg" width={148} />
                    </a>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-row items-center cursor-pointer w-fit px-2 py-1 gap-4 rounded border border-white border-opacity-25 bg-black bg-opacity-75 ">
                            <VscGlobe size={20} fill="white" />
                            <p className="text-white">English</p>
                            <FaCaretDown size={14} fill="white" />
                        </div>
                        <a
                            href="#"
                            className="px-4 py-1 rounded-md select-none bg-red text-white">
                            <p>Sign In</p>
                        </a>
                    </div>
                </header>
                <section className="flex flex-col justify-center items-center gap-4 my-auto text-white">
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
                            className="flex flex-row min-w-[375px] w-fit p-4 rounded border border-white border-opacity-25 bg-black bg-opacity-75 text-white"
                            placeholder="Email address"
                        />
                        <button
                            className="flex flex-row items-center gap-4 px-8 py-4 rounded-md select-none bg-red text-white">
                            <p className="font-medium text-2xl">Get Started</p>
                            <FaChevronRight />
                        </button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default App
