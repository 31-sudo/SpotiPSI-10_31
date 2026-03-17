import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import SongsFetch from '../SongsFetch/SongsFetch';
import useStyles from './MainSectionStyles';
import { Outlet } from "react-router-dom";

const MainSection: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainSectionDiv}>
            <Sidebar />
            <Outlet/>
        </div>
    );
}

export default MainSection;