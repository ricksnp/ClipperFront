import { IPost } from "./UserReducer";

export interface IPostsState{
    posts:IPost[]
}

const initialState:IPostsState = {
    posts:[] as IPost[]
}

export const postsReducer = (state:IPostsState = initialState, action:any):IPostsState => {
    switch(action.type){
        case "ALL":
            return{
                posts:[...action.payload.posts]
            }
        default:
            return state;
    }
}