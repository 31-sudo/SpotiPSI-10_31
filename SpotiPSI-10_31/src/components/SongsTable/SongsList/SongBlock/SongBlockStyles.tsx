import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    song: {
        direction: 'ltr',
        borderBottom: '1px solid #545454',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    items: {
        display: 'flex',
        alignItems: 'center'
    },
    item: {
        color: '#B3B3B3'
    },
    playIcon: {
        color: '#9B59B6'
    },
    favorite: {
        color: '#9B59B6'
    }
}));

export default useStyles;