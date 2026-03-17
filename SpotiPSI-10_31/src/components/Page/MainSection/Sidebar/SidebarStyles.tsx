import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainSectionDiv: {
        backgroundColor: '#121212',
        borderLeft: '1px solid #B3B3B3',
        height: '100%',
        width: '13%',
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
    },
    chosenOption: {
        color: '#B3B3B3',
        backgroundColor: '#2D2032',
        padding: '15px',
        display: 'flex',
        gap: '25px',
    }
}));

export default useStyles;