import { type Song } from '../../../../data/song';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {  ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import AddButtonPage from '../../AddButtonPage/AddButtonPage';
import useStyles from './SongBlockStyles';
import useSongsFetch from '../../../useSongsFetch/useSongsFetch';

interface Props {
    song: Song,
}

const SongBlock = ({ song }: Props) => {
    const { classes } = useStyles();

    const { favoritesList, playlists, addSongTofavorites, removeSongFromfavorites, addSongToPlaylist, fetchFavorites } = useSongsFetch();

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
                        <IconButton onClick={() => addSongTofavorites(song.id)}>
                            <FavoriteBorderOutlinedIcon className={classes.item} />
                        </IconButton> :
                        <IconButton onClick={() => {removeSongFromfavorites(song.id); fetchFavorites()}}>
                            <FavoriteIcon className={classes.favorite} />
                        </IconButton>}
                </ListItemIcon>
            </div>
        </ListItem>
    )
}

export default SongBlock;