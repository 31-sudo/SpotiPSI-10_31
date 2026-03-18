import { type Song } from '../../../data/song';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import useStyles from './AllSongsStyles';
import AddButtonPage from '../AddButton/AddButtonPage';
import type { Playlist } from '../../../data/playlist';

interface Props {
    allSongs: Song[],
    favoritesList: string[],
    playlists: Playlist[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void
}

const AllSongs = ({allSongs, favoritesList, playlists, addSongToFavorites, removeSongFromFavorites, addSongToPlaylist}: Props) => {
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
                                <AddButtonPage playlists={playlists} currentSong={song} addSongToPlaylist={addSongToPlaylist} />
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