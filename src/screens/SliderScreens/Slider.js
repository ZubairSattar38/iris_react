import React, { component } from "react";
import NavBar from "./Navbar";
import SliderText from "./SliderText";
import { COLORS, IMAGES } from "../../GlobalVariables";
import logo from '../../images/lighteyez.png'
import './Slider.css'
class Slider extends React.Component {
    render() {
        return (
            <div style={styles.slider}>
                {/* <iframe src="//static.iohk.io/fluid2/"></iframe> */}
                <NavBar />
                <div style={styles.textLogoWrapper}>
                    <div style={styles.sliderText}>
                        <SliderText />
                    </div>
                    <div className="moveArrow" style={styles.sliderLogo}>
                        <img src={logo} style={{ width: '80%' ,opacity:'0.07'}} />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    textLogoWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    slider: {
        background: COLORS.black,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    sliderText: {
        flex: 1,
        // alignItems:'center',

    },
    sliderLogo: {
        flex: 1,
    }
}
export default Slider;