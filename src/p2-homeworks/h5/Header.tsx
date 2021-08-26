import React from 'react'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

function Header() {
    return (
        <div className={style.dropdown}>
            <SuperButton>X</SuperButton>
            <div className={style.dropdownContent}>
                <NavLink to={PATH.PRE_JUNIOR} className={style.link}>PreJunior </NavLink>
                <NavLink to={PATH.JUNIOR} className={style.link}>Junior </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={style.link}>JuniorPlus</NavLink>
            </div>
        </div>
    )
}

export default Header
