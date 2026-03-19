import { type Song } from '../../../data/song';
import SongsList from '../SongsList/SongsList';
import useStyles from './AllSongsStyles';
import type { Playlist } from '../../../data/playlist';

interface Props {
    allSongs: Song[],
    favoritesList: string[],
    playlists: Playlist[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void,
    setCurrentSong(song: Song): void,
    
    setQueue(songs: Song[]): void,
    queue: Song[],
}

const AllSongs = ({ allSongs, favoritesList, playlists, addSongToFavorites,
    removeSongFromFavorites, addSongToPlaylist, setCurrentSong ,setQueue,queue}: Props) => {
    const { classes } = useStyles();
    setQueue(allSongs)
    return (
        <div className={classes.songs}>
            <h2 className={classes.allSongsTitle}>כל השירים</h2>
            <SongsList allSongs={queue} favoritesList={favoritesList} playlists={playlists}
                       addSongToFavorites={addSongToFavorites} removeSongFromFavorites={removeSongFromFavorites}
                       addSongToPlaylist={addSongToPlaylist} setCurrentSong={setCurrentSong} />
        </div>
    );
}

export default AllSongs;