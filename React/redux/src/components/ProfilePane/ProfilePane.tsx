import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../_reducers';
import { IUser } from '../../_reducers/UserReducer';
import { axiosInstance } from '../../_util/axiosConfig';
import { selectCurrentUser } from '../LoginComponent/LoginComponent';
import userPic from './../../Assets/Liked-Dark-Theme.png'
import './ProfilePane.scss';

export const selectViewedUser = (state:IRootState) => state.userState.viewedUser;

export default function LandingPane(){
    const dispatch = useDispatch();
    
    const currentUserData:IUser|null = useSelector(selectCurrentUser);
    const currentUser:IUser = currentUserData as IUser;

    const viewedUserData:IUser|null = useSelector(selectViewedUser);
    const viewedUser:IUser = viewedUserData as IUser;
    
    let isUsersOwnProfile:boolean = false;

    const [isEditing, setEditing] = useState(false);

    const [bioState, setBioState] = useState(viewedUser.bio);
    const [fNameState, setFNameState] = useState(viewedUser.firstName);
    const [lNameState, setLNameState] = useState(viewedUser.lastName);
    // const [emailState, setEmailState] = useState(viewedUser.email);

    const [uploadedImage, setUploadedImage] = useState(new FormData());
    
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
        pfpLink = viewedUser.pfpLink;
        biography = viewedUser.bio;
        fName = viewedUser.firstName;
        lName = viewedUser.lastName;

        isUsersOwnProfile = (currentUserData != null && viewedUser.id == currentUser.id);
    }

    const submitUserChanges = (event:any) => {
        event.preventDefault();
        
        const editedUser:IUser = {
            ... currentUser,
            bio: bioState,
            firstName: fNameState,
            lastName: lNameState
        }

        // console.log("Edited user made!");

        if(currentUser.bio == editedUser.bio
            && currentUser.firstName == editedUser.firstName
            && currentUser.lastName == editedUser.lastName)
            return;

        // console.log("Dispatching!");
        
        dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
            const newCurrentUser:IUser = (await axiosInstance.post("/updateInfo.json", editedUser)).data;

            dispatchInStore({type:"UPDATE_CURRENT_USER", payload: newCurrentUser});
        });
    }

    const inputImage = async (target:any) => {
        
        const file = target.files ? target.files[0] : null;
        
        if(file == null)
            return;
        
        uploadedImage.append("imageFile", file);

        dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
            let newImageLink:string = "";
            try{
                newImageLink = (await axiosInstance.post("/testImageReceipt.json", uploadedImage)).data;
            } catch(err){
                // console.log(err);
            }
            setUploadedImage(new FormData());

            if(!newImageLink)
                return;

            const editedUser:IUser = {
                ... currentUser,
                pfpLink: newImageLink
            }

            const newEditedUser:IUser = (await axiosInstance.post("/updateInfo.json", editedUser)).data;

            dispatchInStore({type:"UPDATE_CURRENT_USER", payload: newEditedUser});
        })
    }


    return(
        <div className ="BlueBackground col-md-3 d-none d-md-block" id = 'outerDiv'>
            <br/>
            <br/>
            <br/>
            <div>
                <a href= '/'><button type="button" className="btn btn-light" id="backButton">Logout</button></a>
                <p id='pTag'>
                    {isEditing ?
                        <span>Editing!</span> :
                        <>{currentUserData && isUsersOwnProfile ?
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
                        <input type="file" accept="image/*" id="clipper-pfp-upload" onChange={(e) => inputImage(e.currentTarget)}/>
                    </label>
                </div>

                <div className="clipper-user-editing-form-element">
                    <label>Edit your bio:</label>
                    <textarea className="form-control" rows={4} value={bioState} onChange={(e) => setBioState(e.target.value)}></textarea>
                </div>

                <div className="clipper-user-editing-form-element">
                    <label>Change First Name:</label>
                    <input type="text" className="form-control" value={fNameState} onChange={(e) => setFNameState(e.target.value)} />
                </div>

                <div className="clipper-user-editing-form-element">
                    <label>Change Last Name:</label>
                    <input type="text" className="form-control" value={lNameState} onChange={(e) => setLNameState(e.target.value)} />
                </div>
                <button onClick={(e) => { submitUserChanges(e); setEditing(false);}} type="button" className="btn btn-success" >Submit</button>
            </form>
            :
            <div className='clipper-profile-pane-info'>
                <strong>Bio: </strong><br />
                {currentUserData ? biography : <><p>Welcome to <strong>Clipper</strong>, the worlds newest social network.</p>
                    <p>Like our namesake sailing vessels of old, Clipper is revolutionizing the way that
                                people across the world connect. We simplify and unify the social network
                        experience by letting anyone add to <i>The Feed</i>. All you need to do is
                        <Link to="/signup" className="clipper-landing-link"> create an account</Link> and <Link to="/login" className="clipper-landing-link">login</Link>!</p></>}
                <br/>
                {/* <strong>Most Recent Post:</strong> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            </div>
            }
        </div>
    )
}