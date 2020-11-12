import React, { useState } from 'react';
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

interface IImageInput{
    name:string,
    bytes:ArrayBuffer
}

export function NewPost(prop:any){
    
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const [newPostText, setNewPostText] = useState("");
    let uploadedImage:FormData = new FormData();

    const makeClipperPost = (event:any) => {
        console.log("New upload!");

        event.preventDefault();

        const newPostProto = {
            id: 0,
            user: currentUser,
            textContent: newPostText,
        }
        setNewPostText('');

        console.log(uploadedImage.get("imageFile"));
        // console.log(event.currentTarget["imageFile"].files[0].name());

        dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
                const newImageLink = (await axiosInstance.post("/testImageReceipt.json", uploadedImage)).data;

                console.log(newImageLink);

                const newPost = {
                    ... newPostProto,
                    imageLink: newImageLink
                }

                // const successfulPost = (await axiosInstance.post("/post", newPost)).data;
            }
        );
    }

    const inputImage = async (event:any) => {
        const file = event.target.files[0];
        
        if(file == null)
            return;

        console.log("Appending file.");
        console.log(uploadedImage.get("imageFile"));

        uploadedImage.append("imageFile", file);

        console.log(uploadedImage.get("imageFile"));
    }
    
    return(
        <div className = "Post row " id= 'mainDiv'>
            <div className='clipper-new-post-margin-button'>
                <span className='col-2'>
                    <Form id="clipper-add-post-image-form">
                        <Label id="clipper-add-post-image-label">Add Image
                            <Input type="file" accept="image/*" onChange={(e) => inputImage(e)} id="clipper-add-post-image" />
                        </Label>
                        {/* <img src={userPic} className="Post-Profile-Pic" id='anchorTag'/> */}
                    </Form>
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
    )
}