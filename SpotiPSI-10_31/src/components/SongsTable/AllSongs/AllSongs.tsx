import { type Song } from '../../../data/song';
import SongsList from '../SongsList/SongsList';
import useStyles from './AllSongsStyles';
import useSongsFetch from '../../useSongsFetch/useSongsFetch';
import { useEffect } from 'react';

interface Props {
    setQueue(songs: Song[]): void,
    setCurrentSong(songs: Song): void
}

const AllSongs = ({ setQueue, setCurrentSong }: Props) => {
    const { classes } = useStyles();

    const { songsList, isLoading, error } = useSongsFetch();

    useEffect(() => {
        setQueue(songsList);
    }, []);
    
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error &&
                <div className={classes.songs}>
                    <h2 className={classes.allSongsTitle}>כל השירים</h2>
                    <SongsList songs={songsList} setCurrentSong={setCurrentSong} />
                </div>
            }
        </div>
    );
}

export default AllSongs;