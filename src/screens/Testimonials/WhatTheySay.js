import React, { useState, useEffect } from 'react';
import { COLORS } from '../../GlobalVariables';
import Reviews from './Reviews';
import { useMediaQuery } from 'react-responsive';


function WhatTheySay() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1100px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })
    const styles = {
        Review: {
            background: `linear-gradient(to bottom, ${COLORS.midGrey} 0%,  ${COLORS.midGrey} 50%, ${COLORS.white} 50%, ${COLORS.white} 100%)`,

        },
        WhatTheySay: {

            display: 'flex',
            background: COLORS.midGrey,
            alignItems: isTabletOrMobile ? 'left' : isDesktopOrLaptop && 'left',
            alignItems: !isTabletOrMobile && !isDesktopOrLaptop && 'center',
            flexDirection: isTabletOrMobile ? 'column' : isDesktopOrLaptop ? 'column' : 'row',
            paddingLeft: '3%',
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
            textAlign: isTabletOrMobile ? 'left' : isDesktopOrLaptop && 'left',
            textAlign: !isTabletOrMobile && !isDesktopOrLaptop && 'center',
        },
        title: {
            fontSize: isTabletOrMobile ? '2rem' : '3.5rem',
            fontWeight: 800
        },
        multiButton: {
            flex: 1.5,
            paddingLeft: !isTabletOrMobile && !isDesktopOrLaptop && '10%',
        },
        desc: {
            fontSize: '0.8rem',
            width: '70%'
        }
    }
    return (
        <div>
            <div style={styles.WhatTheySay} >
                <div style={styles.leftSide}>
                    <div style={styles.title}>
                        <span>What <br /> &emsp; &nbsp; They Say</span>
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

export default WhatTheySay;













// import React, { useState, useEffect } from 'react';
// import { COLORS } from '../../GlobalVariables';
// import { useMediaQuery } from 'react-responsive';

// function OurWork() {

//     const isDesktopOrLaptop = useMediaQuery({
//         query: '(max-width: 980px)'
//     })
//     const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
//     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })

//     const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//     const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

//     const isLargeScaleTablet = useMediaQuery({ query: '(max-width: 1092px)' })
//     const styles = {
//         ourWork: {
//             display: 'flex',
//             background: COLORS.white,
//             alignItems: isTabletOrMobile ?'left':isDesktopOrLaptop &&'left',
//             alignItems: !isTabletOrMobile && !isDesktopOrLaptop &&'center',
//             flexDirection: isTabletOrMobile ?'column':isDesktopOrLaptop?'column':'row',
//             paddingLeft: '3%'
//         },
//         ourService: {
//             fontSize: 15,
//             fontWeight: 800
//         },
//         leftSide: {
//             flex: 1,
//             paddingTop: '2%',
//         },
//         title: {
//             fontSize: isTabletOrMobile ? '2rem' : '3.5rem',
//             fontWeight: 800
//         },
//         multiButton: {
//             flex: 1.5,
//             paddingLeft: '10%',
//         },
//         desc: {
//             fontSize: '0.8rem',
//             width: '70%'
//         }
//     }
//     return (
//         <div style={styles.ourWork} >
//             <div style={styles.leftSide}>
//                 <div style={styles.ourService}>
//                     <p>OUR WORK</p>
//                 </div>
//                 <div style={styles.title}>
//                     <span>We Love <br /> &emsp; &nbsp; Our Work</span>
//                 </div>
//             </div>
//             <div style={styles.multiButton}>
//                 <div style={styles.desc}>
//                     <p>
//                         With hundreds of projects completed for industry-leading clients, we’ve done almost every type of project. Many of which became award winners and made us proud.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurWork;