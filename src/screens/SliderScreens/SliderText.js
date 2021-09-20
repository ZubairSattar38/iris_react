import React, { useState, useEffect } from 'react';
import { COLORS,IMAGES } from "../../GlobalVariables";
// import logo from '../../images/lighteyez.png'
// import './Slider.css'

function SliderText() {
    const titles = [
        'CREATIVE', 'INSPIRING', 'PLAYFUL'
    ]
    let value=0;
    useEffect(() => {
        const interval = setInterval(() => {
            if(value<titles.length){
                setTitle(titles[value]);
                value++;
                // setValue(value+1);
            }else{
                value=0;
                // setValue(0);
            }
        }, 500);
        return () => clearInterval(interval);
      }, []);
    const [title, setTitle] = useState("");

    return (
        <div style={styles.slider}>
            {/* <div style={styles.sliderText_1}>
                <p>  Welcome to Iris.</p>
            </div> */}
            <div style={styles.sliderText_2}>
                <h1 >YOUR DIGITAL <br /> STORY. <br />OUR <span style={{color:"#cacccf"}}>{title}</span> <br /> VISION</h1>
            </div>
            {/* <div className="moveArrow">
            <img src={logo} style={{width:'10%'}}/>
            </div> */}
        </div>
    )
}
const styles = {
    slider: {
        marginLeft: "10em",
        marginTop: "7em",
        alignItems:"center",
        justifyContent:"center"
    },
    sliderText_1: {
        fontSize: 20,
        fontWeight: 800,
        color: COLORS.white,
        flex:1
    },
    sliderText_2: {
        fontSize: 30,
        fontWeight: 800,
        color: COLORS.white,
        flex:1

    },


}
export default SliderText;