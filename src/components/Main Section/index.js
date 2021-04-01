import React from 'react';
import HomeMainSection from './home page';

function MainSection({ device, page }) {
    switch (page) {
        case 'home': return <HomeMainSection device={device} />;
        default: return '';
    }
};

export default MainSection;
