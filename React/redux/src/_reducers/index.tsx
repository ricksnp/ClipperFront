import * as React from 'react';
import { combineReducers } from 'redux';
import { IPostsState, postsReducer } from './PostsReducer';
import { IUserState, userReducer } from './UserReducer'

export interface IRootState{
    userState: IUserState,
    postsState: IPostsState
}

export const rootReducer = combineReducers<IRootState>({ userState: userReducer, postsState: postsReducer })
