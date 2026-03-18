import { type Song } from '../../data/types';
import AllSongs from './AllSongs/AllSongs';
import FavoritesPage from './FavoritesPage/FavoritesPage';
import useStyles from './SongsTableStyles';

interface Props {
    isLoading: boolean,
    error: string | undefined,
    allSongs: Song[],
    isLoadingFavorites: boolean,
    favoritesError: string | undefined,
    favoritesList: string[],
    currentPage: string,
    addSongToFavorites(id: string): void,
    removeSongFromFavorites(id: string): void
}

const SongsTable = ({isLoading, error, allSongs, isLoadingFavorites,
                     favoritesError, favoritesList, currentPage, addSongToFavorites, removeSongFromFavorites}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            {currentPage === 'songs' && 
            <div>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!isLoading && !error && 
                <AllSongs allSongs={allSongs} favoritesList={favoritesList}
                          addSongToFavorites={addSongToFavorites} removeSongFromFavorites={removeSongFromFavorites}/>}
            </div>}

            {currentPage === 'favorites' && 
            <div>
                {isLoadingFavorites && <p>Loading...</p>}
                {favoritesError && <p>{error}</p>}
                {!isLoadingFavorites && !favoritesError && 
                <FavoritesPage allSongs={allSongs} favoritesList={favoritesList}
                          removeSongFromFavorites={removeSongFromFavorites}/>}
            </div>}
        </div>
    );
}

export default SongsTable;