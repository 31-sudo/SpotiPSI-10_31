import { useState } from 'react';
import { type Playlist } from '../../../../data/playlist';
import useStyles from './AllPlaylistsPageStyles';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { List, ListItem, ListItemText } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
    playlists: Playlist[],
    addPlaylist(name: string): void,
    setPlaylistId(id: string): void,
    setCurrentPlaylist(playlist: Playlist): void,
}

const AllPlaylistsPage = ({ playlists, addPlaylist, setPlaylistId, setCurrentPlaylist }: Props) => {
    const { classes } = useStyles();

    const [open, setOpen] = React.useState(false);
    const [playlistName, setPlaylistName] = useState<string>('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.playlists}>
            <div className={classes.plalistsHeader}>
                <h2 className={classes.allPlaylistsTitle}>הפלייליסטים שלי</h2>

                <Button variant='outlined' className={classes.button} onClick={handleClickOpen}>
                    <AddIcon />
                    <p>צור פלייליסט</p>
                </Button>
            </div>

            <Dialog className={classes.dialog} open={open} onClose={handleClose}>
                <DialogTitle>יצירת פלייליסט חדש</DialogTitle>
                <DialogContent>
                    <form id='addPlaylist'>
                        <TextField
                            onChange={(event) => { setPlaylistName(event.target.value) }}
                            value={playlistName}
                            className={classes.textField}
                            autoFocus
                            required
                            margin='dense'
                            id='playlistName'
                            name='playlistName'
                            label='שם הפלייליסט'
                            type='text'
                            fullWidth
                            variant='standard'
                        />
                    </form>
                </DialogContent>
                <DialogActions>

                    <Button className={classes.cancelButtonColor} onClick={handleClose}>
                        ביטול
                    </Button>
                    <Button
                        onClick={() => {
                            addPlaylist(playlistName);
                            setPlaylistName('');
                            handleClose();
                        }}
                        className={classes.createButtonColor}
                        type='submit'
                        form='subscription-form'>
                        צור
                    </Button>
                </DialogActions>
            </Dialog>

            <List>
                {playlists.map((playlist, index) => (
                    <div key={index} onClick={() => {
                        setPlaylistId(playlist.id)
                        setCurrentPlaylist(playlist)
                    }}>
                        <ListItem className={classes.playlist}>
                            <ListItemText>{playlist.name}</ListItemText>
                            <ListItemText>
                                <p className={classes.songsNumber}>{playlist.songIds.length} שירים</p>
                            </ListItemText>
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    );
}

export default AllPlaylistsPage;