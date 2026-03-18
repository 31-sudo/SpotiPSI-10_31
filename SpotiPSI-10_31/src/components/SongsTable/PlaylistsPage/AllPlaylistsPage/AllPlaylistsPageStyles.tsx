import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    playlists: {
        direction: 'rtl',
        height: '82vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
        width: '10px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'white',
            borderRadius: '5px'
        }, 
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c27fdc',
            borderRadius: '5px'
        }
    },
    plalistsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    allPlaylistsTitle: {
        padding: '25px'
    },
    button: {
        color: '#9657B0',
        border: '1px solid #9657B0',
        borderRadius: '20px',
        margin: '25px'
    },
    cancelButtonColor: {
        color: '#9657B0'
    },
    createButtonColor: {
        color: 'white'
    },
    textField: {
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        }
    },
    dialog: {
        direction: 'rtl',
        '& .MuiDialog-container': {
            '& .MuiPaper-root': {
                width: '25%',
                color: 'white',
                backgroundColor: '#313131'
            }
        }
    },
    playlist: {
        paddingLeft: '25px',
        display: 'flex',
        borderBottom: '1px solid #545454',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    songsNumber: {
        color: '#B3B3B3',
        fontSize: '15px'
    }
}));

export default useStyles;