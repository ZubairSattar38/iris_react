import Slider from './screens/SliderScreens/Slider';
import Creativity from './screens/BelowSlider/Creativity';
import WhatWeDo from './screens/WeDo/WhatWeDo';
import OurWork from './screens/OurWork/OurWork';
import OurPortfolio from './screens/OurWork/OurPortfolio';
import WhatTheySay from './screens/Testimonials/WhatTheySay';
import ContactFooter from './screens/Footer/Contact';
import Footer from './screens/Footer/Footer';
function App() {
  return (
    <div>
        <Slider/>
        <Creativity/>
        <WhatWeDo/>
        <OurWork/>
        <OurPortfolio/>
        <WhatTheySay/>
        <ContactFooter/>
        <Footer/>
    </div>
  );
}

export default App;
