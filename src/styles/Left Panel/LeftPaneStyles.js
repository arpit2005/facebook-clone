import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    leftPanel: {
        width: '23%',
        minWidth: 270,
        height: '100%',
        overflowY: 'scroll',
        position: 'fixed',
        left: 0,
        top: 56,
        zIndex: 1,
        backgroundColor: '#f2f0f5',
        paddingTop: 10,
        paddingLeft: 5,
        paddingBottom: 70,
        '&::-webkit-scrollbar': {
            width: 8
        }
    },
    list: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        paddingBottom: 10,
        marginBottom: 20,
    },
    listItem: {
        padding: '8px 5px 8px 10px',
        listStyleType: 'none',
        margin: '0px 2px',
        borderRadius: 10,
        transition: '0.3s all linear',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }
        ,
        '& img': {
            
        }
    },
    footer: {
        padding: '0 10px',
        '& li': {
            margin: '0 3px',
            display: 'inline-block',
            fontSize: 12,
            opacity: 0.8,
        }
    }
});