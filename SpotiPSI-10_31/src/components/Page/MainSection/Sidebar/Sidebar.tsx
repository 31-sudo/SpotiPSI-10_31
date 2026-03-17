import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from './SidebarStyles';

const Sidebar: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainSectionDiv}>
            <div className={classes.option}>
                <HomeIcon></HomeIcon>
                <p>כל השירים</p>
            </div>
            <div className={classes.option}>
                <LibraryMusicIcon></LibraryMusicIcon>
                <p>פלייליסטים</p>
            </div>
            <div className={classes.option}>
                <FavoriteIcon></FavoriteIcon>
                <p>מועדפים</p>
            </div>
        </div>
    )
}

export default Sidebar;