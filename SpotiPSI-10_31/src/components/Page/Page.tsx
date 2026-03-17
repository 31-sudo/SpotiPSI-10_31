import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import useStyles from './PageStyles';

const Page: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.screen}>
            <Header />
            <Footer />
        </div>
    )
}

export default Page;