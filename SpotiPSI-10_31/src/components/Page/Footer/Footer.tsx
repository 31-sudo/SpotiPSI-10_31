import useStyles from "./FooterStyles";
import Sslider from "./Slider/Slider";
import type { Song } from "../../../data/song";

interface Props {
    currentSong: Song | undefined
}

const Footer = ({currentSong}: Props) => {
    const { classes } = useStyles();
    return (
        <div className={classes.footer}>
            <h5>{currentSong ? currentSong.name : 'Song Name'}</h5>
            <p className={classes.artist}>{currentSong ? currentSong.artist : 'Artist'}</p>
            <div className={classes.buttonsAndSlider}><Sslider/>
            </div>
        </div>
    );
}

export default Footer;