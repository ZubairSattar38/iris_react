import React,{component} from "react";
import NavBar from "./Navbar";
import SliderText from "./SliderText";

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
        background:'#6723DB',
        height:'100vh',
        // marginTop:-25
    },
    sliderText:{
        display:'flex',
        flex:1
        // justifyContent: 'center',
        // alignItems: 'center',
    }
}
export default Slider;