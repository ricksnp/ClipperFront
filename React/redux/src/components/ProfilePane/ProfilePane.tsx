import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IUser } from '../../_reducers/UserReducer';
import { selectCurrentUser } from '../LoginComponent/LoginComponent';
import userPic from './../../Assets/Liked-Dark-Theme.png'
import './ProfilePane.scss'

export default function LandingPane(){
    const currentUserData:IUser|null = useSelector(selectCurrentUser);
    const you  = currentUserData as IUser;
    
    const [isEditing, setEditing] = useState(false);
    const [bioState, setBioState] = useState(you.bio);
    const [fNameState, setFNameState] = useState(you.firstName);
    const [lNameState, setLNameState] = useState(you.lastName);
    const [emailState, setEmailState] = useState(you.email);
    
    let pfpLink:string;
    let biography:string;
    let fName:string;
    let lName:string;

    if(currentUserData == null){
        pfpLink = userPic;
        biography = "";
        fName = "Clipper";
        lName = "User";
    } else{
        const you:IUser = (currentUserData as IUser);

        pfpLink = you.pfpLink;
        biography = you.bio;
        fName = you.firstName;
        lName = you.lastName;
    }



    return(
        <div className ="BlueBackground col-md-3 d-none d-md-block" id = 'outerDiv'>
            <br/>
            <br/>
            <br/>
            <div>
                <a href= '/login'><button type="button" className="btn btn-light" id="backButton">Logout</button></a>
                <p id='pTag'>
                    {isEditing ?
                        <span>Editing!</span> :
                        <>{currentUserData ?
                            <button id="clipper-info-edit-begin" onClick={() => setEditing(true)}>Edit Your Info</button> :
                        <></>
                        }</>
                    }
                </p>
                <img src={pfpLink} id = 'imgTag' className = "Logo-Large"/>
                <h2 id = 'h2Tag'>{fName + " " + lName}</h2>
            </div>
            <br/>
            {isEditing ? <form className='clipper-profile-pane-info' id='clipper-user-editing-form'>
                <div className="clipper-user-editing-form-element">
                    <label id="clipper-pfp-upload-wrapper" className="btn">Upload Profile Picture
                        <input type="file" accept="image/*" id="clipper-pfp-upload"/>
                    </label>
                </div>

                <div className="clipper-user-editing-form-element">
                    <span>Edit your bio:</span>
                    <textarea className="form-control" rows={4}></textarea>
                </div>
                <button onClick={() => setEditing(false)}>Cease Editing!</button>
            </form>
            :
            <div className='clipper-profile-pane-info'>
                <strong>Bio:</strong>
                {currentUserData ? biography : <><p>Welcome to <strong>Clipper</strong>, the worlds newest social network.</p>
                    <p>Like our namesake sailing vessels of old, Clipper is revolutionizing the way that
                                people across the world connect. We simplify and unify the social network
                        experience by letting anyone add to <i>The Feed</i>. All you need to do is
                        <Link to="/signup" className="clipper-landing-link"> create an account</Link> and <Link to="/login" className="clipper-landing-link">login</Link>!</p></>}
                <br/>
                <strong>Most Recent Post:</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            }
        </div>
    )
}