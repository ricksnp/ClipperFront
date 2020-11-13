import React, { useEffect, useState } from 'react';
import userPic from './../../Assets/Liked-Dark-Theme.png'
import newPost from './../../Assets/New-Post-Dark-Theme.png'
// import TextEditor from './../TextEditor/TextEditor'
import Images from '../Images/Images'
import './NewPost.scss'
import { Form, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../LoginComponent/LoginComponent';
import { IRootState } from '../../_reducers';
import { axiosInstance } from '../../_util/axiosConfig';

// interface IImageInput{
//     name:string,
//     bytes:ArrayBuffer
// }

interface INewPostProps{
    renderFeed:()=>void,
}

export function NewPost(props:INewPostProps){
    let rerender:boolean = false;
    
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const [newPostText, setNewPostText] = useState("");
    const [uploadedImage, setUploadedImage] = useState(new FormData());

    const makeClipperPost = (event:any) => {
        // console.log("New upload!");

        event.preventDefault();

        if(currentUser == null)
            return;

        const newPostProto = {
            user_id: currentUser.id,
            content: newPostText,
        }
        setNewPostText('');
        rerender = !rerender;

        // console.log(uploadedImage.get("imageFile"));
        // console.log(event.currentTarget["imageFile"].files[0].name());

        dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
                let newImageLink:string = "";
                try{
                    newImageLink = (await axiosInstance.post("/testImageReceipt.json", uploadedImage)).data;
                } catch(err){
                    console.log(err);
                }

                // console.log(newImageLink);

                const newPost = {
                    user_id:newPostProto.user_id,
                    content:newPostProto.content as string,
                    linkOfPic: newImageLink
                }

                // console.log(newPost);

                const successfulPost = (await axiosInstance.post("/addPost.json", newPost)).data;
                
                setUploadedImage(new FormData());
                dispatchInStore({type: "MAKE_POST", payload: successfulPost});

                rerender = !rerender;
                props.renderFeed();
            }
        );
    }

    const inputImage = async (files:any) => {
        
        const file = files[0];
        
        if(file == null)
            return;

        // console.log("Appending file.");
        // console.log(uploadedImage.get("imageFile"));

        uploadedImage.append("imageFile", file);

        // console.log(uploadedImage.get("imageFile"));

        rerender = !rerender;
    }

    useEffect(() => {}, [rerender]);
    
    return(
    <form encType="multipart/form-data" id="clipper-add-post-image-form">
        <div className = "Post row " id= 'mainDiv'>
            <div className='clipper-new-post-margin-button'>
                <span className='col-2'>
                        <Label id="clipper-add-post-image-label">Add Image
                            <Input type="file" accept="image/*" name="imageFile" onChange={(e) => inputImage(e.target.files)} id="clipper-add-post-image" />
                        </Label>
                        {/* <img src={userPic} className="Post-Profile-Pic" id='anchorTag'/> */}
                </span>
            </div>
            <div className = "col row whiteText" id = 'middleDiv'> {/* Needs conditional statement for Carousel */}
                {/* TODO add attach image button */}
                <Form style={{width:'100%'}}>
                    <div className="form-group">
                        <textarea className="form-control" rows={4} value={newPostText} onChange={(e) => setNewPostText(e.target.value)}></textarea>
                    </div>
                </Form>
            </div>
            <div className="col-2 clipper-new-post-margin-button" onClick={(e) => makeClipperPost(e)}>
                <span className='like'><img src={newPost} id= 'anchorTag2'></img></span>
            </div>
        </div>
    </form>
    )
}