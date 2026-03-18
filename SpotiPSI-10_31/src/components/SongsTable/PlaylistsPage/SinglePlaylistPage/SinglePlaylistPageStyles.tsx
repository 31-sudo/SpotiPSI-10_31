import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    playlist: {
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
    playlistHeader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerItem: {
        padding: '25px'
    }
}));

export default useStyles;