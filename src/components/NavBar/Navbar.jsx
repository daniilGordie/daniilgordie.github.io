import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './NavBar.module.css'

const NavBar = (props) => {
    const isActive = ({ isActive }) => (isActive ? s.active : '')
    return (
        <nav className={s.navigation}>
            <div className={s.item}>
                <NavLink to={'form'} className={isActive}>
                    Form
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'variables'} className={isActive}>
                    Variables
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
