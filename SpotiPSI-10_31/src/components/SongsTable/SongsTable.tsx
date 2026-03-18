import { type Song } from '../../data/types';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import useStyles from './SongsTableStyles';

interface Props {
    isLoading: boolean,
    error: string | undefined,
    allSongs: Song[],
    isLoadingFavorites: boolean,
    favoritesError: string | undefined,
    favoritesList: string[],
    currentPage: string,
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void
}

const SongsTable = ({isLoading, error, allSongs, isLoadingFavorites,
                     favoritesError, favoritesList, currentPage, addSongToFavorites, removeSongFromFavorites}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            {!isLoading && !error && <h2 className={classes.allSongsTitle}>כל השירים</h2>}

            {isLoading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            <List>
                {!isLoading && !error && allSongs.map((song, index) => (
                        <ListItem key={index} className={classes.song}>
                        <div className={classes.items}>
                            <ListItemIcon>
                                <PlayArrowIcon className={classes.playIcon}></PlayArrowIcon>
                            </ListItemIcon>
                            <ListItemText>{song.name} - {song.artist}</ListItemText>
                        </div>
                        <div className={classes.items}>
                            <ListItemIcon>
                                <AddIcon className={classes.item} />
                            </ListItemIcon>
                            <ListItemIcon>
                                {(!isLoadingFavorites && !favoritesError &&
                                !favoritesList.includes(song.id)) ?
                                <IconButton onClick={() => addSongToFavorites(song.id)}>
                                    <FavoriteBorderOutlinedIcon className={classes.item} />
                                </IconButton> :
                                <IconButton onClick={() => removeSongFromFavorites(song.id)}>
                                    <FavoriteIcon className={classes.favorite} />
                                </IconButton>}
                            </ListItemIcon>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default SongsTable;