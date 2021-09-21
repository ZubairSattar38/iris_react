import React, { useState, useEffect } from 'react';
import { COLORS, IMAGES } from "../../GlobalVariables";
import './Slider.css'
import { useMediaQuery } from 'react-responsive';

function SliderText() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const titles = [
        'CREATIVE', 'INSPIRING', 'PLAYFUL'
    ]
    let value = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            if (value < titles.length) {
                setTitle(titles[value]);
                value++;
                // setValue(value+1);
            } else {
                value = 0;
                // setValue(0);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);
    const [title, setTitle] = useState("");
    const styles = {
        slider: {
            marginLeft: isTabletOrMobile?"3em":"7em",
            marginTop: "3em",
            alignItems: "center",
            justifyContent: "center",

        },
        sliderText_1: {
            fontSize: 20,
            fontWeight: 800,
            color: COLORS.white,
            flex: 1,

        },
        sliderText_2: {
            fontSize: isTabletOrMobile?20:30,
            fontWeight: isTabletOrMobile?500:800,
            color: COLORS.white,
            flex: 1,

        },
        iterativeText: {
            color: "#cacccf",
            textTransform: 'uppercase',
            webkitTextFillColor: 'transparent',
            webkitTextStrokeWidth: 1,
            webkitTextStrokeColor: '#DBC2CF',
        },
    }

    return (
        <div style={styles.slider}>
            <div style={styles.sliderText_1}>
                <p>  Welcome to EYEZ.</p>
            </div>
            <div style={styles.sliderText_2}>
                <h1 >YOUR DIGITAL <br /> STORY. <br />OUR <span className="cursorWriting" style={styles.iterativeText}>{title}</span> <br /> VISION</h1>

            </div>
            {/* <div className="moveArrow">
            <img src={logo} style={{width:'10%'}}/>
            </div> */}
        </div>
    )

}

export default SliderText;