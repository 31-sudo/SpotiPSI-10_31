import { type Playlist } from '../../../data/playlist';
import useStyles from './PlaylistsPageStyles';

interface Props {
    playlists: Playlist[]
}

const PlaylistsPage = ({playlists}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songs}>
            <h2 className={classes.allSongsTitle}>פלייליסטים</h2>
        </div>
    );
}

export default PlaylistsPage;