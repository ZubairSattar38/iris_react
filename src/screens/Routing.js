import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ContactHeader from './ContactForm/Header/ContactHeader';

function Routing(props) {
    return (

        <Router>
            <div>
                

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/contact">
                        <ContactHeader state={props.state}/>
                    </Route>
                    <Route path="/">
                        <HomeScreen state={props.state} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}



export default Routing;