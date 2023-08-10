import {VscGlobe} from 'react-icons/vsc'
import {FaCaretDown, FaChevronRight} from 'react-icons/fa'

import './App.css'

function App() {

    return (
        <main className='relative flex flex-col h-screen w-screen'>
            <div className='absolute z-0 inset-0 bg-center background'></div>
            <div className='absolute z-0 inset-0 overlay'></div>
            <header className='relative z-10 flex flex-row justify-between w-full max-w-screen-xl p-6 mx-auto'>
                <a>
                    <img src="/icons/netflix.svg" width={148}/>
                </a>
                <div className='flex flex-row items-center gap-4'>
                    <div className='relative flex flex-row items-center gap-4'>
                        <VscGlobe fill='white' size={20} className='absolute z-10 left-2'/>
                        <FaCaretDown fill='white' size={14} className='absolute z-10 right-2'/>
                        <select className='relative w-36 px-9 py-1 rounded border appearance-none text-white border-white/25 bg-black/75'>
                            <option>
                                English
                            </option>
                            <option>
                                Spanish
                            </option>
                        </select>
                    </div>
                    <a href='#' className='px-4 py-1 rounded select-none text-white bg-red'>
                        Sign In
                    </a>
                </div>
            </header>
            <section className='relative z-10 flex flex-col grow justify-center items-center gap-6 text-white'>
                <h1 className='text-5xl font-bold'>Unlimited movies, TV shows, and more</h1>
                <h2 className='text-2xl'>Watch anywhere. Cancel anytime.</h2>
                <h3 className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</h3>
                <form className='flex flex-row gap-2'>
                    <input
                        type='text'
                        placeholder='Email address'
                        className='min-w-[375px] px-4 py-3 rounded border border-white/25 bg-black/75'
                    />
                    <button className='flex flex-row items-center gap-4 px-8 py-3 rounded select-none bg-red text-white'>
                        <p className='font-medium text-2xl'>Get Started</p>
                        <FaChevronRight/>
                    </button>
                </form>
            </section>            
        </main>
    )
}

export default App