import React from 'react';
import '../../index.scss';
import UserProfilePane from "../../components/ProfilePane/UserProfilePane";
import {Feed} from './../../components/Feed/Feed';

const UserPage = () => {
    
    return(
        <div className="row wrapper GreyBackground noScroll">
            <UserProfilePane/>
            <Feed/>
        </div>
    )
};

export default UserPage;