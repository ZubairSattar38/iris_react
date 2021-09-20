import React, { useState, useEffect } from 'react';
import './Button.css'
function Creativity() {
    const titles = [
        'Fast', 'Responsive', 'Trendy', 'Custom', 'Quality', 'Create'
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
    return (
        <div style={styles.belowSlider}>
            <div style={styles.textAnimation}>
                <hr style={styles.separator} />
                {title}
            </div>
            <div style={styles.multiButton}>
                <p style={{ fontWeight: 500 }}>
                    The Coding Pixel hallmark is enterprise-level, bespoke digital products development. We are one of the leading software and app development companies in USA backed by a strong workforce of software, app and web developers. Coding Pixel started its journey 8 years ago to fulfill the purpose of developing quality digital products in real terms. Our primary business model is based on custom software development projects delivered at competitive cost
                </p>
                <div style={styles.btnContainer}>
                    <div style={styles.creativity}>
                        <button style={styles.btn}>Creativity</button>
                      


                        <p style={{ paddingRight: "11%" }}>Trendy, Modish, Interactive, Stylish, Posh, Trendsetter, Super Cool, Elegant, Classy & Modern Designs & User Experiences</p>
                    </div>
                    <div style={styles.technology}>
                        <button style={styles.btn}>Technology</button>
                        <p>Custom Website Design, Native Mobile Apps Development, E-Commerce Development, Bespoke Software Development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const styles = {
    belowSlider: {
        background: '#FAFAFA',
        display: 'flex',
        paddingTop: "5%",
        paddingBottom: "5%"
    },
    textAnimation: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center",
        fontSize: 45,
        fontWeight: 800
    },
    multiButton: {
        textAlign: 'justify',
        paddingRight: '14%',
        flex: 1.5
    },
    btnContainer: {
        display: 'flex',
        marginTop: "6%"
    },
    creativity: {
        flex: 1
    },
    technology: {
        flex: 1
    },
    btn: {
        backgroundColor: "black",
        color: "white",
        width: "32%",
        height: "40%",
        fontSize: 17,
        fontWeight: 800,
    },
    separator: {
        width: "20%",
        marginLeft: "31%",
        color: "#6723DB"
    }
}
export default Creativity;