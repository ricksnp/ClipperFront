import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../_reducers';
import { IPost, IUser } from '../../_reducers/UserReducer';
// import { getPosts } from '../../_util/APIUtility';
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

    const [rendered, setRendered] = useState(false);
    console.log("Began Feed. Rendered: " + rendered);
    
    const dispatch = useDispatch();

    const currentUserData:IUser|null = useSelector(selectCurrentUser);
    const nonNullcurrentUser:IUser = currentUserData as IUser;

    const viewedUserData:IUser|null = useSelector(selectViewedUser);
    const nonNullViewedUser:IUser = viewedUserData as IUser;
    
    const [postsToView, setPostsToView] = useState([] as IPost[]);
    let global = viewedUserData == null;

    const [searchQuery, setSearchQuery] = useState("");

    if(!rendered){
        if(viewedUserData){
            const postGet = async () => {
                setRendered(true);
                
                const postResponse:IPost[]|null = (await axiosInstance.get(`/user/${viewedUserData.id}/posts.json`)).data;
                const posts:IPost[] = postResponse ? postResponse as IPost[] : [] as IPost[];
                
                posts.sort((a, b) => (a.id, b.id) ? -1 : 1);

                console.log("Posts: " + posts);
                
                setPostsToView(posts);
            }

            postGet();
            
            console.log("User's posts: " + postsToView);
        } else {
            const postGet = async () => {
                setRendered(true);
                
                const postResponse:IPost[]|null = (await axiosInstance.get("/allPosts.json")).data;
                const posts:IPost[] = postResponse ? postResponse as IPost[] : [] as IPost[];
                
                posts.sort((a, b) => (a.id, b.id) ? 1 : -1);

                console.log("Posts: " + posts);
                
                setPostsToView(posts);
            }
            console.log("Viewing all!");

            postGet();
        }
    }

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




    // useEffect(() => {
    //     console.log("Feed useEffect called!");

    //     const getPosts = async() => {
    //         dispatch((dispatchInStore:any, getState:any) =>{
    //             dispatchInStore({type:"ORDER_VIEWED_POSTS"});
    //         });

    //         console.log("In async useEffect!");
    //         const thePosts:IPost[] = viewedUserData ?
    //             (viewedUserData.posts ?
    //                 viewedUserData.posts : [] as IPost[])
    //             : (await axiosInstance.get("/allPosts.json")).data;
    //         console.log("After async useEffect!");

    //         setPostsToView(thePosts);
    //         postsToView.sort((a, b) => (a.id, b.id) ? 1 : -1);
    //     }

    //     getPosts();
    // }, [rerender]);

    const renderFeed = () => {
        console.log("In renderfeed!");

        setRendered(!rendered);
    }

    const viewAllPosts = async (e:any) => {
        e.preventDefault();
        global = true;

        const postGet = async () => {
            const postResponse:IPost[]|null = (await axiosInstance.get("/allPosts.json")).data;
            const posts:IPost[] = postResponse ? postResponse as IPost[] : [] as IPost[];
            
            posts.sort((a, b) => (a.id, b.id) ? 1 : -1);

            console.log("Posts: " + posts);
            
            setPostsToView(posts);
        }
        console.log("Viewing all!");

        postGet();
    }

    const viewYourPosts = async (e:any) => {
        global = false;

        e.preventDefault();

        const postGet = async () => {
            const postResponse:IPost[]|null = (await axiosInstance.get(`/user/${(currentUserData as IUser).id}/posts.json`)).data;
            const posts:IPost[] = postResponse ? postResponse as IPost[] : [] as IPost[];
            
            posts.sort((a, b) => (a.id, b.id) ? -1 : 1);

            console.log("Posts: " + posts);
            
            setPostsToView(posts);
        }
        console.log("Viewing all!");

        postGet();
    }

    const setViewedUser = (input:string) => {
        dispatch((dispatchInStore:any, getState:()=>IRootState) => {
                // const newFocus:IUser|null = (await axiosInstance.get(""));
            }
        );

        setSearchQuery("");
    }
    
    console.log(postsToView);// If not in a State, it renders once, then doesn't re-render when the async completes...

    return(
        <div className = "col-md-9 outerDiv" >
            <div className = "BlueBackground row secondDiv" >
                <div className="col-4">
                    {currentUserData ?
                    <><button onClick={(e) => viewYourPosts(e)} type="button" className="btn btn-light">View your profile</button><span> </span><button onClick={(e) => viewAllPosts(e)} type="button" className="btn btn-light">View All Posts</button></>
                    : <></>}
                </div>
                <img src={dark_theme_logo} className = "logo-small mx-auto theImage" ></img>
                <span>
                    <span><input type="text" placeholder="Find User" value={searchQuery} onChange={(e) => setSearchQuery(e.currentTarget.value)}></input>
                    <button type="submit" className="btn btn-success" onClick={(e) => {e.preventDefault(); setViewedUser(searchQuery)}}>Search</button></span>
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
                            <Post key={index} post={post} viewer={currentUserData} global={global}/>
                        )
                    )
                }

                {/* <Users/> */}
               
            </div>
            </div>
        </div>
    )
}