import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import PageContent from './PageContent/PageContent';
import useStyles from './MainSectionStyles';

const MainSection: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainSectionDiv}>
            <Sidebar />
            <PageContent />
        </div>
    );
}

export default MainSection;