import React, { useState, useEffect } from 'react';
import Slider from './HomeScreen/SliderScreens/Slider';
import Creativity from './HomeScreen/SliderScreens/BelowSlider/Creativity';
import WhatWeDo from './HomeScreen/WeDo/WhatWeDo';
import OurWork from './HomeScreen/OurWork/OurWork';
import OurPortfolio from './HomeScreen/OurWork/OurPortfolio';
import WhatTheySay from './HomeScreen/Testimonials/WhatTheySay';
import ContactFooter from './Footer/Contact';
import Footer from './Footer/Footer';

// import {isDark} from './GlobalVariables'
function HomeScreen(props) {
  return (
        <>
        <Slider state={props.state} />
        <Creativity state={props.state} />
        <WhatWeDo state={props.state} />
        <OurWork state={props.state} />
        <OurPortfolio state={props.state} />
        <WhatTheySay state={props.state} />
        <ContactFooter state={props.state} />
        <Footer state={props.state} />
    </>
  );
}



export default HomeScreen;
