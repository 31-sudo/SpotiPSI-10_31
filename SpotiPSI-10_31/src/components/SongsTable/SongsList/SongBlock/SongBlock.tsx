import { type Song } from '../../../../data/song';
import type { Playlist } from '../../../../data/playlist';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {  ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import AddButtonPage from '../../AddButtonPage/AddButtonPage';
import useStyles from './SongBlockStyles';

interface Props {
    song: Song,
    favoritesList: string[],
    playlists: Playlist[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void
}

const SongBlock = ({ song, favoritesList, playlists, addSongToFavorites,
                removeSongFromFavorites, addSongToPlaylist }: Props) => {
    const { classes } = useStyles();

    return (
        <ListItem className={classes.song}>
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
    )
}

export default SongBlock;