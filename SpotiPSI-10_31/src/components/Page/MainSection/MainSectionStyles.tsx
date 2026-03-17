import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainSectionDiv: {
        height: '81vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default useStyles;