import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from './SidebarStyles';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const { classes } = useStyles();
    
    const [ chosen, setChosen ] = useState<string>('')

    return (
        <div className={classes.mainSectionDiv}>
            <Link to="/api/songs">
                <div onClick={() => setChosen('all songs')}
                    className={chosen === 'all songs' ? classes.chosenOption : classes.option}>
                    <HomeIcon></HomeIcon>
                    <p>כל השירים</p>
                </div>
            </Link>
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