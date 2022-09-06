import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const inactiveLink = 'w-full block text-xl h-10 pl-2 leading-10 tracking-wider hover:text-white hover:bg-black phone:text-base'
    const activeLink = inactiveLink + ' bg-black text-white'
    return (
        <div>
            <div className="hidden phone:block">
                <button className="p-1" onClick={() => setNavOpen(!navOpen)}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
                </button>
            </div>
            <div className={ navOpen ? 'phone:block' : 'phone:hidden' }>
                <NavLink onClick={() => setNavOpen(!navOpen)} to="/home" className={({isActive}) => isActive ? activeLink : inactiveLink}>Home</NavLink>
                <NavLink onClick={() => setNavOpen(!navOpen)} to="/resume" className={({isActive}) => isActive ? activeLink : inactiveLink}>Resume</NavLink>
                <NavLink onClick={() => setNavOpen(!navOpen)} to="/projects" className={({isActive}) => isActive ? activeLink : inactiveLink}>Projects</NavLink>
                <NavLink onClick={() => setNavOpen(!navOpen)} to="/contact" className={({isActive}) => isActive ? activeLink : inactiveLink}>Contact</NavLink>
            </div>
        </div>
    )
}