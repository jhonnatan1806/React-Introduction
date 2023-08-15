import React from 'react'

function Footer(){
    return (
        <footer className='flex justify-center items-center h-12 max-w-screen-lg mx-auto'>
            <p>
                &copy; Copyright {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer