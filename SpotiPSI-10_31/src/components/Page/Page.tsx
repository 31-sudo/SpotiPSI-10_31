import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainSection from './MainSection/MainSection';
import useStyles from './PageStyles';
import type { Song } from '../../data/song';

interface Props {
    currentSong: Song | undefined
}

const Page= ({currentSong}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.screen}>
            <Header />
            <MainSection />
            <Footer currentSong={currentSong} />
        </div>
    )
}

export default Page;