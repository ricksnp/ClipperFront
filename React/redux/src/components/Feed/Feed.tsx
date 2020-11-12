import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../LoginComponent/LoginComponent';
import Posts from '../Posts/Posts';
import { Users } from '../Users/Users';
import dark_theme_logo from './../../Assets/Clipper-Logo-Dark-Theme.png';
import './../../views/LandingPage/LandingPage.scss';
import { NewPost } from './../NewPost/NewPost';
import './Feed.scss';

export function Feed(props:any){
    const you = useSelector(selectCurrentUser);

    return(
        <div className = "col-md-9 outerDiv" >
            <div className = "BlueBackground row secondDiv" >
                <div className="col-4"></div>
                <img src={dark_theme_logo} className = "logo-small mx-auto theImage" ></img>
                <span>
                    <span><input type="text" placeholder="Find User"></input> <button type="submit" className="btn btn-success">Search</button></span>
                </span>
                <p className='d-md-none d-l-none d-xl-none thePtag'>Welcome to <strong>Clipper!</strong><br/>Please <Link to="/login">Login</Link> or <Link to="/signup">Create an account</Link> to post.</p>
            </div>
            <div className = "GreyBackground outerDiv" >
            {/* If user is signed in*/
            you ? <NewPost/> : <></>}
            <div className = "GreyBackground feedWrapper">
               {/* Add logic to show Users instead of Posts  */}
                <Posts/>
                <Users/>
               
            </div>
            </div>
        </div>
    )
}