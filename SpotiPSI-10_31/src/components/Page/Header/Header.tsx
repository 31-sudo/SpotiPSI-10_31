import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import useStyles from './HeaderStyles';

const Header: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.headerDiv}>
            <div className={classes.logo}>
                <MusicNoteIcon></MusicNoteIcon>
                <h4>SpotiPSI</h4>
            </div>
        </div>
    );
}

export default Header;