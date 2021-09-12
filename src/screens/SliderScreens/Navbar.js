import React,{component} from "react";

class NavBar extends React.Component{
    render(){
        return (
            <div style={styles.navbar}>
                <div style={styles.logo}>
                <h1>Iris</h1>
                </div>
                <div style={styles.menu}>
                   <h1>Menu</h1>
                </div>
            </div>
        )
    }
}
const styles={
    navbar: {
        display:"flex",
        flexWrap:'wrap',
    },
    logo:{
        flex:1,
        marginTop: 13,
        marginLeft:10,
    },
    menu:{
        marginTop: 13,
        marginRight:10,
     
    }
}
export default NavBar;