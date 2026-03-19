import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import useStyles from './AddButtonPageStyle';
import type { Playlist } from "../../../data/playlist";
import type { Song } from "../../../data/song";

interface Props {
    playlists: Playlist[],
    currentSong: Song,
    addSongToPlaylist(playlistId: string, songId: string): void
}

const AddButtonPage = ({ playlists, currentSong, addSongToPlaylist }: Props) => {
    const { classes } = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                       onClick={handleClick}>
                <AddIcon
                         className={classes.item} />
            </IconButton>
            <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                list: {
                    'aria-labelledby': 'basic-button',
                }}}>
                    {playlists.map((playlist, index) => 
                                        <MenuItem
                                                 key={index}
                                                 onClick={() => {
                                                    addSongToPlaylist(playlist.id, currentSong.id)
                                                    handleClose();
                                                 }}>
                                                    {playlist.name}
                                        </MenuItem>
                    )}
            </Menu>
        </div>
    );
}

export default AddButtonPage;