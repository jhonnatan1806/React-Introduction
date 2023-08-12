import React from 'react'
import Sidebar from './components/layout/Sidebar'

import Home from './components/pages/Home'
import About from './components/pages/About'

import './App.css'

function App() {

    return (
    <main>
        <Sidebar />
        <section className='ml-72'>
            <Home />
            <About />
        </section>
    </main>
    )
}

export default App
