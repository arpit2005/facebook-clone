import React from 'react';
import LeftPanel from '../components/Left Panel';
import MainSection from '../components/Main Section';
import RightPanel from '../components/Right Panel';

function Dash({ device, page }) {
    return (
        <div className="dashboard">
            { device === 'lg' ? <LeftPanel page={page} /> : ''}
            <MainSection page={page} device={device} />
            { device === 'lg' ? <RightPanel /> : ''}
        </div>
    );
};

export default Dash;
