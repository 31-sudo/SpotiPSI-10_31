import { type Song } from '../../../data/song';
import { List } from '@mui/material';
import useStyles from './SongsListStyles';
import SongBlock from './SongBlock/SongBlock';

interface Props {
    songs: Song[],
    setCurrentSong(songs: Song): void
}

const SongsList = ({ songs, setCurrentSong }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            <List>
                {songs.map((song, index) => (
                    <div key={index} onClick={() => {
                        setCurrentSong(song);
                    }}>
                        <SongBlock song={song} />
                    </div>
                ))}
            </List>
        </div>
    );
}

export default SongsList;