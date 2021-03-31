import React from 'react';
import { useStyles } from '../../styles/Header/HeaderStyles';
import Logo from '../../assets/Facebook_Logo.png';

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.headerBody}>
            <div className={classes.logo}>
                <img src={Logo} className={classes.logoImg} alt="logo" />
            </div>
            <div className={classes.searchBar}>
                <span><i className='fa fa-search' /></span>
                <input className={classes.searchBarInput} type="text" placeholder="Search Facebook" />
            </div>
            <div className={classes.menuItems}>
                <span><i className="fa fa-home" /></span>
                <span><i className="fa fa-play-circle" /></span>
                <span><i className="fa fa-building" /></span>
                <span><i className="fa fa-users" /></span>
                <span><i className="fa fa-cube" /></span>
            </div>
            <div className={classes.options}>
                <button><i className="fa fa-plus" /></button>
                <button><i className="fa fa-comment" /></button>
                <button><i className="fa fa-bell" /></button>
                <button><i className="fa fa-caret-down" /></button>
            </div>
        </div>
    )
}

export default Header
