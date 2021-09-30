import React, { useState, useEffect } from 'react';
import { COLORS, IMAGES } from "../../../GlobalVariables";
import './Slider.css'
import { useMediaQuery } from 'react-responsive';

function SliderText(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const isLargeScaleTablet = useMediaQuery({ query: '(max-width: 1092px)' })

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
            marginLeft: isTabletOrMobile?"1.5em":"7em",
            marginTop: isTabletOrMobile?"2em":"3em",
            marginBottom: isTabletOrMobile&&"2em",
            alignItems: "center",
            justifyContent: "center",

        },
        sliderText_1: {
            fontSize: 20,
            fontWeight: 800,
            color: props.state.primaryText,
            flex: 1,

        },
        sliderText_2: {
            fontSize: isTabletOrMobile?10:isLargeScaleTablet?20:40,
            fontWeight: isTabletOrMobile?500:800,
            color: props.state.primaryText,
            flex: 1,
        },
        iterativeText: {
            fontFamily:"ArialicHollow",
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
                <p>  Welcome to <span style={styles.iterativeText}>EYEZ.</span></p>
            </div>
            <div style={styles.sliderText_2}>
            
                {/* <h1 >YOUR DIGITAL <br /> STORY. <br />OUR <span className="cursorWriting" style={styles.iterativeText}>{title}</span> <br /> VISION</h1> */}
                <h1 >YOUR DIGITAL <br /> STORY. <br />OUR <span className="cursorWriting" style={styles.iterativeText}>{title}</span> <br /> VISION</h1>

            </div>
        </div>
    )

}

export default SliderText;