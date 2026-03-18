import { useState } from 'react';
import { type Song } from '../../../data/song';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import useStyles from './FavoritesPageStyle';

interface Props {
    allSongs: Song[],
    favoritesList: string[],
    removeSongFromFavorites(id: string): void
}

const FavoritesPage = ({allSongs, favoritesList, removeSongFromFavorites}: Props) => {
    const { classes } = useStyles();

    const [ favoritesSongsList ] = useState<Song[]>(
        allSongs.filter(song => favoritesList.includes(song.id))
    );

    return (
        <div className={classes.songs}>
            <h2 className={classes.allSongsTitle}>המועדפים שלי</h2>
            <List>
                {favoritesSongsList.map((song, index) => (
                    <ListItem key={index} className={classes.song}>
                        <div className={classes.items}>
                            <ListItemIcon>
                                <PlayArrowIcon className={classes.playIcon}></PlayArrowIcon>
                            </ListItemIcon>
                            <ListItemText>{song.name} - {song.artist}</ListItemText>
                        </div>
                        <div className={classes.items}>
                            <ListItemIcon>
                                <AddIcon className={classes.item} />
                            </ListItemIcon>
                            <ListItemIcon>
                                <IconButton onClick={() => removeSongFromFavorites(song.id)}>
                                    <FavoriteIcon className={classes.favorite} />
                                </IconButton>
                            </ListItemIcon>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default FavoritesPage;