import React, { useEffect, useState } from 'react';
import dark from './../../Assets/Clipper-Logo-Dark-Theme.png';
import unlike from './../../Assets/Like-Dark-Theme.png';
import like from './../../Assets/Liked-Dark-Theme.png';
import Images from './../Images/Images';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../_util/axiosConfig';

import './Post.scss'
import { IPost, IUser } from '../../_reducers/UserReducer';

interface IPostProp{
    post:IPost,
    viewer:IUser|null
}

export function Post(props:IPostProp){
    const nonNullViewer = props.viewer as IUser;

    const [liked, setLiked] = useState(false);
    let rerender = false;

    useEffect(() => {
        if(props.viewer && nonNullViewer.likes && props.post.likes){
            for(let i = 0; i < nonNullViewer.likes.length; i++)
                for(let j = 0; j < props.post.likes.length; j++)
                    if(nonNullViewer.likes[i].id == props.post.likes[j].id)
                        setLiked(true);
        }// Checks if you liked this post.
    }, [rerender]);

    function handleClick(e:any) {
        e.preventDefault();
        console.log('The link was clicked.');

        // If you're not logged in, you can't like anything.
        if(!props.viewer)
            return;

        const newLikeProto = {
            id: -1,
            post_id: props.post.id,
            user_id: nonNullViewer.id
        };
        setLiked(!liked);
        rerender = !rerender; // this will re-render

        axiosInstance.post('/addLike.json', newLikeProto)
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        });
    };

    console.log(props.post);

    return(
        <div className = "Post row " id= 'outerDiv'>
            <div id='div1U'>
                <img src={dark /* Should be the profile picture of the user who posted it */} className="Post-Profile-Pic" id= 'anchorOne'/>
            </div>
            <div className = "col row whiteText" id = 'div2U'> {/* Needs contitional statement for Carousel */}
                <div className="col" id = 'div3U'>
                    <Images postImages={props.post.images}/>
                    <br/>
                    <p>{props.post.textContent}</p>
                </div>
            </div>
            <div className="col-2" >
            <img src={liked?like:unlike} id = 'anchorTwo' onClick={(e) => handleClick(e)}></img>        
            </div>
        </div>
    )
}