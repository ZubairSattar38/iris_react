import React, { component } from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

import {
    Link
} from "react-router-dom";
function NavBar(props) {
    const styles = {
        navbar: {
            display: "flex",
            flexWrap: 'wrap',
        },
        logo: {
            flex: 1,
            marginTop: 13,
            marginLeft: 10,
            color: props.state.primaryText
        },
        menu: {
            marginTop: 13,
            marginRight: 10,
            color: props.state.primaryText

        },
        menuList: {
            color: 'white',
            fontSize: '1.3em'
        }
    }
    return (
        <div style={styles.navbar}>
            <div style={styles.logo}>
                <h1>Iris</h1>
            </div>
            <div style={styles.menu}>
                <Nav>
                    <NavItem>
                        <NavLink style={styles.menuList} href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={styles.menuList} href="/contact">Contact Us</NavLink>
                    </NavItem>
        

                </Nav>
            </div>
        </div>
    )
}

export default NavBar;


