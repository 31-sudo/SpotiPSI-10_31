import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => ({
    footer: {
        color: 'white',
        backgroundColor: "#1D1D1D",
        width:"100vw",
        height:"20vh",
        textAlign:"center",
        alignContent:"center",
        position:"fixed",
        bottom:"0vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    Button:{
        color: "white"
    },
    artist:{
        fontSize:"2vh"
    },
    buttonsAndSlider:{
        width:"95%"
    }
}));
export default useStyles;