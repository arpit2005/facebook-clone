import React from 'react';
import { navigate } from '@reach/router';
import { useStyles } from '../../styles/Header/HeaderStyles';
import Logo from '../../assets/Facebook_Logo.png';
import Avatar from '../../assets/avatar.jpg';
    
function Header({ device }) {
    const classes = useStyles(device);

    return ( 
        <div className={classes.headerBody}>
            <div className={classes.logo}>
                <img src={Logo} className={classes.logoImg} alt="logo" onClick={() => navigate('/')} />
            </div>
            <div className={classes.searchBar}>
                <span><i className='fa fa-search' /></span>
                <input className={classes.searchBarInput} type="text" placeholder="Search Facebook" />
            </div>
            {
                device === 'lg' || device === 'md' || device === 'sm' ?
                    <div className={classes.menuItems}>
                        <span onClick={() => navigate('/')}><i className="fa fa-home" /></span>
                        <span onClick={() => navigate('/watch')}><i className="fa fa-play-circle" /></span>
                        <span><i className="fa fa-building" /></span>
                        <span onClick={() => navigate('/friends')}><i className="fa fa-users" /></span>
                        <span><i className="fa fa-cube" /></span>
                    </div>
                    : ''
            }
            <div className={classes.options}>
                {
                    device === 'lg' ?
                        <div className={classes.userBlock}>
                            <img src={Avatar} alt="user" />&nbsp;
                        <span>Arpit</span>&nbsp;&nbsp;&nbsp;
                    </div>
                        : ''
                }
                <button><i className="fa fa-plus" /></button>
                <button><i className="fa fa-comment" /></button>
                <button><i className="fa fa-bell" /></button>
                <button><i className="fa fa-caret-down" /></button>
            </div>
        </div>
    );
};

export default Header;
