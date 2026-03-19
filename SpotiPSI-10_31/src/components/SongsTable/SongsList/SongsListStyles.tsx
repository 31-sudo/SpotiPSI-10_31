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
    }
}));

export default useStyles;