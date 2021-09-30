import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
function NavBar(props) {
    const styles = {
        navbar: {
            backgroundColor: props.state.primaryColor,
            display: "flex",
            flexWrap: 'wrap',
            width: '100vw',
            position: 'fixed',
            zIndex: 999999,
            marginTop: '-1%'
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
            color: props.state.primaryText,
            fontSize: '1.3em'
        },
        navbarLogo: {
            width: '10%',
            marginTop: '1%'
        }
    }

    return (
        <div style={styles.navbar}>
            <div style={styles.logo}>
                <img src={props.state.writtenlogo} style={styles.navbarLogo} />
            </div>
            <div style={styles.menu}>
                <Nav>
                    <NavItem>
                        <NavLink style={styles.menuList} href="/">Home</NavLink>
                    </NavItem>
                    {!props.isContact && <><NavItem>
                        <NavLink style={styles.menuList} href="/#about">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={styles.menuList} href="/#ourServices">Our Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={styles.menuList} href="/#project">Projects</NavLink>
                    </NavItem></>}
                   
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