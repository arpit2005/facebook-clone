import React from 'react'
import '../styles/Dash.css'
import LeftPanel from '../components/Left Panel'
import MainSection from '../components/Main Section'
import RightPanel from '../components/Right Panel'

function Dash() {
    return (
        <div className="dashboard">
            <LeftPanel />
            <MainSection />
            <RightPanel />
        </div>
    )
}

export default Dash
