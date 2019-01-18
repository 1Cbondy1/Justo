import React from "react";
import Navs from "../components/Nav"


function Landing() {
    return (
        <div className="landing-page">
                <Navs page ="Justo" />

            <img className="landing-logo" src="images/justo-logo.png"/>
            <p className="text-block">Justo is a robust tracking application that allows for clear real-time information regarding rates, hours, payment and invoicing, and important dates for freelancers and employers. Justo acts as the acts as the intermediary - keeping all parties on the same timeline and ensuring that fair work is rewarded with fair pay.</p>
            <div>
                <button className="justo-button">Signup</button>
                <button className="justo-button"><a href="/dashboard">Login</a></button>
            </div>
        </div>
);
}

export default Landing;
