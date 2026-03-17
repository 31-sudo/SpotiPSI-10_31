import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => ({
    footer: {
        color: 'white',
        backgroundColor: "#1D1D1D",
        width:"100vw",
        height:"10vh",
        textAlign:"center",
        alignContent:"center",
        position:"fixed",
        bottom:"0vh"
    }
}));
export default useStyles;