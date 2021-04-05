import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    headerBody: {
        backgroundColor: 'white',
        height: 57,
        width: '100%',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        position: 'fixed',
        top: 0,
        zIndex: 2,
    },
    logo: {
        marginRight: 10,
        paddingTop: 5,
    },
    logoImg: {
        cursor: 'pointer',
        height: 42,
    },
    searchBar: {
        position: 'relative',
        flexBasis: (device) => {
            if (device === 'mobile' || device === 'xs' || device === 'sm') return '10%';
                return '23.5%';
        },
        '& .fa-search': {
            position: 'absolute',
            zIndex: 1,
            top: 14,
            left: 12,
            color: 'rgba(0, 0, 0, 0.4)',
        }
    },
    searchBarInput: {
        cursor: 'pointer',
        background: '#f0f2f5',
        width: (device) => {
            if (device === 'mobile' || device === 'xs' || device === 'sm') return 20;
                return 235;
        },
        padding: 12,
        paddingLeft: (device) => {
            if (device === 'mobile' || device === 'xs' || device === 'sm') return 28;
                return 32;
        },
        border: 'none',
        outline: 'none',
        borderRadius: (device) => {
            if (device === 'mobile' || device === 'xs' || device === 'sm') return '50%';
                return 100;
        },
        fontSize: 15,
    },
    menuItems: {        
        '& span': {
            cursor: 'pointer',
            display: 'inline-block',
            borderRadius: 10,
            paddingLeft: '3vw',
            paddingRight: '3vw',
            marginLeft: 4,
            marginRight: 4,
            '&:hover': {
            background: 'rgba(0, 0, 0, 0.1)',
            }  
        },
        '& i': {
              margin: '10px 0',
              fontSize: 25,
              color: 'rgba(0, 0, 0, 0.4)'
        },              
    },

    options: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        '& button': {
            cursor: 'pointer',
            margin: '0 5px',
            background: 'rgba(0, 0, 0, 0.1)',
            border: 'none',
            outline: 'none',
            width: 40,
            height: 40,
            borderRadius: '50%',
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.2)'
            }
        }
    },
    userBlock: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            width: 28,
            height: 28,
            borderRadius: '50%',            
        },
        '& span': {
            fontWeight: 600
        }
    }
});