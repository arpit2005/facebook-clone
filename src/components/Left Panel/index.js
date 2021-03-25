import React from 'react'
import '../../styles/Left Panel/LeftPanel.css'
import avatar from '../../assets/avatar.jpg'
import { list } from './list'

function LeftPanel() {
    return (
        <div className="left-panel">
            <div className="list">
                <ul>
                    <li>
                        <img class="ui avatar image" style={{ height: 35, width: 35, marginRight: 10 }} src={avatar} alt="icon" /> 
                        <span style={{ fontWeight: 600 }}>Arpit Sharma</span>
                    </li>
                    {
                        list.map(value => {
                            return (
                                <li>
                                    <img class="ui avatar image" style={{ height: 35, width: 35, marginRight: 10 }} src={value.link} alt="icon" /> 
                                    <span style={{ fontWeight: 600 }}>{value.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer">
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
}

export default LeftPanel
