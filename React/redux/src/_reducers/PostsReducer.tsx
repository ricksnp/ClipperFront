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
            if(action.payload == null)
                return state;
            else for(let i = 0; i < state.posts.length; i++)
                for(let j = 0; j < action.payload.length; j++)
                    if(state.posts[i] == action.payload[j])
                        return state;
            return{
                posts:[...action.payload]
            }
        case "POSTS_FROM_USER":
            return{
                posts: action.payload
            }
        default:
            return state;
    }
}