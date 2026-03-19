import { type Song } from '../../data/song';
import { type Playlist } from '../../data/playlist';
import AllSongs from './AllSongs/AllSongs';
import FavoritesPage from './FavoritesPage/FavoritesPage';
import PlaylistsPage from './PlaylistsPage/PlaylistsPage';
import useStyles from './SongsTableStyles';

interface Props {
    isLoading: boolean,
    error: string | undefined,
    allSongs: Song[],
    isLoadingFavorites: boolean,
    favoritesError: string | undefined,
    favoritesList: string[],
    isLoadingPlaylists: boolean,
    playlistsError: string | undefined,
    playlists: Playlist[],
    currentPage: string,
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addPlaylist(name: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void,
    setCurrentSong(song: Song): void,
    setQueue(songs: Song[]): void,
    queue: Song[],
}

const SongsTable = ({ isLoading, error, allSongs,
    isLoadingFavorites, favoritesError, favoritesList,
    isLoadingPlaylists, playlistsError, playlists,
    currentPage, addSongToFavorites, removeSongFromFavorites,
    addPlaylist, addSongToPlaylist, setCurrentSong ,setQueue, queue}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            {currentPage === 'songs' &&
                <div>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {!isLoading && !error &&
                        <AllSongs allSongs={allSongs} favoritesList={favoritesList} playlists={playlists}
                            addSongToFavorites={addSongToFavorites} removeSongFromFavorites={removeSongFromFavorites}
                            addSongToPlaylist={addSongToPlaylist} setCurrentSong={setCurrentSong} setQueue={setQueue} queue={queue}/>}
                </div>}

            {currentPage === 'favorites' &&
                <div>
                    {isLoadingFavorites && <p>Loading...</p>}
                    {favoritesError && <p>{error}</p>}
                    {!isLoadingFavorites && !favoritesError &&
                        <FavoritesPage allSongs={allSongs} favoritesList={favoritesList} playlists={playlists}
                            addSongToFavorites={addSongToFavorites} removeSongFromFavorites={removeSongFromFavorites}
                            addSongToPlaylist={addSongToPlaylist} setCurrentSong={setCurrentSong}  setQueue={setQueue} queue={queue}/>}
                </div>}

            {currentPage === 'playlists' &&
                <div>
                    {isLoadingPlaylists && <p>Loading...</p>}
                    {playlistsError && <p>{error}</p>}
                    {!isLoadingPlaylists && !playlistsError &&
                        <PlaylistsPage playlists={playlists} addPlaylist={addPlaylist}
                            allSongs={allSongs} favoritesList={favoritesList}
                            addSongToFavorites={addSongToFavorites}
                            removeSongFromFavorites={removeSongFromFavorites}
                            addSongToPlaylist={addSongToPlaylist} setCurrentSong={setCurrentSong} setQueue={setQueue} queue={queue}/>}
                </div>}
        </div>
    );
}

export default SongsTable;
