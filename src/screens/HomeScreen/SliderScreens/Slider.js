import React, { component } from "react";
import NavBar from "./Navbar";
import SliderText from "./SliderText";
import './Slider.css'
import { useMediaQuery } from 'react-responsive';

function Slider(props) {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1114px)' })

    const isLargeScaleTablet = useMediaQuery({ query: '(min-width: 1092px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    // alert("Primary Color :- ",props.primaryColor)
    const styles = {
        textLogoWrapper: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop:'2%'
        },
        slider: {
            background: props.state.primaryColor,
            height: isBigScreen && '100vh',
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
            <NavBar state={props.state}/>
            <div style={styles.textLogoWrapper}>
                <div style={styles.sliderText}>
                    <SliderText state={props.state}/>
                </div>
                <div className="moveArrow" style={styles.sliderLogo}>
                    <img src={props.state.logoImage} style={{ width: isTabletOrMobile ? '50%' : '60%',opacity:'0.2' }} />
                </div>
            </div>
        </div>
    )

}


export default Slider;