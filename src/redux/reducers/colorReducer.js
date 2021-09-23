import { COLOR_CHANGE_REQUEST, COLOR_CHANGE_FAILURE, COLOR_CHANGE_SUCCESS } from "../types/colorTypes";
import lightLogo from '../../images/lighteyez.png'
import darkLogo from '../../images/darkeyez.png'
import {IMAGES} from "../../GlobalVariables"
const initialState = {
    isDark: true,
    isFail:false,
    primaryText:'#fff',
    secondaryText:'#000',
    secondaryColor:'#fff',
    primaryColor: '#000',
    grey: 'rgb(250, 250, 250)',
    midGrey:'#F2F2F2',
    logoImage:lightLogo
    // your colors
};
const ColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLOR_CHANGE_REQUEST:
            return {
                ...state,
                isFail: false,
            }
        case COLOR_CHANGE_FAILURE:
            return{
                ...state,
                isFail: true,
            }
        case COLOR_CHANGE_SUCCESS:
            return{
                ...state,
                isDark: action.payload,
                primaryText: action.payload?'#000':'#fff',
                primaryColor: action.payload?'#fff':'#000',
                secondaryColor: action.payload?'#000':'#fff',
                secondaryText: action.payload?'#fff':'#000',
                logoImage: action.payload?darkLogo:lightLogo
                // isFail:false
            }
        default: return state;
    }
}
export default ColorReducer;