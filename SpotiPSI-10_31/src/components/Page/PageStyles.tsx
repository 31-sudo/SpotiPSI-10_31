import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    screen: {
        direction: 'rtl',
        height: '100%',
        width: '100%',
        backgroundColor: '#313131',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
}));

export default useStyles;