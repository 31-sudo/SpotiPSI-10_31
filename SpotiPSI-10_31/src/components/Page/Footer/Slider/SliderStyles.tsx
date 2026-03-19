import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    audioPlayer: {
        direction: 'ltr',
        width: '100%'
    },
    input: {
        width: '100%',
        height: '5px',
        accentColor: '#9B59B6',
        outline: 'none'
    },
    trackDuration: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: 'white'
    },
    time: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
}));

export default useStyles;