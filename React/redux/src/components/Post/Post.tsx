import React, { useState } from 'react';
import dark from './../../Assets/Clipper-Logo-Dark-Theme.png';
import unlike from './../../Assets/Like-Dark-Theme.png';
import like from './../../Assets/Liked-Dark-Theme.png';
import Images from './../Images/Images';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../_util/axiosConfig';

import './Post.scss'


export function Post(prop:any){

    const [liked, setLiked] = useState(false);

    function handleClick(e:any) {
        e.preventDefault();
        console.log('The link was clicked.');

        axiosInstance.post('/addLike.json', {id:0, post_id:1, user_id:1})
        .then(resp => {
            setLiked(true);
            console.log(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        });
        return liked;

    };


    return(
        <div className = "Post row " id= 'outerDiv'>
            <div id='div1U'>
                <a href='#' className='col-2'><img src={dark} className="Post-Profile-Pic" id= 'anchorOne'/></a>
            </div>
            <div className = "col row whiteText" id = 'div2U'> {/* Needs contitional statement for Carousel */}
                <div className="row" id = 'div3U'><Images/></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="col-2" >
            <img src={liked?like:unlike} id = 'anchorTwo' onClick={handleClick}></img>         
            </div>
        </div>
    )
}