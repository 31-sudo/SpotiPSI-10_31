import { useState } from 'react';
import { type Playlist } from '../../../data/playlist';
import AllPlaylistsPage from './AllPlaylistsPage/AllPlaylistsPage';
import SinglePlaylistPage from './SinglePlaylistPage/SinglePlaylistPage';
import type { Song } from '../../../data/song';

interface Props {
    playlists: Playlist[],
    addPlaylist(name: string): void,
    allSongs: Song[],
    favoritesList: string[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void,
    setCurrentSong(song: Song): void,
    setQueue(songs: Song[]): void,
    queue: Song[],
}

const PlaylistsPage = ({ playlists, addPlaylist,
    allSongs, favoritesList, addSongToFavorites,
    removeSongFromFavorites, addSongToPlaylist ,setCurrentSong, setQueue, queue}: Props) => {

    const [playlistId, setPlaylistId] = useState<string>('');
    const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>({ id: '', name: '', songIds: [] });

    return (
        <div>
            {playlistId === '' ?
                <AllPlaylistsPage
                    playlists={playlists}
                    addPlaylist={addPlaylist}
                    setPlaylistId={setPlaylistId}
                    setCurrentPlaylist={setCurrentPlaylist} 
                    /> :
                <SinglePlaylistPage
                    setPlaylistId={setPlaylistId}
                    currentPlaylist={currentPlaylist}
                    playlists={playlists}
                    allSongs={allSongs}
                    favoritesList={favoritesList}
                    addSongToFavorites={addSongToFavorites}
                    removeSongFromFavorites={removeSongFromFavorites}
                    addSongToPlaylist={addSongToPlaylist} 
                    setCurrentSong={setCurrentSong}
                    setCurrentPlaylist={setCurrentPlaylist}
                    setQueue={setQueue}
                    queue={queue}/>}
        </div>
    );
}

export default PlaylistsPage;