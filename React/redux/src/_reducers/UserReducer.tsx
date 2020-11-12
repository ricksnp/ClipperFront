import * as t from '../_action.types/actionTypes';

export interface IPostImage{
    id:number,
    imageLink:string,
    post?:IPost
}

export interface ILike{
    id:number
    user?:IUser,
    post?:IPost
}

export interface IPost{
    id:number,
    user?:IUser,
    textContent:string,
    images:IPostImage[]
    likes:ILike[]
}

export interface IUser{
    id:number,
    username:string,
    password?:string,
    firstName:string,
    lastName:string,
    email:string,
    bio:string,
    pfpLink:string,
    posts:IPost[]|null,
    likes:ILike[]|null
}

export interface IUserState{
    currentUser:IUser|null,
    viewedUser:IUser|null
}

const initialState:IUserState = {currentUser: null, viewedUser: null};

export const userReducer = (state:IUserState = initialState, action: any): any => {
    switch (action.type) {
        case "REGISTER":
        case "LOGIN":
            const loggedInUser:IUser|null = action.payload;

            if(loggedInUser == null)
                return {currentUser: null, viewedUser: null};
            else return {
                currentUser: {... loggedInUser},
                viewedUser: {... loggedInUser},
            };
        case "LOGOUT":
            return{
                currentUser: null,
                viewedUser: null
            }
        default:
            return state;
    }
}