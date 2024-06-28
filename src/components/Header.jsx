import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/header.css'
import logo from '../image/hederLogo.png'
import menu from '../image/menu.png'
function Header() {
    function openModal(){
        document.querySelector(".modal").classList.add("show")
    }
    function close(){
        document.querySelector(".modal").classList.remove("show")
    }
    return (
        <header>
            <div className="modal">
                <div onClick={close} className="close">X</div>
           <div className="modal_content">
            <ul>
            <NavLink to="/discover"><li>Discover initiatives</li></NavLink>
            <NavLink to='/funded'> <li>Funded grants</li></NavLink>   
                <li>Program expenses</li>
                <li>Blog</li>
                <li>FAQ</li>
                
                <button>Apply for grant</button>
               
            </ul>
           </div>

            </div>
            <div className="header__wrapper">
                <div className="header__logo">
                    <NavLink to="/"> <img src={logo} alt="img" /></NavLink>
                </div>
                <div className="menu__wrapper">
                    <img onClick={openModal} className='menuImg' src={menu} alt="menuimg" />
                    <div className="menu">

                    </div>
                    <button className='menu_btn'>Apply </button>
                </div>


                <ul className='header__list'>
                    <NavLink to="/discover"> <li>Discover initiatives</li></NavLink>
                    <NavLink to="/funded"> <li>Funded grants</li></NavLink>
                    <li>Program expenses</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <button>Apply for grant</button>
                </ul>

            </div>

        </header>
    )
}

export default Header
