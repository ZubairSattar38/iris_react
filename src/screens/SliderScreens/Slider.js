import React, { component } from "react";
import NavBar from "./Navbar";
import SliderText from "./SliderText";
import { COLORS, IMAGES } from "../../GlobalVariables";
import logo from '../../images/lighteyez.png'
import './Slider.css'
import { useMediaQuery } from 'react-responsive';

function Slider (){

        const isDesktopOrLaptop = useMediaQuery({
            query: '(min-width: 983px)'
        })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

        const styles = {
            textLogoWrapper: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            },
            slider: {
                background: COLORS.black,
                // display: 'flex',
                // flexDirection: 'column',
                // height: '100vh',
                flexWrap: 'wrap'

            },
            sliderText: {
                flex: 1,
                // alignItems:'center',
                flexWrap: 'wrap'


            },
            sliderLogo: {
                flex: 1,
            }
        }


        return (
            <div style={styles.slider}>
                {/* <iframe src="//static.iohk.io/fluid2/"></iframe> */}
                <NavBar />
                <div style={styles.textLogoWrapper}>
                    <div style={styles.sliderText}>
                        <SliderText />
                    </div>
                    <div className="moveArrow" style={styles.sliderLogo}>
                        <img src={logo} style={{ width: isTabletOrMobile?'50%':'80%', opacity: '0.07' }} />
                    </div>
                </div>
            </div>
        )
    
}


export default Slider;