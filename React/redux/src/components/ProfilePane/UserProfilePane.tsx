import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IUser } from '../../_reducers/UserReducer';
import { selectCurrentUser } from '../LoginComponent/LoginComponent';
import userPic from './../../Assets/Liked-Dark-Theme.png'
import './ProfilePane.scss'

export default function UserProfilePane(){
    let pfpLink:string;
    let biography:string|Element;
    
    const currentUserData:IUser|null = useSelector(selectCurrentUser);

    if(currentUserData == null){
        pfpLink = userPic;
        biography = "";
    } else{
        const you:IUser = (currentUserData as IUser);

        pfpLink = you.pfpLink;
        biography = you.bio;
    }

    return(
        <div className ="BlueBackground col-md-3 d-none d-md-block" id = 'outerDiv'>
            <br/>
            <br/>
            <br/>
            <div>
                <Link to="/home"><button type="button" className="btn btn-light" id="backButton">Back</button></Link>
                <img src={pfpLink} id = 'imgTag' className = "Logo-Large"/>
                <h2 id = 'h2Tag'>Clipper User</h2>
            </div>
            <br/>
            <div id = 'div1'>
                <strong>Bio:</strong>
                {biography ? biography : <><p>Welcome to <strong>Clipper</strong>, the worlds newest social network.</p>
                    <p>Like our namesake sailing vessels of old, Clipper is revolutionizing the way that
                                people across the world connect.We simplify and unify the social network
                        experience by letting anyone add to <i>The Feed</i>.All you need to do is
                        <Link to="/signup" className="clipper-landing-link"> create an account</Link> and <Link to="/login" className="clipper-landing-link">login</Link>!</p></>}
                <br/>
                <strong>Most Recent Post:</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
    )
}