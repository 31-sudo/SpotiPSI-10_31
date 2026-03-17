import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    headerDiv: {
        direction: 'rtl',
        height: '8vh',
        width: '100%',
        backgroundColor: '#313131',
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        marginRight: '25px',
        fontSize: '20px',
        color: '#9355B2',
        display: 'flex',
        alignItems: 'center'
    }
}));

export default useStyles;