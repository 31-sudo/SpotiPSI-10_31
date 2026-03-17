import { type Song } from '../../data/types';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import useStyles from './AllSongsPageStyles';

interface Props {
    isLoading: boolean,
    error: string | undefined,
    allSongs: Song[]
}

const AllSongsPage = ({isLoading, error, allSongs}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            {!isLoading && !error && <h2 className={classes.allSongsTitle}>כל השירים</h2>}

            {isLoading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {!isLoading && !error && allSongs.map((song, index) => (
                <div key={index} className={classes.song}>
                    <div className={classes.items}>
                        <PlayArrowIcon className={classes.playIcon}></PlayArrowIcon>
                        <p>{song.name} - {song.artist}</p>
                    </div>
                    <div className={classes.items}>
                        <AddIcon></AddIcon>
                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllSongsPage;