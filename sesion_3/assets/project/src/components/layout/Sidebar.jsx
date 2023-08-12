import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function Sidebar() {
	return (
        <div className='flex flex-col w-72 h-screen gap-6 py-4 fixed bg-slate-900'>
            <Header />
            <Navbar />
            <Footer />
        </div>
    );
}

export default Sidebar;
