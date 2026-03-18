import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainSectionDiv: {
        backgroundColor: '#121212',
        height: '82vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));

export default useStyles;