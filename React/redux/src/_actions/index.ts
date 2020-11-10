import { axiosInstance } from '../_util/axiosConfig';
import * as t from '../_action.types/actionTypes'

export const login = () => async () => {
    const response = await axiosInstance.get("/users");
    let payload1 = response.data;
    return ({
        type: t.SUCCESS,
        payload: payload1
    });
}
