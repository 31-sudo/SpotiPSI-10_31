import { useEffect, useState } from 'react';
import { type Song } from '../../../data/song';
import type { Playlist } from '../../../data/playlist';
import SongsList from '../SongsList/SongsList';
import useStyles from './FavoritesPageStyle';

interface Props {
    allSongs: Song[],
    favoritesList: string[],
    playlists: Playlist[],
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void,
    addSongToPlaylist(playlistId: string, songId: string): void,
    setCurrentSong(song: Song): void
}

const FavoritesPage = ({ allSongs, favoritesList, playlists, addSongToFavorites,
    removeSongFromFavorites, addSongToPlaylist, setCurrentSong }: Props) => {
    const { classes } = useStyles();


    const [favoritesSongsList, setFavoritesSongsList] = useState<Song[]>(
        allSongs.filter(song => favoritesList.includes(song.id))
    );

    useEffect(() => {
        setFavoritesSongsList(allSongs.filter(song => favoritesList.includes(song.id)));
    }, [favoritesList]);


    return (
        <div>
            <h2 className={classes.favoritesTitle}>המועדפים שלי</h2>
            <SongsList allSongs={favoritesSongsList} favoritesList={favoritesList} playlists={playlists}
                addSongToFavorites={addSongToFavorites} removeSongFromFavorites={removeSongFromFavorites}
                addSongToPlaylist={addSongToPlaylist} setCurrentSong={setCurrentSong} />
        </div>
    );
}

export default FavoritesPage;