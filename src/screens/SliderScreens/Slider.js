import React,{component} from "react";
import NavBar from "./Navbar";
import SliderText from "./SliderText";
import { COLORS } from "../../Color";
class Slider extends React.Component{
    render(){
        return (
            <div style={styles.slider}>
                <NavBar/>
                <div style={styles.sliderText}>
                <SliderText/>
                </div>
            </div>
        )
    }
}
const styles={
    slider: {
        background:COLORS.black,
        height:'100vh',
    },
    sliderText:{
        display:'flex',
        flex:1
    }
}
export default Slider;