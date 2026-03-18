import { type Song } from '../../../data/song';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import useStyles from './AllSongsStyles';

interface Props {
    allSongs: Song[],
    favoritesList: string[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void
}

const AllSongs = ({allSongs, favoritesList, addSongToFavorites, removeSongFromFavorites}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            <h2 className={classes.allSongsTitle}>כל השירים</h2>
            <List>
                {allSongs.map((song, index) => (
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
                                {(!favoritesList.includes(song.id)) ?
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

export default AllSongs;