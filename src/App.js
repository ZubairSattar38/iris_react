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
import { colorChange } from "./redux/actions/colorAction";
import store from './redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Switch from "react-switch";

// import {isDark} from './GlobalVariables'
function App() {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(true);
  useEffect(() => {
    dispatch(colorChange(true));
  }, []);
  const state = store.getState().color;



  const handleChange = () => {
    setIsToggled(!isToggled)
    dispatch(colorChange(!isToggled));

    // setDark(!isDark);
  }
  const styles = {
    container: {
      background: state.secondaryColor,
      width: '100vw',
      overflowX:'hidden'

    },
    zIndexButton: {
      position: 'fixed',
      top: '50%',
      /* right: -56px; */
      zIndex: 99999999,

      transform: 'rotate(90deg)',
    },
    paint: {
      fontSize: '1.5em',
      color: isToggled ? '#fad15f' : '#fff',
      padding: '3%',
      margin: '4%'
      // color:'white'
    }
  }
  return (
    <div style={styles.container} >
      <div style={styles.zIndexButton}>
        <Switch onChange={handleChange} checked={isToggled} width={58} uncheckedIcon={<FontAwesomeIcon style={styles.paint} icon={faLightbulb} />} checkedIcon={<FontAwesomeIcon style={styles.paint} icon={faMoon} />} />
      </div>
      <Slider state={state} />
      <Creativity state={state} />
      <WhatWeDo state={state} />
      <OurWork state={state} />
      <OurPortfolio state={state} />
      <WhatTheySay state={state} />
      <ContactFooter state={state} />
      <Footer state={state} />
    </div>
  );
}



export default App;
