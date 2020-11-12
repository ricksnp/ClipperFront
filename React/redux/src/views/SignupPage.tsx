import React from 'react';
import { SignupComponent } from '../components/SignupComponent/SignupComponent';
import  './LRS.scss'
import profilePic from '../Assets/profile.jpeg'

export default function SignupPage() {
    return (

        <div className="d-md-flex h-md-100 ">
            <div className="col-md-8 p-0 bg-indigo h-md-100">
                <div className="text-white d-md-flex align-items-center h-md-100 p-5 text-center justify-content-center" id = 'div1'>
                    <SignupComponent />
                </div>
            </div>

            <div className="col-md-4 p-0 bg-white h-md-100 loginarea">
                <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center" id = 'div2'>
                <div id='div3' style={{textAlign:"center"}}>
                        <img src = {profilePic} style={{width: "100px", height:"100px",borderRadius:"50%",border:"solid 2px white"}}/>
                        <p>Matthew</p>
                        <p>Marketing Manager</p>
                        <p>"We all know that a paperclip's purpose is to hold paper together. We intend to use Clipper to keep people together"</p>
                        <p>- Matthew Thomas</p>
                    </div>
                </div>
                </div>
            </div>

    
    )
};