import React, { useState, useEffect } from 'react';
import { COLORS } from '../../GlobalVariables';
import { useMediaQuery } from 'react-responsive';

function Footer() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })


    const styles = {

        btn: {
            backgroundColor: "black",
            color: "white",
            width: "32%",
            height: "40%",
            fontSize: 17,
            fontWeight: 800,
        },
        Footer: {
            background: COLORS.black,
            display: 'flex',
            // flexDirection: isTabletOrMobile ? 'column' : isDesktopOrLaptop ? 'row' : 'column',
            height: '40vh',
        },
        iris: {
            fontSize: 15,
            fontWeight: 800,
            flex: 1
        },
        leftSide: {
            flex: 1,
            color: COLORS.white,
            paddingTop: '2%',
            paddingLeft: '12%',
            display: 'flex',
            flexDirection: 'column'
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: 800
        },
        multiButton: {
            flex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            color: COLORS.white
        },
        desc: {
            color: COLORS.white,
            fontSize: '0.8rem',
            width: '70%',
            textAlign: 'end'
        }
    }

    return (
        <div style={styles.Footer} >
            <div style={styles.leftSide}>
                <div style={styles.iris}>
                    <h1>IRIS</h1>
                </div>
                <span style={{ fontSize: 10 }}>Phone:+92-3167631138| Email:zubairsattar38@gmail.com | Powered by Zubair Sattar</span>
            </div>
            <div style={styles.multiButton}>
                <div>
                    <h3>OFFICES</h3>
                    <p>Los Angeles</p>
                    <p>Lahore</p>
                </div>

                <div>
                    <h3>USEFUL LINKS</h3>
                    <p>Home</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h3>Who we Are</h3>
                    <p>What We Do</p>
                    <p>+92-3167631138</p>
                </div>
            </div>
            <hr />

        </div>
    )
}

export default Footer;