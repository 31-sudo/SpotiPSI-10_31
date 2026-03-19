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
    setCurrentSong(song: Song): void
}

const AllSongs = ({ allSongs, favoritesList, playlists, addSongToFavorites,
    removeSongFromFavorites, addSongToPlaylist, setCurrentSong }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            <h2 className={classes.allSongsTitle}>כל השירים</h2>
            <SongsList allSongs={allSongs} favoritesList={favoritesList} playlists={playlists}
                       addSongToFavorites={addSongToFavorites} removeSongFromFavorites={removeSongFromFavorites}
                       addSongToPlaylist={addSongToPlaylist} setCurrentSong={setCurrentSong} />
        </div>
    );
}

export default AllSongs;