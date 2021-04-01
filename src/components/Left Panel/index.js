import React from 'react';
import HomeSideBar from './home page';
import WatchSideBar from './watch page';
import FriendsSideBar from './friends page';

function LeftPanel({ page }) {
    switch (page) {
        case 'home': return <HomeSideBar />;
        case 'watch': return <WatchSideBar />;
        case 'friends': return <FriendsSideBar />;
        default: return '';
    }
};

export default LeftPanel;
