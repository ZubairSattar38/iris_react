import React, { useState, useEffect } from 'react';
import Slider from './screens/SliderScreens/Slider';
import Creativity from './screens/BelowSlider/Creativity';
import WhatWeDo from './screens/WeDo/WhatWeDo';
import OurWork from './screens/OurWork/OurWork';
import OurPortfolio from './screens/OurWork/OurPortfolio';
import WhatTheySay from './screens/Testimonials/WhatTheySay';
import ContactFooter from './screens/Footer/Contact';
import Footer from './screens/Footer/Footer';
import { useDispatch } from "react-redux";
import {colorChange} from "./redux/actions/colorAction";
import store from './redux/store';


// import {isDark} from './GlobalVariables'
function App() {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    alert("Hello World")
    dispatch(colorChange(false));
  },[]);
  const state = store.getState().color;



  const handleChange=()=>{
     setIsToggled(!isToggled)
    dispatch(colorChange(!isToggled));

    // setDark(!isDark);
  }
  const styles={
    container:{
     background:state.secondaryColor
 
    },
    zIndexButton:{
     position: 'fixed',
     top: '50%',
     /* right: -56px; */
     zIndex: 99999999,
     transform: 'rotate(90deg)',
     backgroundColor: 'red'
    }
 }
  return (
    <div style={styles.container} >
      {console.log("State Data :- ",state.primaryColor)}
      <div style={styles.zIndexButton}>
      <button onClick={handleChange}>Dark</button>
      </div>
        <Slider state={state}/>
        <Creativity state={state}/>
        <WhatWeDo state={state}/>
        <OurWork state={state}/>
        <OurPortfolio state={state}/>
        <WhatTheySay state={state}/>
        <ContactFooter state={state}/>
        <Footer state={state}/>
    </div>
  );
}



export default App;
