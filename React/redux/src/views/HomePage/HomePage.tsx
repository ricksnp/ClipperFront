import React from 'react';
import '../../index.css';
import ProfilePane from "../../components/ProfilePane/ProfilePane"
import {Feed} from './../../components/Feed/Feed'



const HomePage = () => {
    return(
        <div className="row wrapper GreyBackground noScroll">
            <ProfilePane/>
            <Feed/>
        </div>
    )
};

export default HomePage;