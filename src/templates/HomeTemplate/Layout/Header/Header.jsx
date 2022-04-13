import React from 'react'
import { NavLink } from 'react-router-dom'
import {history} from '../../../../App'

export default function Header() {
    return (
        <header className=" p-2 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-50 bg-black text-white w-full fixed z-10 ">
            <div className="px-6 flex justify-between h-12 ">
                <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center ">
                  <img src="./img/tix-logo.png" alt="" className="w-1/2" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 text-white text-xl hover:text-red-500 font-bold "  activeClassName="border-b-2 border-white text-red-500 ">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/news" className="flex items-center px-4 -mb-1 text-white text-xl hover:text-red-500 font-bold" activeClassName="border-b-2 border-white text-red-500">News</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/contact" className="flex items-center px-4 -mb-1 text-white text-xl hover:text-red-500 font-bold" activeClassName="border-b-2 border-white text-red-500">Contact</NavLink>
                    </li>
                    
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                <i className="fa fa-user-circle  text-3xl"></i>
                    <button className=" hover:text-red-500 self-center px-1 py-3 rounded  font-semibold " onClick={()=>{
                        history.push("/login")
                    }}> Sign in /</button>
                    <button className="hover:text-red-500  self-center py-3 font-semibold rounded dark:bg-white-400 dark:text-coolGray-900 " onClick={()=>{
                        history.push("/register");
                    }}>Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
