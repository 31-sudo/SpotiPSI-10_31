import { useState } from 'react';
import { type Playlist } from '../../../data/playlist';
import AllPlaylistsPage from './AllPlaylistsPage/AllPlaylistsPage';
import SinglePlaylistPage from './SinglePlaylistPage/SinglePlaylistPage';

interface Props {
    playlists: Playlist[],
    addPlaylist(name: string): void
}

const PlaylistsPage = ({ playlists, addPlaylist }: Props) => {

    const [ playlistId, setPlaylistId ] = useState<string>('');
    const [ currentPlaylist, setCurrentPlaylist ] = useState<Playlist>({id: '', name: '', songIds: []});

    return (
        <div>
            {playlistId === '' ?
             <AllPlaylistsPage
                              playlists={playlists}
                              addPlaylist={addPlaylist}
                              setPlaylistId={setPlaylistId}
                              setCurrentPlaylist={setCurrentPlaylist}/> :
             <SinglePlaylistPage
                                setPlaylistId={setPlaylistId}
                                currentPlaylist={currentPlaylist}/>}
        </div>
    );
}

export default PlaylistsPage;