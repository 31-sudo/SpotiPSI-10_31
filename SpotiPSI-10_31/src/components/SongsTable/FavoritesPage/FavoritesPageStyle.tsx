import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songs: {
        direction: 'rtl',
        height: '72vh',
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
    allSongsTitle: {
        padding: '25px'
    },
    song: {
        direction: 'ltr',
        borderBottom: '1px solid #545454',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    items: {
        display: 'flex',
        alignItems: 'center'
    },
    item: {
        color: '#B3B3B3'
    },
    playIcon: {
        color: '#9B59B6'
    },
    favorite: {
        color: '#9B59B6'
    }
}));

export default useStyles;