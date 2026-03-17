import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainSectionDiv: {
        backgroundColor: '#121212',
        borderLeft: '1px solid #B3B3B3',
        height: '82vh',
        width: '13vw',
        display: 'flex',
        flexDirection: 'column'
    },
    option: {
        color: '#B3B3B3',
        padding: '15px',
        display: 'flex',
        gap: '25px',
        '&:hover': {
            backgroundColor: '#2D2032'
        }
    }
}));

export default useStyles;