import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from './SinglePlaylistPageStyles';
import type { Playlist } from '../../../../data/playlist';

interface Props {
    setPlaylistId(id: string): void,
    currentPlaylist: Playlist
}

const SinglePlaylistPage = ({ setPlaylistId, currentPlaylist }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.playlist}>
            <div className={classes.playlistHeader}>
                <h2 className={classes.headerItem}>{currentPlaylist.name}</h2>
                <div onClick={() => setPlaylistId('')}>
                    <ArrowBackIcon className={classes.headerItem}></ArrowBackIcon>
                </div>
            </div>
        </div>
    );
}

export default SinglePlaylistPage;