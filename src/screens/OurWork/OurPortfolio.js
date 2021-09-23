import React, { useState, useEffect } from 'react';
import { COLORS } from '../../GlobalVariables';
import WorkColumn from './WorkColumn';
import './Work.css'

function OurPortfolio(props) {
    return (
        <div style={styles.ourWork}>
            <div style={styles.leftCard} className="moveArrow card">
                <WorkColumn image="https://s3.amazonaws.com/www-inside-design/uploads/2018/07/do_ui_kit_hero_floating_devices-2x.png" title='Blockchain Development' desc='Coding pixel is a blockchain development company in USA with comprehensive knowledge of blockchain technology,' />
            </div>
            <div style={styles.rightCard} >
                <WorkColumn image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/06/GAME-SAVER-2-SCREENS-1.png&nocache=1" title='Laravel Development' desc='Coding pixel is a blockchain development company in USA with comprehensive knowledge of blockchain technology,' />
            </div>
            <div style={styles.leftCard} >
                <WorkColumn image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/06/Background-42-1.png&nocache=1" title='Laravel Development' desc='Coding pixel is a blockchain development company in USA with comprehensive knowledge of blockchain technology,' />
            </div>
            <div style={styles.rightCard} className="moveArrow card">
                <WorkColumn image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/06/Background-39-1.png&nocache=1" title='Laravel Development' desc='Coding pixel is a blockchain development company in USA with comprehensive knowledge of blockchain technology,' />
            </div>
        </div>
    )
}
const styles = {
    ourWork: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',

    },
    rightCard: {
        flex: '50%',
        margin: 5,
        padding: 10,
        // justifyContent:'flex-start'
    },
    leftCard: {
        flex: '40%',
        margin: 5,
        padding: 10,
        display: 'flex',
        justifyContent: 'flex-end',

        paddingLeft: '4%'


    }

}
export default OurPortfolio;