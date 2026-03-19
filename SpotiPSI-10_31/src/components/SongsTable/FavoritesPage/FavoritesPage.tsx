import { useEffect, useState } from 'react';
import { type Song } from '../../../data/song';
import SongsList from '../SongsList/SongsList';
import useStyles from './FavoritesPageStyle';
import useSongsFetch from '../../useSongsFetch/useSongsFetch';

interface Props {
    setCurrentSong(song: Song): void,
    setQueue(songs: Song[]): void
}

const FavoritesPage = ({ setCurrentSong, setQueue }: Props) => {
    const { classes } = useStyles();

    const { songsList, favoritesList } = useSongsFetch();

    const [favoritesSongsList, setFavoritesSongsList] = useState<Song[]>(
        songsList.filter(song => favoritesList.includes(song.id))
    );

    useEffect(() => {
        setFavoritesSongsList(songsList.filter(song => favoritesList.includes(song.id)));
        console.log("favorites" + favoritesList)
        setQueue(songsList.filter(song => favoritesList.includes(song.id)))
    }, [favoritesList]);

    return (
        <div>
            <h2 className={classes.favoritesTitle}>המועדפים שלי</h2>
            <SongsList songs={favoritesSongsList} setCurrentSong={setCurrentSong} />
        </div>
    );
}

export default FavoritesPage;