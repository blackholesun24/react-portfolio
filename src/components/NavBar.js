import React from "react";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons"

export default function NavBar(){
    return (
        <header className="bg-blue-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                             exact
                             activeClassName="text-white"
                             className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post"
                             activeClassName="text-red-100 bg-red-700"
                             className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Blog
                    </NavLink>
                    <NavLink to="/project"
                             activeClassName="text-red-100 bg-red-700"
                             className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Projets
                    </NavLink>
                    <NavLink to="/about"
                             activeClassName="text-red-100 bg-red-700"
                             className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        A propos
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/cl%C3%A9ment-silvestre-23aa55139/" className="mr-4" target={"_blank"} rel="noreferrer" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/blackholesun24/" className="mr-4" target={"_blank"} fgColor="#fff" rel="noreferrer" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.instagram.com/clementsilvestre/" className="mr-4" target={"_blank"} rel="noreferrer" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}