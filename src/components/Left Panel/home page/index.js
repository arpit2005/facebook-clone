import React from 'react';
import { useStyles } from '../../../styles/Left Panel/LeftPaneStyles';
import avatar from '../../../assets/avatar.jpg';
import { list } from '../list';

function HomeSideBar() {
    const classes = useStyles();

    return (
        <div className={classes.leftPanel}>
            <div className={classes.list}>
                <ul>
                    <li className={classes.listItem}>
                        <img src={avatar} alt="icon" />
                        <span>Arpit Sharma</span>
                    </li>
                    {
                        list.map((value, index) => {
                            return (
                                <li className={classes.listItem} key={index}>
                                    <img src={value.link} alt="icon" />
                                    <span>{value.title}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className={classes.footer}>
                <ul>
                    <li><a href="/">Privacy</a></li>
                    <li>.</li>
                    <li><a href="/">Terms</a></li>
                    <li>.</li>
                    <li><a href="/">Advertising</a></li>
                    <li>.</li>
                    <li><a href="/">Ad Choices</a></li>
                    <li>.</li>
                    <li><a href="/">Cookies</a></li>
                    <li>.</li>
                    <li><a href="/">More</a></li>
                    <li>.</li>
                    <li><a href="/">Facebook &copy; 2021</a></li>
                </ul>
            </div>
        </div>
    );
};

export default HomeSideBar;
