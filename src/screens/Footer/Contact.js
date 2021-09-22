import React, { useState, useEffect } from 'react';
import { COLORS } from '../../GlobalVariables';
import { useMediaQuery } from 'react-responsive';

function ContactFooter() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })


    const styles = {
        wrapper: {
            backgroundImage: `url("https://htmlcssmonk.com/wp-content/uploads/2020/12/screen-post-LJUaTzKtFNc-unsplash-1024x640.jpg")`,
            objectFit: 'cover',
    
        },
        btn: {
            backgroundColor: "black",
            color: "white",
            width: isTabletOrMobile?"100%":"32%",
            height: "40%",
            fontSize: 17,
            fontWeight: 800,
            padding: "4%"
        },
        ContactFooter: {
            background: COLORS.black,
            opacity: 0.8,
            display: 'flex',
            flexDirection: isTabletOrMobile&&'column',
            // flexDirection: isDesktopOrLaptop && 'column',
            paddingBottom:'5%',
            alignItems: !isTabletOrMobile&&'center',
            // height: '40vh'
    
        },
        ourService: {
            fontSize: 15,
            fontWeight: 800
        },
        leftSide: {
            flex: 1,
            color:COLORS.white,
            paddingTop: '2%',
            paddingLeft: isTabletOrMobile?'4%':'12%'
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: 800
        },
        multiButton: {
            flex: 1,
            paddingLeft: isTabletOrMobile?'2%':'10%',
            margin:'2%'
        },
        desc: {
            color:COLORS.white,
            fontSize: '0.8rem',
            // width: '70%',
            textAlign: 'end'
        }
    }


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

export default ContactFooter;