import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songs: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

export default useStyles;