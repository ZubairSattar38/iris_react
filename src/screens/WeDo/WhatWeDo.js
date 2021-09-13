import React, { useState, useEffect } from 'react';
import { COLORS } from '../../Color';
import Services from './Services';
function WhatWeDo() {
    return (
        <div style={styles.whatWeDo}>
            <div style={styles.leftSide}>
                <div style={styles.ourService}>
                    <p>OUR SERVICE</p>
                </div>
                <div style={styles.title}>
                    <span>What <br /> &emsp; &emsp; We Do</span>
                </div>
                <div style={styles.desc}>
                    <p>With immense experience, Coding Pixel is the leading provider of software, app and web development projects in USA. Coding Pixel can help you achieve hard to reach goals.</p>
                </div>
            </div>
            <div style={styles.multiButton}>
                <div style={styles.item}>
                    <Services image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/blockchain-1.png&nocache=1" title='Blockchain Development' desc='Coding pixel is a blockchain development company in USA with comprehensive knowledge of blockchain technology,' />
                </div>
                <div style={styles.item}>
                    <Services image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/mob-app.png&nocache=1" title='MobileApp Development' desc='Coding Pixel is an App Development Company in Los Angeles Best Mobile App development company in Los Angeles, CA for (iPhone, Android & iPad) mobile apps and mobile games development' />
                </div>
                <div style={styles.item}>
                    <Services image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/backend-1.png&nocache=1" title='Laravel Development' desc='We’ve been in the US market as Laravel development experts for more than five years now, we choose to work with Laravel because we know live in the world of technology' />
                </div>


                <div style={styles.item}>
                    <Services image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/shopify-1.png&nocache=1" title='Shopify Development' desc='Our certified Shopify developers and Shopify store web designers work exclusively on the Shopify platform to build beautiful custom-tailored eCommerce storefront' />
                </div>
                <div style={styles.item}>
                    <Services image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/ux-1.png&nocache=1" title='Wordpress Development' desc='A WordPress developer is a programmer who makes websites, plugins, and themes for the WordPress platform' />
                </div>
                <div style={styles.item}>
                    <Services image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/web-1.png&nocache=1" title='Website Development' desc='Website development company los angeles (la), hire top website developers, website designers & website programmers in los angeles' />
                </div>

            </div>
        </div>
    )
}
const styles = {
    whatWeDo: {
        display: 'flex',
    },
    ourService: {
        fontSize: 15,
        fontWeight: 800
    },
    leftSide: {
        flex: 1,
        paddingTop:'2%',
        textAlign: "center",
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: 800
    },
    multiButton: {
        background: COLORS.black,
        flex: 1.5,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'space-between',
        padding:'2%',
    },
    item:{
        width: '33%'
    },
    desc: {
        width: '55%',
        float: 'center',
        textAlign: 'center',
        float: 'right',
        paddingRight: '16%',
        textAlign: 'justify'
    },
}
export default WhatWeDo;