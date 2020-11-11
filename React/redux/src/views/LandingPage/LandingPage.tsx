import React from 'react';
import '../../index.scss';
import './LandingPage.scss';
import { LandingPane } from '../../components/LandingPane/LandingPane'
import { Feed } from '../../components/Feed/Feed'

export default function LandingPage() {
    return (
        <div className="row wrapper GreyBackground noScroll">
            <LandingPane />
            <Feed />
        </div>
    )
};