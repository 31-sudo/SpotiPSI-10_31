import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from './SidebarStyles';
import { Link } from 'react-router-dom';

interface Props {
    currentPage: string,
    setCurrentPage(page: string): void
}

const Sidebar = ({currentPage, setCurrentPage}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainSectionDiv}>
            <Link to="/api/songs" className={classes.link}>
                <div onClick={() => setCurrentPage('songs')}
                    className={currentPage === 'songs' ? classes.chosenOption : classes.option}>
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