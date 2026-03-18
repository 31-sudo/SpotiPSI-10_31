import { type Playlist } from '../../../data/playlist';
import useStyles from './PlaylistsPageStyles';
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
    playlists: Playlist[]
}

const PlaylistsPage = ({ playlists }: Props) => {
    const { classes } = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
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
                        <form onSubmit={handleSubmit} id='addPlaylist'>
                            <TextField className={classes.textLabel}
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
                    <Button className={classes.createButtonColor} type='submit' form='subscription-form'>
                        צור
                    </Button>
                </DialogActions>
            </Dialog>

            <List>
                {playlists.map((playlist, index) => (
                    <ListItem key={index} className={classes.playlist}>
                        <ListItemText>{playlist.name}</ListItemText>
                        <ListItemText>
                            <p className={classes.songsNumber}>{playlist.songsId.length} שירים</p>
                            </ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default PlaylistsPage;