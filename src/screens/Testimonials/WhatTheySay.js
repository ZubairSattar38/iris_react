import React, { useState, useEffect } from 'react';
import { COLORS } from '../../Color';

function WhatTheySay() {
    return (
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
    )
}
const styles = {
    WhatTheySay: {
        display: 'flex',
        background: COLORS.midGrey,
        alignItems: 'center',
        height:'30vh'
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