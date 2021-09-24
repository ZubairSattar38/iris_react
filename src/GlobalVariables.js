import { useMediaQuery } from 'react-responsive';
import store from './redux/store';
import lightLogo from './images/lighteyez.png'
import darkLogo from './images/darkeyez.png'

export const isDark = store.getState().color;
export const IMAGES ={
  lightEyez:lightLogo,
  darkEyez:darkLogo
}
export const COLORS = {
    white: '#fff',
    black: '#000',
    grey: 'rgb(250, 250, 250)',
    midGrey:'#F2F2F2'
    // your colors
}
// export const MEDIA = {
//    isDesktopOrLaptop = useMediaQuery({
//     query: '(min-width: 1224px)'
// }),
//  isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' }),
//  isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' }),
//  isPortrait = useMediaQuery({ query: '(orientation: portrait)' }),
//  isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' }),

// }