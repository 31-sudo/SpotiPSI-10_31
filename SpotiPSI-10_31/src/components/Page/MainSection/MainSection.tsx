import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import SongsFetch from '../../SongsFetch/SongsFetch';
import useStyles from './MainSectionStyles';

const MainSection: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainSectionDiv}>
            <Sidebar />
            <SongsFetch />
        </div>
    );
}

export default MainSection;