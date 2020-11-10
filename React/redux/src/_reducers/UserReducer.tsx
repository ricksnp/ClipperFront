import * as t from '../_action.types/actionTypes';

const initialState: any = {
    users: [{}]
};

export const UserReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case t.SUCCESS:
            return {
                users: state.users, ...action.payload
            };
        default:
            return state;
    }
}