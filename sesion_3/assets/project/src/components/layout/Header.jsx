import React from "react";
import Profile from "../common/Profile";
import Title from "../common/Title";
import Social from "../common/Social";

import {FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn} from "react-icons/fa";

function Header() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Profile src="/images/profile.jpg" alt="Profile"/>
            <Title>Maria Perez</Title>
            <div className="flex flex-row gap-4"> 
                <Social href="#">
                    <FaTwitter fill="white" size={16}/>
                </Social>
                <Social href="#">
                    <FaFacebookF fill="white" size={16}/>
                </Social>
                <Social href="#">
                    <FaInstagram fill="white" size={16}/>
                </Social>
                <Social href="#">
                    <FaSkype fill="white" size={16}/>
                </Social>
                <Social href="#">
                    <FaLinkedinIn fill="white" size={16}/>
                </Social>
            </div>
        </div>
    );
}

export default Header;