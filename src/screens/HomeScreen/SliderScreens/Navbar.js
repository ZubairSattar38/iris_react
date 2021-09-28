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




// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// const Example = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);
//   const styles = {
//     navbar: {
//         display: "flex",
//         flexWrap: 'wrap',
//     },
//     logo: {
//         flex: 1,
//         marginTop: 13,
//         marginLeft: 10,
//         color: props.state.primaryText
//     },
//     menu: {
//         marginTop: 13,
//         marginRight: 10,
//         color: props.state.primaryText

//     },
//     menuList: {
//         lisStyle: 'none',
//         margin: 0,
//         padding: 0,
//         overflow: 'hidden',
//         float: 'left',
//     },dropdown:{
//         display: 'flex',
//     justifyContent: 'center',
//     fontSize: '2em',
//     height:'100vh',
//     alignItems:'center',
//     color:'white'
//     }
// }
//   return (
//     <div>
//       <Navbar color="faded" dark>
//         <NavbarBrand href="/" className="mr-auto" style={styles.logo}>Eyez</NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar >
//           <Nav navbar style={styles.dropdown}>
//             <NavItem>
//             {/* <Link to="/">Home</Link> */}
//               <NavLink href="/">Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/contact">Contact Us</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;