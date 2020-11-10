import React from 'react';
import dark from './../../Assets/Clipper-Logo-Dark-Theme.png'
import like from './../../Assets/Like-Dark-Theme.png'
import Images from './../Images/Images'

export function Post(prop:any){
    return(
        <div className = "Post row " style={{width:'100%', margin:'0px' ,borderBottom:'2px solid white'}}>
            <div style={{display:"flex", alignItems: "center"}}>
                <a href='#' className='col-2'><img src={dark} className="Post-Profile-Pic" style={{width:'90px',height:"90px",borderRadius:'50%', border:'2px solid #FFF'}}/></a>
            </div>
            <div className = "col row whiteText" style={{display:"flex", alignItems: "center", padding:'10px'}}> {/* Needs contitional statement for Carousel */}
                {/* TODO: Make this goddamned image carousel responseive. Seriously, fuck image */}
                <div className="row" style={{width:'100%'}}><Images/></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="col-2" style={{display:"flex", alignItems: "center"}}>
            <a href="#" className='like'><img src={like} style={{width:'100px',height:'100px'}}></img></a>          
            </div>
        </div>
    )
}