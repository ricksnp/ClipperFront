import React from 'react';
import userPic from './../../Assets/Liked-Dark-Theme.png'

export default function LandingPane(){
    return(
        <div className ="BlueBackground col-md-3 d-none d-md-block" style={{float:'left',height: '100%'}}>
            <br/>
            <br/>
            <br/>
            <div>
                <p style={{textAlign:"right", paddingRight:"20%"}}><a>Edit</a></p>
                <img src={userPic} style={{height:'150px', width:'150px', display:"block", marginLeft:'auto', marginRight:'auto', borderRadius:'50%', border:'2px solid white'}} className = "Logo-Large"/>
                <h2 style={{textAlign:'center'}}>Clipper User</h2>
            </div>
            <br/>
            <div style={{textAlign:'left', padding:'20px', paddingLeft:'30px'}}>
                <strong>Bio:</strong>
                <p>Welcome to <strong>Clipper</strong>, the worlds newest social network.</p>
                <p>Like our namesake sailing vessels of old, Clipper is revolutionizing the way that 
                    people across the world connect. We simplify and unify the social network 
                    experience by letting anyone add to <i>The Feed</i>. All you need to do is
                     <a href="d"> create an account</a> and <a href="c">login</a>!</p>
                <br/>
                <strong>Most Recent Post:</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
    )
}