import { COLOR_CHANGE_REQUEST, COLOR_CHANGE_FAILURE, COLOR_CHANGE_SUCCESS } from "../types/colorTypes";

const initialState = {
    isDark: false,
    isLight: false,
    // address: '',
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLOR_CHANGE_REQUEST:
            return {
                ...state,
                isFail: false,
                isLogin: false,
            }
        case COLOR_CHANGE_FAILURE:
            return{
                ...state,
                isFail: true,
            }
        case COLOR_CHANGE_SUCCESS:
            return{
                ...state,
                address: action.payload
            }
        default: return state;
    }
}
export default LoginReducer;