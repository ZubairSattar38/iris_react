import React, { useState, useEffect } from 'react';
import { COLORS } from '../../Color';
import WorkColumn from './WorkColumn';
import './Work.css'

function OurPortfolio() {
    return (
        <div style={styles.ourWork}>
            <div style={styles.card} className="moveArrow">
                <WorkColumn image="https://s3.amazonaws.com/www-inside-design/uploads/2018/07/do_ui_kit_hero_floating_devices-2x.png" title='Blockchain Development' desc='Coding pixel is a blockchain development company in USA with comprehensive knowledge of blockchain technology,' />
            </div>
            <div style={styles.card}>
                <WorkColumn image="https://codingpixel.com/wp-content/webpc-passthru.php?src=https://codingpixel.com/wp-content/uploads/2021/05/blockchain-1.png&nocache=1" title='Laravel Development' desc='Coding pixel is a blockchain development company in USA with comprehensive knowledge of blockchain technology,' />
            </div>
        </div>
    )
}
const styles = {
    ourWork: {
        display: 'flex',
        // background: COLORS.grey,
        background: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        display: 'flex',
        padding: 10,
    }

}
export default OurPortfolio;