import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
    {
        name: "Inicio",
        path: "/",
    },
    {
        name: "Ayudantias",
        path: "/ayudantias",
    },
];

function Header() {
    return (
        <header className="bg-slate-800 text-white">
            <nav className="flex mx-auto h-12 max-w-screen-lg">
                <ul className="flex justify-start items-center gap-4">
                    {routes.map((route, index) => (
                        <li key={index}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) => {
                                    return isActive ? "text-sky-300" : "";
                                }}
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
