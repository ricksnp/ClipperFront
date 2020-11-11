import React from 'react';
import userPic from './../../Assets/Liked-Dark-Theme.png'
import newPost from './../../Assets/New-Post-Dark-Theme.png'
import TextEditor from './../TextEditor/TextEditor'
import Images from '../Images/Images'
import './NewPost.scss'

export function NewPost(prop:any){
    return(
        <div className = "Post row " id= 'mainDiv'>
            <div id= 'firstAndLastDiv'>
                <a href='#' className='col-2'><img src={userPic} className="Post-Profile-Pic" id='anchorTag'/></a>
            </div>
            <div className = "col row whiteText" id = 'middleDiv'> {/* Needs contitional statement for Carousel */}
                {/* TODO add attach image button */}
                <TextEditor/>
            </div>
            <div className="col-2" id = 'firstAndLastDiv'>
            <a href="#" className='like'><img src={newPost} id= 'anchorTag2'></img></a>          
            </div>
        </div>
    )
}