import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    mainSection: {
        width: (device) => {
            if (device === 'lg') return '40%';
            if (device === 'md') return '60%';
            if (device === 'sm') return '70%';
            if (device === 'xs') return '98%';
        },
        margin: '80px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    storyCards: {
        display: 'flex',
        flexDirection: 'row',
        '& .cards': {
            width: 112,
            height: 200,
            margin: '0 5px',
            position: 'relative',
            '& img': {
                borderRadius: 10,
                width: '100%',
                height: '100%',
                transition: '0.2s all linear',
                '&:hover': {
                    transform: 'scale(1.02)',
                }
            },
            '& .story-username': {
                position: 'absolute',
                bottom: 5,
                left: 10,
                color: 'white',
                fontSize: 15,
            }
        }
    },

    createPost: {
        marginTop: 20,
        borderRadius: 10,
        width: (device) => {
            if (device === 'xs') return '98%';
            return 600;
        },
        paddingTop: 5,
        height: 120,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    createPostHeaderBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    createPostAvatar: {
        height: 40,
        width: 40,
        marginRight: 10,
        borderRadius: '50%',
    },

    mainSectionSearchBar: {
        cursor: 'pointer',
        display: 'inline-block',
        width: '80%',
        cursor: 'pointer',
        background: '#f0f2f5',
        padding: 12,
        paddingLeft: 20,
        border: 'none',
        outline: 'none',
        borderRadius: 100,
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.6)',
    },

    createPostDivider: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        width: '95%',
        margin: '0 auto',
        marginTop: 12,
    },

    createPostOptions: {
        width: '100%',
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',        
    },

    createPostOptionsBox: {
            display: 'inline-flex',
            padding: '10px 15px',
            borderRadius: 5,
            width: (device) => {
                if (device === 'xs') return '40%';
                return '32%';
            },
            margin: '0 5px',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
            },
            '& span': {
                fontSize: 13,
                fontWeight: 600,
                opacity: 0.7,
            },
            '& .video-icon': {
                fontSize: 23,
                color: 'red'
            },
            '& .file-icon': {
                fontSize: 23,
                color: 'green'
            },
            '& .smile-icon': {
                fontSize: 23,
                color: 'orange'
            },            
    },

    postsContainer: {
        margin: '20px 0 ',
        width: (device) => {
            if (device === 'xs') return '98%';
            return 600;
        },
        backgroundColor: 'white',
        borderRadius: 10,
    },

    postsHeader: {
        width: '100%',
        height: 60,
        marginBottom: 5,
        paddingLeft: 15,
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },

    postsHeaderAvatar: {
        cursor: 'pointer',
        height: 40,
        width: 40,
        borderRadius: '50%',
        marginRight: 10
    },

    postsHeaderName: {
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 600
    },

    postsHeaderPostTime: {
        fontSize: 12,
        opacity: 0.8
    },

    postsHeaderPostOptions: {
        position: 'absolute',
        right: 20,
        opacity: 0.6,
        fontSize: 16,
        cursor: 'pointer'
    },

    postsTextBlock: {
        paddingLeft: 15,
        paddingRight: 13,
        fontSize: 14
    },

    postsImageBlock: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            width: '100%'
        }
    },

    postsReactionsBlock: {
        display: 'flex',
        paddingLeft: 15,
        '& img': {
            width: 20
        }
    },

    postsReactionsBtnBlock: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '10px 0',
        '& span': {
            fontSize: 15,
            opacity: 0.7,
            fontWeight: 600
        }
    },

    postsCommentsBlock: {
        paddingLeft: 20,
        paddingTop: 10,
        display: 'flex',
        alignItems: 'center'
    },

    postsCommentBoxBlock: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    postsCommentAvatar: {
        height: 40,
        width: 40,
        marginRight: 8,
        borderRadius: '50%',
        cursor: 'pointer'
    },

    postsCommentContainer: {
        display: 'flex',
        flexDirection: 'column'
    },

    postsCommentText: {
        background: '#f0f2f5',
        borderRadius: 18,
        padding: 10
    },

    postsCommentTextName: {
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    postsCommentOptions: {
        marginLeft: 10,
        fontSize: 12
    },

    postsCommentOptionsLike: {
        fontWeight: 700,
        opacity: 0.8,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    postsCommentOptionsReply: {
        fontWeight: 700,
        opacity: 0.8,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    postsCommentOptionsTime: {
        opacity: 0.8,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    
    postsCommentInput: {
        width: '85%',
        background: '#f0f2f5',
        padding: 12,
        paddingLeft: 20,
        border: 'none',
        outline: 'none',
        borderRadius: 100,
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.6)',
    },
});