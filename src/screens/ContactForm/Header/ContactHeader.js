import React, { component } from "react";
import NavBar from "../../HomeScreen/SliderScreens/Navbar";
// import ContactHeaderText from "./ContactHeaderText";
import { COLORS, IMAGES } from "../../../GlobalVariables";
// import lightLogo from '../../images/lighteyez.png'
import { useMediaQuery } from 'react-responsive';
import ContactFooter from "../../Footer/Contact";
import ContactForm from "../FormSection/Form";
import Footer from "../../Footer/Footer";
function ContactHeader(props) {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 983px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1114px)' })

    const isLargeScaleTablet = useMediaQuery({ query: '(min-width: 1092px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    // alert("Primary Color :- ",props.primaryColor)
    const styles = {
        textLogoWrapper: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '2%',
            margin: '3vw',
            fontSize: 20
        },
        ContactHeader: {
            background: props.state.primaryColor,
            flexWrap: 'wrap'
        },
        ContactHeaderText: {
            flex: 1,
            // alignItems:'center',
            color: props.state.primaryText,
            flexWrap: 'wrap'
        }, container: {
            display: 'flex',
            flexDirection: 'Column'
        },
        form: {
            flex: 1,
            padding:'2%'
        }

    }


    return (
        <div style={styles.container}>
            <div style={styles.ContactHeader}>
                {/* <iframe src="//static.iohk.io/fluid2/"></iframe> */}
                <NavBar state={props.state} />
                <div style={styles.textLogoWrapper}>
                    <div style={styles.ContactHeaderText}>

                        <h1>Contact US </h1>
                        <p>Please help us to respond better to your query by filling out the relevant form.</p>    
                                    </div>

                </div>
            </div>
            <div style={styles.form}>
                <ContactForm  state={props.state}/>
            </div>
            <ContactFooter state={props.state}/>
            <Footer state={props.state}/>
        </div>
    )

}


export default ContactHeader;

