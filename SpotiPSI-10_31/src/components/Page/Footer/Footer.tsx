import useStyles from "./FooterStyles";
import Sslider from "./Slider/Slider";

const Footer: React.FC = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.footer}>
            <h5>songName</h5>
            <p className={classes.artist}>artist</p>
            <div className={classes.buttonsAndSlider}><Sslider/>
            </div>
        </div>
    );
}

export default Footer;