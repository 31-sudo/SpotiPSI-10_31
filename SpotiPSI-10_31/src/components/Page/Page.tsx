import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainSection from './MainSection/MainSection';
import useStyles from './PageStyles';

const Page: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.screen}>
            <Header />
            <MainSection />
            <Footer />
        </div>
    )
}

export default Page;