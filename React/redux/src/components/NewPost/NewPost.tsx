import React from 'react';
import userPic from './../../Assets/Liked-Dark-Theme.png'
import newPost from './../../Assets/New-Post-Dark-Theme.png'
import TextEditor from './../TextEditor/TextEditor'
import Images from '../Images/Images'

export function NewPost(prop:any){
    return(
        <div className = "Post row " style={{width:'100%', margin:'0px',paddingTop:'10px' ,borderBottom:'2px solid white'}}>
            <div style={{display:"flex", alignItems: "center"}}>
                <a href='#' className='col-2'><img src={userPic} className="Post-Profile-Pic" style={{width:'90px',height:"90px",borderRadius:'50%', border:'2px solid #FFF'}}/></a>
            </div>
            <div className = "col row whiteText" style={{display:"flex", alignItems: "center", padding:'10px'}}> {/* Needs contitional statement for Carousel */}
                {/* TODO add attach image button */}
                <TextEditor/>
            </div>
            <div className="col-2" style={{display:"flex", alignItems: "center"}}>
            <a href="#" className='like'><img src={newPost} style={{width:'100px',height:'100px', borderRadius:"50%", border:"2px solid white"}}></img></a>          
            </div>
        </div>
    )
}