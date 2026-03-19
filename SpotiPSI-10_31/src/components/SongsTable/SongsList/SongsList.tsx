import { type Song } from '../../../data/song';
import { List } from '@mui/material';
import useStyles from './SongsListStyles';
import type { Playlist } from '../../../data/playlist';
import SongBlock from './SongBlock/SongBlock';

interface Props {
    allSongs: Song[],
    favoritesList: string[],
    playlists: Playlist[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void,
    setCurrentSong(song: Song): void
}

const SongsList = ({ allSongs, favoritesList, playlists, addSongToFavorites,
    removeSongFromFavorites, addSongToPlaylist, setCurrentSong }: Props) => {
    const { classes } = useStyles();


    return (
        <div className={classes.songs}>
            <List>
                {allSongs.map((song, index) => (
                    <div key={index} onClick={() => {
                        setCurrentSong(song);
                    }}>
                        <SongBlock song={song} favoritesList={favoritesList} addSongToFavorites={addSongToFavorites}
                                   playlists={playlists} removeSongFromFavorites={removeSongFromFavorites}
                                   addSongToPlaylist={addSongToPlaylist} />
                    </div>
                ))}
            </List>
        </div>
    );
}

export default SongsList;