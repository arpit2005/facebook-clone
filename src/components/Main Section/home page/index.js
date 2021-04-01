import React from 'react';
import { useStyles } from '../../../styles/Main Section/MainSectionStyles';
import Picture from '../../../assets/avatar.jpg';
import LikeIcon from '../../../assets/like.png';
import LoveIcon from '../../../assets/love.png';
import WowIcon from '../../../assets/wow.png';
import SadIcon from '../../../assets/sad.png';
import HahaIcon from '../../../assets/haha.png';
import CareIcon from '../../../assets/care.png';
import AngryIcon from '../../../assets/angry.png';

function HomeMainSection({ device }) {
    const classes = useStyles(device);

    return (
        <div className={classes.mainSection}>
            <div className={classes.storyCards}>
                {
                    device === 'mobile' || device === 'xs' ? '':
                        <div className="cards">
                            <img src={Picture} alt="story" />
                            <div className="story-username">
                                <span>Arpit</span><br />
                                <span>Sharma</span>
                            </div>
                        </div>
                }
                {
                    device === 'mobile' || device === 'xs' ? '' :
                        <div className="cards">
                            <img src={Picture} alt="story" />
                            <div className="story-username">
                                <span>Arpit</span><br />
                                <span>Sharma</span>
                            </div>
                        </div>
                }
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
            <div className={classes.createPost}>
                <div className={classes.createPostHeaderBox}>
                    <img className={classes.createPostAvatar} src={Picture} alt="icon" />
                    <span className={classes.mainSectionSearchBar}>
                        {`What's on your mind, Arpit?`}
                    </span>
                </div>
                <div className={classes.createPostDivider} />
                <div className={classes.createPostOptions}>
                    <span className={classes.createPostOptionsBox}>
                        <i className="video icon video-icon"></i>&nbsp;<span>Live Video</span>
                    </span>
                    <span className={classes.createPostOptionsBox}>
                        <i className="file image outline icon file-icon"></i>&nbsp;<span>Photo/Video</span>
                    </span>
                    {
                        device === 'lg' || device === 'md' || device === 'sm' ?
                            <span className={classes.createPostOptionsBox}>
                                <i className="smile outline icon smile-icon"></i>&nbsp;<span>Feeling/Activity</span>
                            </span>
                            : ''
                    }
                </div>
            </div>
            <div className={classes.postsContainer}>
                <div className={classes.postsHeader}>
                    <img className={classes.postsHeaderAvatar} src={Picture} alt="icon" />
                    <div>
                        
                        <span className={classes.postsHeaderName}>Arpit Sharma</span><br />
                        <span className={classes.postsHeaderPostTime}>5h . <i className="fa fa-users" /></span>
                    </div>
                    <span className={classes.postsHeaderPostOptions}><i className="fa fa-ellipsis-h" /></span>
                </div>
                <div className={classes.postsTextBlock}>
                    <span>It was a great coincidence to meet my Indian Astronomy Professor K. Ramasubramanian at the Airport. Doctorate in Theoretical Physics, Bachelors in Engineering and Masters in Sanskrit, his way of teaching will increase your respect towards ancient Indian Mathematicians manifold.</span>
                </div>
                <div className={classes.postsImageBlock}>
                    <img src={Picture} alt="post" />
                </div>
                <div className={classes.postsReactionsBlock}>
                    <span><img src={LikeIcon} alt="like-icon" /></span>
                    <span><img src={LoveIcon} alt="love-icon" /></span>
                    <span><img src={CareIcon} alt="care-icon" /></span>
                    <span><img src={HahaIcon} alt="haha-icon" /></span>
                    <span><img src={WowIcon} alt="wow-icon" /></span>
                    <span><img src={SadIcon} alt="sad-icon" /></span>
                    <span><img src={AngryIcon} alt="angry-icon" /></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={classes.createPostDivider} style={{ marginTop: 8 }} />
                <div className={classes.postsReactionsBtnBlock}>
                    <span><i className="fa fa-thumbs-up" />&nbsp; Like</span>
                    <span><i className="fa fa-comment" />&nbsp; Comment</span>
                    <span><i className="fa fa-share" />&nbsp; Share</span>
                </div>

                <div className={classes.createPostDivider} style={{ marginTop: 0 }} />

                <div className={classes.postsCommentsBlock}>
                    <img className={classes.postsCommentAvatar} src={Picture} alt="icon" />
                    <div className={classes.postsCommentContainer}>
                        <div className={classes.postsCommentText}>
                            <span className={classes.postsCommentTextName}>Arpit Sharma</span><br />
                            <span>Dark desire is amazingly wild and hot.</span>
                        </div>
                        <div className={classes.postsCommentOptions}>
                            <span className={classes.postsCommentOptionsLike}>Like</span>&nbsp;&nbsp;
                            <span className={classes.postsCommentOptionsReply}>Reply</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.postsCommentOptionsTime}>7h</span>
                        </div>
                    </div>
                </div>
                
                <div className={classes.postsCommentBoxBlock}>
                    <img className={classes.postsCommentAvatar} src={Picture} alt="icon" />
                    <input type="text" className={classes.postsCommentInput} placeholder="Write a comment..." />
                </div>
            </div>
        </div>
    );
};

export default HomeMainSection;
