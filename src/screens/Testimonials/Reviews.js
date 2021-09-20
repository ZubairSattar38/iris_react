import React, { useState, useEffect } from 'react';
import { COLORS } from '../../GlobalVariables';

function Reviews(props) {
    return (
        <div style={styles.review_Wrapper}>
        <div style={styles.review}>

            <div style={styles.reviewLeftSide}>
                <img style={styles.image} src={props.image}/>
                    <h1>{props.title}</h1>
            </div>
            <div style={styles.multiButton}>
                <div style={styles.desc}>
                    <img src="https://codingpixel.com/wp-content/themes/cp-theme/images/icons/inverted-comma.svg"/>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
const styles = {
    image:{
        width:'25%',
        marginTop:'-20%',
        position: 'relative',

        // paddingLeft:'30%'
    },
    review: {
        display: 'flex',
        backgroundColor: COLORS.black,
        width: '70%',
        borderRadius:6,

        justifyContent: 'center',
    },
    reviewLeftSide:{
        // backgroundImage: linearGradient(to right, 'black' '50%', 'blue' '50%'),
        flex: 1,
        display: 'flex',
        flexDirection:'column',
        textAlign: "left",
        alignSelf:'center',
        width:'50%',
        paddingLeft:20,
        color: COLORS.white,

    },
    review_Wrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom:'3%'
    },
    multiButton: {
        flex: 1.5,
        paddingTop:"5%",
        alignSelf: 'end',
        textAlign: 'justify'
        
    },
    desc: {
        fontSize: '0.8rem',
        width: '70%',
        paddingLeft: '10%',
        color: COLORS.white
    }
}
export default Reviews;