import React from 'react';
import Profile from '../common/Profile';
import Title from '../common/Title';
import Social from '../common/Social';

import {FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn} from "react-icons/fa"

function Header() {
	return (
        <div className='flex flex-col items-center gap-4'>
            <Profile src="/images/profile.jpg" alt={"Profile"}/>
            <Title>Maria Perez</Title>
            <div className='flex flex-row gap-4'>
                <Social href="#twitter">
                    <FaTwitter size={16}/>
                </Social>
                <Social href="#facebook">
                    <FaFacebookF size={16}/>
                </Social>
                <Social href="#instagram">
                    <FaInstagram size={16}/>
                </Social>
                <Social href="#skype">
                    <FaSkype size={16}/>
                </Social>
                <Social href="#linkedin">
                    <FaLinkedinIn size={16}/>
                </Social>
            </div>
        </div>
    );
}

export default Header;
