import useStyles from "./FooterStyles";
import Sslider from "./Slider/Slider";
import type { Song } from "../../../data/song";

interface Props {
    currentSong: Song | undefined,
    setCurrentSong(song: Song): void,
    queue: Song[],
}

const Footer = ({currentSong, setCurrentSong, queue}: Props) => {
    const { classes } = useStyles();
    return (
        <div className={classes.footer}>
            <h5>{currentSong ? currentSong.name : 'Song Name'}</h5>
            <p className={classes.artist}>{currentSong ? currentSong.artist : 'Artist'}</p>
            <div className={classes.buttonsAndSlider} ><Sslider currentSong={currentSong} setCurrentSong={setCurrentSong} queue={queue}/>
            </div>
        </div>
    );
}

export default Footer;