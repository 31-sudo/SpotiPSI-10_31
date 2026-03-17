import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songs: {
        direction: 'ltr',
        height: '82vh',
        width: '87%',
        overflowY: 'scroll'
    }
}));

export default useStyles;