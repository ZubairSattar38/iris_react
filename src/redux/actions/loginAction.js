import { COLOR_CHANGE_REQUEST, COLOR_CHANGE_FAILURE, COLOR_CHANGE_SUCCESS } from "../types/colorTypes";

export const loginRequest = () =>{
    return{
        type:COLOR_CHANGE_REQUEST
    }
}
export const loginFailure = () =>{
    return{
        type:COLOR_CHANGE_FAILURE
    }
}
export const loginSuccess = () => {
    return{
        type:COLOR_CHANGE_SUCCESS,
        payload:{address,name}
    }
}