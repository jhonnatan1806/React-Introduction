import React from 'react';
import Navitem from '../common/Navitem';
import {AiOutlineHome, AiOutlineUser, AiOutlineFile, AiOutlineProfile, AiOutlineHdd, AiOutlineMail} from 'react-icons/ai'

function Navbar() {
	return <nav className='grow'>
        <Navitem href="#home">
            <AiOutlineHome/> Home
        </Navitem>
        <Navitem href="#about">
            <AiOutlineUser/> About
        </Navitem>
        <Navitem href="#resume">
            <AiOutlineFile/> Resume
        </Navitem>
        <Navitem href="#portfolio">
            <AiOutlineProfile/> Portfolio
        </Navitem>
        <Navitem href="#services">
            <AiOutlineHdd/> Services
        </Navitem>
        <Navitem href="#contact">
            <AiOutlineMail/> Contact
        </Navitem>
    </nav>;
}

export default Navbar;
