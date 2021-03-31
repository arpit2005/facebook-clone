import React from 'react'
import LeftPanel from '../components/Left Panel'
import MainSection from '../components/Main Section'
import RightPanel from '../components/Right Panel'

function Dash({ device }) {
    return (
        <div className="dashboard">
            { device === 'lg' ? <LeftPanel /> : '' }
            <MainSection device={device} />
            { device === 'lg' ? <RightPanel /> : '' }
        </div>
    )
}

export default Dash
