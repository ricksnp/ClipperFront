import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../_reducers';
import { IPost, IUser } from '../../_reducers/UserReducer';
import { axiosInstance } from '../../_util/axiosConfig';
import { selectCurrentUser } from '../LoginComponent/LoginComponent';
import { Post } from '../Post/Post';
import { selectViewedUser } from '../ProfilePane/ProfilePane';
import { Users } from '../Users/Users';
import dark_theme_logo from './../../Assets/Clipper-Logo-Dark-Theme.png';
import './../../views/LandingPage/LandingPage.scss';
import { NewPost } from './../NewPost/NewPost';
import './Feed.scss';

export const selectCurrentPosts = (state:IRootState) => state.postsState.posts;

export function Feed(){
    let rerender:boolean = false;
    
    const dispatch = useDispatch();

    const currentUserData:IUser|null = useSelector(selectCurrentUser);
    const nonNullcurrentUser:IUser = currentUserData as IUser;

    const viewedUserData:IUser|null = useSelector(selectViewedUser);
    const nonNullViewedUser:IUser = viewedUserData as IUser;
    
    const [postsToView, setPostsToView] = useState([] as IPost[]);
    
    // if(viewedUserData){
    //     dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
    //         // This must make an axios request to update the viewed user,
    //         // ONLY IF we're using concurrent users logged in on different clients.
            
    //         setPostsToView(nonNullViewedUser.posts ? nonNullViewedUser.posts : [] as IPost[]);
    //     });
    // } else {// if you're not viewing a user
    //     dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
    //         const posts:IPost[]|null = (await axiosInstance.get("/allPosts.json")).data;
            
    //         console.log(posts);

    //         setPostsToView(posts ? posts : [] as IPost[]);
            
    //         // if(posts)
    //         //     dispatchInStore({type:"ALL", payload: posts}); // UPDATES POSTS !!!!!ON INFINITE LOOP!!!!!
    //         // else
    //         //     dispatchInStore({type:"ALL", payload: [] as IPost[]}); // UPDATES POSTS
    //     });
    // }

    useEffect(() => {
        const getPosts = async() => {
            const thePosts:IPost[] = viewedUserData ?
                (viewedUserData.posts ?
                    viewedUserData.posts : [] as IPost[])
                : (await axiosInstance.get("/allPosts.json")).data;
            
            setPostsToView(thePosts);
        }

        getPosts();
    }, [rerender]);

    const renderFeed = () => {
        rerender = !rerender;
    }
    
    console.log(postsToView);// If not in a State, it renders once, then doesn't re-render when the async completes...

    return(
        <div className = "col-md-9 outerDiv" >
            <div className = "BlueBackground row secondDiv" >
                <div className="col-4"></div>
                <img src={dark_theme_logo} className = "logo-small mx-auto theImage" ></img>
                <span>
                    <span><input type="text" placeholder="Find User"></input> <button type="submit" className="btn btn-success">Search</button></span>
                </span>
                <p className='d-md-none d-l-none d-xl-none thePtag'>Welcome to <strong>Clipper!</strong>
                <br/>Please <Link to="/login">Login</Link> or <Link to="/signup">Create an account</Link> to post.</p>
            </div>
            <div className = "GreyBackground outerDiv" >
            {/* If user is signed in and not looking at someone else's profile */
            currentUserData && (viewedUserData == null || currentUserData.id == viewedUserData.id) ? <NewPost renderFeed={renderFeed}/> : <></>}
            <div className = "GreyBackground feedWrapper">
               {/* Add logic to show Users instead of Posts  */}
                
                {postsToView.map((post, index) => (
                            <Post key={index} post={post} viewer={currentUserData}/>
                        )
                    )
                }

                {/* <Users/> */}
               
            </div>
            </div>
        </div>
    )
}