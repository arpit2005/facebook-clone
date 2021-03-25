import React from 'react'
import '../../styles/Header/Header.css'
import Logo from '../../assets/Facebook_Logo.png'

function Header() {
    return (
        <div className="header-body">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="search-bar">
                <span><i className="fa fa-search" /></span>
                <input type="text" placeholder="Search Facebook" />
            </div>
            <div className="menu-items">
                <span><i className="fa fa-home" /></span>
                <span><i className="fa fa-play-circle" /></span>
                <span><i class="fa fa-building" /></span>
                <span><i className="fa fa-users" /></span>
                <span><i className="fa fa-cube" /></span>
            </div>
            <div className="options">
                <button><i className="fa fa-plus" /></button>
                <button><i className="fa fa-comment" /></button>
                <button><i className="fa fa-bell" /></button>
                <button><i className="fa fa-caret-down" /></button>
            </div>
        </div>
    )
}

export default Header
