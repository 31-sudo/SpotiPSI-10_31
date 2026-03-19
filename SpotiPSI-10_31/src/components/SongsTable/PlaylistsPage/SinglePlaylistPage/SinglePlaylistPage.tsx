import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from './SinglePlaylistPageStyles';
import SongsList from '../../SongsList/SongsList';
import type { Playlist } from '../../../../data/playlist';
import { useState } from 'react';
import type { Song } from '../../../../data/song';

interface Props {
    setPlaylistId(id: string): void,
    currentPlaylist: Playlist,
    allSongs: Song[],
    favoritesList: string[],
    playlists: Playlist[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void,
    setCurrentSong(song: Song): void
}

const SinglePlaylistPage = ({ setPlaylistId, currentPlaylist,
                              allSongs, favoritesList,
                              playlists, addSongToFavorites,
                              removeSongFromFavorites, addSongToPlaylist,
                              setCurrentSong}: Props,) => {
    const { classes } = useStyles();

    const [ playlistSongs ] = useState<Song[]>(allSongs.filter((song) => currentPlaylist.songIds.includes(song.id)))

    return (
        <div className={classes.playlist}>
            <div className={classes.playlistHeader}>
                <h2 className={classes.headerItem}>{currentPlaylist.name}</h2>
                <div onClick={() => setPlaylistId('')}>
                    <ArrowBackIcon className={classes.headerItem}></ArrowBackIcon>
                </div>
            </div>
            <SongsList allSongs={playlistSongs} favoritesList={favoritesList} playlists={playlists}
                addSongToFavorites={addSongToFavorites} removeSongFromFavorites={removeSongFromFavorites}
                addSongToPlaylist={addSongToPlaylist} setCurrentSong={setCurrentSong} />
        </div>
    );
}

export default SinglePlaylistPage;