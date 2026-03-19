import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainSection from './MainSection/MainSection';
import useStyles from './PageStyles';
import type { Song } from '../../data/song';

interface Props {
    currentSong: Song | undefined,
    setCurrentSong(song: Song): void,
    queue: Song[],
}

const Page= ({currentSong, setCurrentSong,queue}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.screen}>
            <Header />
            <MainSection />
            <Footer currentSong={currentSong} setCurrentSong={setCurrentSong} queue={queue}/>
        </div>
    )
}

export default Page;