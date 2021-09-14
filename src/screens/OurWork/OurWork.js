import React, { useState, useEffect } from 'react';
import { COLORS } from '../../Color';

function OurWork() {
    return (
        <div style={styles.ourWork} >
            <div style={styles.leftSide}>
                <div style={styles.ourService}>
                    <p>OUR WORK</p>
                </div>
                <div style={styles.title}>
                    <span>We Love <br /> &emsp; &emsp; Our Work</span>
                </div>
            </div>
            <div style={styles.multiButton}>
                <div style={styles.desc}>
                    <p>
                        With hundreds of projects completed for industry-leading clients, we’ve done almost every type of project. Many of which became award winners and made us proud.
                    </p>
                </div>
            </div>
        </div>
    )
}
const styles = {
    ourWork: {
        display: 'flex',
        background: COLORS.grey,
        alignItems: 'center',
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
export default OurWork;