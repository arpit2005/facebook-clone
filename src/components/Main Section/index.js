import React from 'react'
import '../../styles/Main Section/MainSection.css'
import Picture from '../../assets/avatar.jpg'

function MainSection() {
    return (
        <div className="main-section">
            <div className="story-cards">
                <div className="cards">
                    <img src={Picture} alt="story" />
                    <div className="story-username">
                        <span>Arpit</span><br />
                        <span>Sharma</span>
                    </div>
                </div>
                <div className="cards">
                    <img src={Picture} alt="story" />
                    <div className="story-username">
                        <span>Arpit</span><br />
                        <span>Sharma</span>
                    </div>
                </div>
                <div className="cards">
                    <img src={Picture} alt="story" />
                    <div className="story-username">
                        <span>Arpit</span><br />
                        <span>Sharma</span>
                    </div>
                </div>
                <div className="cards">
                    <img src={Picture} alt="story" />
                    <div className="story-username">
                        <span>Arpit</span><br />
                        <span>Sharma</span>
                    </div>
                </div>
                <div className="cards">
                    <img src={Picture} alt="story" />
                    <div className="story-username">
                        <span>Arpit</span><br />
                        <span>Sharma</span>
                    </div>
                </div>
            </div>
            <div className="create-post">
                <div>
                    <img class="ui avatar image" style={{ height: 40, width: 40, marginRight: 10 }} src={Picture} alt="icon" />
                    <div className="search-bar">
                        <input type="text" placeholder={`What's on your mind, Arpit?`} />
                    </div>
                </div>
            </div>
            <div className="create-room">

            </div>
            <div className="posts">

            </div>
        </div>
    )
}

export default MainSection
