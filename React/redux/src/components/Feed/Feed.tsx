import React from 'react';

import './../../views/LandingPage/LandingPage.css';
import dark_theme_logo from './../../Assets/Clipper-Logo-Dark-Theme.png';
import Posts from '../Posts/Posts';
import {NewPost} from './../NewPost/NewPost';

export function Feed(props:any){
    return(
        <div className = "col-md-9" style={{padding:'0px'}}>
            <div className = "BlueBackground">
                <img src={dark_theme_logo} className = "logo-small mx-auto" style={{width: "50px", height: "50px", padding:'10px', display:"block"}}></img>
                <p className='d-md-none d-l-none d-xl-none' style={{textAlign: "center"}}>Welcome to <strong>Clipper!</strong><br/>Please <a href="#">Login</a> or <a href="#">Create an account</a> to post.</p>
            </div>
            <div className = "GreyBackground " style={{padding:'0px'}}>
            {/* If user is signed in and on they are on the Home Page || their own account page*/}<NewPost/>
            <div className = "GreyBackground feedWrapper">
               
                <Posts/>
                {/* replace <Posts/> with {props.map((prop:any) => (
                    <Post key={prop.id} prop={prop}/>
                ))}*/}
               
            </div>
            </div>
        </div>
    )
}