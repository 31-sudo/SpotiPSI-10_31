import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import PageContent from './PageContent/PageContent';
import useStyles from './MainSectionStyles';

const MainSection: React.FC = () => {
    const { classes } = useStyles();

    const [ currentPage, setCurrentPage ] = useState<string>('songs')

    return (
        <div className={classes.mainSectionDiv}>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PageContent currentPage={currentPage} />
        </div>
    );
}

export default MainSection;