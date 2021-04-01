import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { useStyles } from '../../styles/Header/HeaderStyles';
import Logo from '../../assets/Facebook_Logo.png';
import Avatar from '../../assets/avatar.jpg';

const userSettings = (
    <div style={{ width: 350, height: 420, backgroundColor: 'white', borderRadius: 10, position: 'absolute', right: 5, top: 45, border: '1px solid rgba(0,0,0,0.1)', boxShadow: '1px 1px 5px rgba(0,0,0,0.2)' }}>
        <div style={{ position: 'relative' }}>
            
        </div>
    </div>
);
    
function Header({ device }) {
    const classes = useStyles(device);
    const [showUserSetting, setShowUserSetting] = useState(false);

    const showUserSettingHandler = () => {
        setShowUserSetting(!showUserSetting);
    }

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
                <button onClick={showUserSettingHandler}><i className="fa fa-caret-down" /></button>
                { showUserSetting && userSettings}
            </div>
        </div>
    );
};

export default Header;
