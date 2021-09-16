import React, { useState, useEffect } from 'react';
import { COLORS } from '../../Color';

function ContactFooter() {
    return (
        <div style={styles.wrapper}>
        <div style={styles.ContactFooter} >
            <div style={styles.leftSide}>
                <div style={styles.ourService}>
                    <h1>Let’s Start Something &nbsp;
                        Completely New Together</h1>
                </div>
                {/* <div style={styles.title}> */}
                    <span>Drop Us A Line, And We’ll Get In Touch. We’ll See If
                        We’re A Match And How We Can Help Each Other.</span>
                {/* </div> */}
            </div>
            <div style={styles.multiButton}>
                <div style={styles.desc}>
                      <button style={styles.btn}>Creativity</button>

                    {/* <p>
                        With hundreds of projects completed for industry-leading clients, we’ve done almost every type of project. Many of which became award winners and made us proud.
                    </p> */}
                </div>
            </div>
            <hr/>

        </div>
        </div>
    )
}
const styles = {
    wrapper: {
        backgroundImage: `url("https://htmlcssmonk.com/wp-content/uploads/2020/12/screen-post-LJUaTzKtFNc-unsplash-1024x640.jpg")`,
        objectFit: 'cover',

    },
    btn: {
        backgroundColor: "black",
        color: "white",
        width: "32%",
        height: "40%",
        fontSize: 17,
        fontWeight: 800,
    },
    ContactFooter: {
        background: COLORS.black,
        opacity: 0.8,

                display: 'flex',
        alignItems: 'center',
        height: '40vh'

    },
    ourService: {
        fontSize: 15,
        fontWeight: 800
    },
    leftSide: {
        flex: 1,
        color:COLORS.white,
        paddingTop: '2%',
        paddingLeft: '12%'
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: 800
    },
    multiButton: {
        flex: 1,
        paddingLeft: '10%',
    },
    desc: {
        color:COLORS.white,
        fontSize: '0.8rem',
        width: '70%',
        textAlign: 'end'
    }
}
export default ContactFooter;