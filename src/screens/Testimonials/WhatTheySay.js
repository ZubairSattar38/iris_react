import React, { useState, useEffect } from 'react';
import { COLORS } from '../../GlobalVariables';
import Reviews from './Reviews';

function WhatTheySay() {
    return (
        <div>
            <div style={styles.WhatTheySay} >
                <div style={styles.leftSide}>
                    <div style={styles.title}>
                        <span>What <br /> &emsp; &emsp; They Say</span>
                    </div>
                </div>
                <div style={styles.multiButton}>
                    <div style={styles.desc}>
                        <p>
                            Happy Clients Whom We Were Pleased To Work With
                        </p>
                    </div>
                </div>
            </div>
            <div style={styles.Review}>
                <Reviews title="JOHN WATSON" image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/profile-img.png&nocache=1" desc="Coding Pixel brought to the table winning strategies that helped take my business to the next level. Our e-commerce efforts are now our leading driver of revenue after less than a year from launch." />
            </div>
        </div>
    )
}
const styles = {
    Review: {
        background: `linear-gradient(to bottom, ${COLORS.midGrey} 0%,  ${COLORS.midGrey} 50%, ${COLORS.white} 50%, ${COLORS.white} 100%)`,

    },
    WhatTheySay: {
        display: 'flex',
        background: COLORS.midGrey,
        alignItems: 'center',
        paddingBottom: '4%'
        // height: '30vh'
    },
    ourService: {
        fontSize: 15,
        fontWeight: 800
    },
    leftSide: {
        flex: 1,
        paddingTop: '2%',
        textAlign: "center",
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: 800
    },
    multiButton: {
        flex: 1.5,
        paddingLeft: '10%',
    },
    desc: {
        fontSize: '0.8rem',
        width: '70%'
    }
}
export default WhatTheySay;