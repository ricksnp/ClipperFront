import React from 'react';
import '../../index.scss';
import ProfilePane from "../../components/ProfilePane/ProfilePane"
import {Feed} from './../../components/Feed/Feed'



const HomePage = () => {
    return(
        <div className="row wrapper GreyBackground noScroll HomePage Component">
            <ProfilePane/>
            <Feed/>
        </div>
    )
};

export default HomePage;