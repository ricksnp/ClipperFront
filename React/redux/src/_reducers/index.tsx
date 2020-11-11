import * as React from 'react';
import { combineReducers } from 'redux';
import { IUserState, userReducer } from './UserReducer'

export interface IRootState{
    userState: IUserState
}

export const rootReducer = combineReducers<IRootState>({ userState: userReducer })
