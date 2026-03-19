import { useEffect, useState } from 'react';
import { type Song } from '../../../data/song';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import type { Playlist } from '../../../data/playlist';
import AddButtonPage from '../AddButtonPage/AddButtonPage';
import useStyles from './FavoritesPageStyle';

interface Props {
    allSongs: Song[],
    favoritesList: string[],
    playlists: Playlist[],
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void
}

const FavoritesPage = ({ allSongs, favoritesList, playlists, removeSongFromFavorites, addSongToPlaylist }: Props) => {
    const { classes } = useStyles();


    const [favoritesSongsList, setFavoritesSongsList] = useState<Song[]>(
        allSongs.filter(song => favoritesList.includes(song.id))
    );

    useEffect(() => {
        setFavoritesSongsList(allSongs.filter(song => favoritesList.includes(song.id)));
    }, [favoritesList]);


    return (
        <div className={classes.songs}>
            <h2 className={classes.allSongsTitle}>המועדפים שלי</h2>
            <List>
                {favoritesSongsList.map((song, index) => (
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
                                <IconButton onClick={() => removeSongFromFavorites(song.id)}>
                                    <FavoriteIcon className={classes.favorite} />
                                </IconButton>
                            </ListItemIcon>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default FavoritesPage;