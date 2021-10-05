import React, { useState, useEffect } from 'react';
import { COLORS } from '../../GlobalVariables';
import { useMediaQuery } from 'react-responsive';
import ReactWhatsapp from 'react-whatsapp';
import FooterNavbar from './FooterMenu';

function Footer(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

    const [hover, setHover] = useState(false);
    const [eyezHover, setEyezHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
    const handleEyezMouseEnter = () => {
        setEyezHover(true);
    }
    const handleEyezMouseLeave = () => {
        setEyezHover(false);
    }


    const styles = {

        btn: {
            backgroundColor: props.state.primaryColor,
            color: "white",
            width: "32%",
            height: "40%",
            fontSize: 17,
            fontWeight: 800,
        },
        Footer: {
            background: props.state.primaryColor,
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
            color: props.state.primaryText,
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
            color: props.state.primaryText
        },
        desc: {
            color: props.state.primaryText,
            fontSize: '0.8rem',
            width: '70%',
            textAlign: 'end'
        },
        footerLogo: {
            width: '50%',
            marginTop: '1%'
        },
        whatsAppBtn: {
            background: 'transparent',
            border: 'none',
            color: hover ? 'blue' : 'white',
        },
        eyezName: {
            color: eyezHover ? 'blue' : 'white',
        },
        linkUseful:{
            display: 'flex',
            flexDirection:'column'
        }
    }

    return (
        <div style={styles.Footer} >
            <div style={styles.leftSide}>
                <div style={styles.iris}>
                    <img src={props.state.writtenlogo} style={styles.footerLogo} />

                    {/* <h1>IRIS</h1> */}
                </div>
                <span style={{ fontSize: 10, marginBottom: '2%' }}>Powered by <a href="/" onMouseEnter={handleEyezMouseEnter} onMouseLeave={handleEyezMouseLeave} style={styles.eyezName}>EYEZ SOFT</a></span>
            </div>
            <div style={styles.multiButton}>
                <div>
                    <h3>OFFICES</h3>
                    <p>Los Angeles</p>
                    <p>Lahore</p>
                </div>


                <div>
                    <h4>USEFUL LINKS</h4>
                    <FooterNavbar state={props.state} />
                </div>
                <div>
                    <h3>Who we Are</h3>
                    <p>What We Do</p>
                    <ReactWhatsapp number={'+92-345-1021122'} message={'Hi I am From EYEZ'} style={styles.whatsAppBtn}>
                        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>+92-345-1021122</span>
                    </ReactWhatsapp>
                </div>
                </div>
            <hr />

        </div>
    )
}

export default Footer;